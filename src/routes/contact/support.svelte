<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import type { Form } from "$lib/types/form.type";
  import type { Email } from "../../functions/submit-form";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import SubmissionSuccess from "$lib/components/submission-success.svelte";
  import { onMount } from "svelte";
  import Section from "$lib/components/section.svelte";
  import { trackEvent, trackIdentity } from "$lib/components/segment.svelte";
  import Header from "$lib/components/header.svelte";
  import Textarea from "$lib/components/ui-library/textarea";
  import Input from "$lib/components/ui-library/input";
  import Checkbox from "$lib/components/ui-library/checkbox";
  import Button from "$lib/components/ui-library/button";
  import Card from "$lib/components/ui-library/card";

  const studentUnlimitedSubject = "Educational Discount Verification";

  const otherSubject = "Other";
  const subjects = [
    "Abuse Report",
    "Billing",
    studentUnlimitedSubject,
    "Self-hosting Gitpod",
    "Open Source Sponsorship",
    otherSubject,
  ];

  let isStudentEmailNoteShown: boolean = false;
  let sectionStart: HTMLElement;

  $: if (formData.selectedSubject.value === studentUnlimitedSubject) {
    isStudentEmailNoteShown = true;
  } else {
    isStudentEmailNoteShown = false;
  }

  const formData: Form = {
    consent: {
      el: null,
      valid: false,
      checked: false,
    },
    email: {
      el: null,
      valid: false,
      value: "",
    },
    message: {
      el: null,
      valid: false,
      value: "",
    },
    name: {
      el: null,
      valid: false,
      value: "",
    },
    selectedSubject: {
      el: null,
      valid: false,
      value: "",
    },
  };
  let isFormDirty = false;
  let isEmailSent = false;

  $: isFormValid = Object.values(formData).every((field) => field.valid);

  const handleClick = () => {
    if (!formData.selectedSubject.value) {
      formData.selectedSubject.value = otherSubject;
      formData.selectedSubject.valid = true;
    }
  };

  const handleSubmit = async () => {
    isFormDirty = true;
    if (!isFormValid) {
      return;
    }

    trackIdentity({
      name_untrusted: formData.name.value,
      email_untrusted: formData.email.value,
    });

    trackEvent("message_submitted", {
      subject: formData.selectedSubject.value,
    });

    const email: Email = {
      replyTo: {
        email: formData.email.value,
        name: formData.name.value,
      },
      subject:
        formData.selectedSubject.value +
        "  (from " +
        formData.email.value +
        ")",
      message: formData.message.value,
    };

    try {
      const response = await fetch("/.netlify/functions/submit-form", {
        method: "POST",
        body: JSON.stringify(email),
      });
      if (response.ok) {
        isEmailSent = true;
        setTimeout(() => {
          sectionStart.scrollIntoView();
        });
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  onMount(() => {
    if (window.location.search.includes("open-source-sponsorship")) {
      formData.selectedSubject.value = "Open Source Sponsorship";
      formData.selectedSubject.valid = true;
    }
  });
</script>

<style lang="postcss">
  .h3 {
    @apply mb-small;
  }

  p {
    color: var(--dark-grey);
  }
  form {
    max-width: 45rem;
    margin: auto;
  }
  fieldset ul {
    display: flex;
    flex-flow: wrap;
  }
  fieldset li {
    margin: 0 1rem 0 0;
  }
</style>

<OpenGraph
  data={{
    description:
      "Need help with any question or issue? Please get in contact and we’ll get onto it right away.",
    title: "Contact Support",
  }}
/>

<Header
  title="Contact Support"
  text="Need help with any question or issue? Please get in contact and we’ll get
  onto it right away."
  tight={true}
  class="max-w-2xl"
/>

<Card
  size="small"
  class="p-xx-small sm:py-small sm:px-x-small md:p-medium sm:mx-8 mb-xx-large"
>
  <Section id="form" style="margin: 0; padding: 0">
    <div bind:this={sectionStart} data-analytics={`{"dnt":true}`}>
      {#if isEmailSent}
        <SubmissionSuccess
          title="Thank you for your message"
          text="We received your message. Our team will take a look and get back to you as
      soon as possible."
        />
      {:else}
        <form on:submit|preventDefault={handleSubmit} novalidate>
          <h2 class="h3 text-center">Send us a message</h2>
          <ul class="space-y-8">
            <li class:error={isFormDirty && !formData.selectedSubject.valid}>
              <fieldset class="flex">
                <legend>Please choose a subject*</legend>
                <ul>
                  {#each subjects as subject, index}
                    <li>
                      <input
                        id="subject-{index}"
                        type="radio"
                        bind:group={formData.selectedSubject.value}
                        bind:this={formData.selectedSubject.el}
                        on:change={() => {
                          formData.selectedSubject.valid =
                            formData.selectedSubject.value &&
                            formData.selectedSubject.el.validity.valid;
                        }}
                        value={subject}
                        name="subject"
                      />
                      <label for="subject-{index}" class="font-medium"
                        >{subject}</label
                      >
                    </li>
                  {/each}
                </ul>
              </fieldset>
            </li>
            <li>
              <Input
                hasError={isFormDirty && !formData.name.valid}
                label="Name*"
                id="name"
                name="name"
                bind:value={formData.name.value}
                bind:element={formData.name.el}
                on:change={() => {
                  formData.name.valid =
                    formData.name.value && formData.name.el.checkValidity();
                }}
                type="text"
                autocomplete="name"
              />
            </li>
            <li class:error={isFormDirty && !formData.email.valid}>
              <label class="cursor-pointer" for="email"
                >E-mail*
                {#if isStudentEmailNoteShown}
                  (Please use your student or faculty email)
                {/if}
              </label>
              <Input
                hasError={isFormDirty && !formData.email.valid}
                id="email"
                name="e-mail"
                bind:value={formData.email.value}
                bind:element={formData.email.el}
                on:change={() => {
                  formData.email.valid =
                    formData.email.value && formData.email.el.checkValidity();
                }}
                type="email"
                autocomplete="email"
              />
            </li>
            <li>
              <Textarea
                id="message"
                label="Your message*"
                name="message"
                hasError={isFormDirty && !formData.message.valid}
                bind:value={formData.message.value}
                bind:element={formData.message.el}
                on:change={() => {
                  formData.message.valid =
                    formData.message.value &&
                    formData.message.el.validity.valid;
                }}
                cols="30"
                rows="10"
              />
            </li>
            <li>
              <Checkbox
                hasError={isFormDirty && !formData.consent.valid}
                label="I consent to having this website store my submitted information so that a support staff can respond to my inquiry."
                bind:checked={formData.consent.checked}
                bind:element={formData.consent.el}
                on:change={() => {
                  formData.consent.valid =
                    formData.consent.checked &&
                    formData.consent.el.validity.valid;
                }}
              />
            </li>
            <li>
              <Button
                variant="cta"
                size="medium"
                on:click={handleClick}
                type="submit"
                class="btn"
                disabled={isFormDirty && !isFormValid}
                >Send message
              </Button>
              {#if isFormDirty && !isFormValid}
                <legend class="text-xs text-error block mt-1 mb-2">
                  Please fill out all required fields above
                </legend>
              {/if}
            </li>
          </ul>
          {#if isEmailSent}
            <p>Thank you! We'll get back to you soon.</p>
          {/if}
        </form>
      {/if}
    </div>
  </Section>
</Card>
