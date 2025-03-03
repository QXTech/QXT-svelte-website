<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import Feature from "$lib/components/feature.svelte";
  import { feature } from "$lib/contents/extension-activation";
  import Config from "$lib/components/extension-activation/config.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Header from "$lib/components/header.svelte";

  const currentBrowser = ["Opera", "Chrome", "Firefox", "IE"].find(
    (browser) =>
      typeof window !== "undefined" &&
      window.navigator.userAgent.includes(browser)
  );

  const features = [
    {
      icon: "/images/extension-activation/prebuild.svg",
      title: "Skip the Waiting",
      description:
        "Gitpod continuously builds your git branches like a CI server. This means no more waiting for dependencies to be downloaded and builds to finish.",
    },
    {
      icon: "/images/extension-activation/collaborate.svg",
      title: "Code Together",
      description:
        "Do code reviews within Gitpod, work together in one workspace in real-time and share reproducible workspaces with your team.",
    },
    {
      icon: "/images/extension-activation/fresh.svg",
      title: "Work Remotely",
      description:
        "You no longer need an over-powered laptop, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a browser.",
    },
  ];
</script>

<OpenGraph
  data={{
    description: "The browser extension has been installed.",
    title: "Extension Activation",
    norobots: true,
  }}
/>

<Header
  title="Gitpod for {currentBrowser} is Now Active"
  text="The browser extension has been installed."
/>

<Feature {feature} />

<Config />

<section
  class="flex items-center lg:items-stretch flex-col lg:flex-row sm:pb-huge space-y-small lg:space-y-0 lg:space-x-xx-small"
>
  {#each features as feature}
    <div
      class="text-center py-small px-xx-small bg-gray-100 rounded-4xl lg:w-1/3 max-w-md"
    >
      <div>
        <!-- svelte-ignore a11y-missing-attribute -->
        <img
          src={feature.icon}
          role="presentation"
          class="mx-auto mb-xx-small h-28 w-28"
        />
        <h2 class="h3">{feature.title}</h2>
        <p>{feature.description}</p>
      </div>
    </div>
  {/each}
</section>
