<script lang="ts">
  import type { Project } from "$lib/types/project.type";
  import LinkButton from "$lib/components/ui-library/link-button";
  import Button from "$lib/components/ui-library/button";

  export let project: Project;

  const { logo, alt, title, githubUrl, trackingName } = project;
</script>

<LinkButton
  class="flex h-14 items-center justify-between group"
  variant="cta"
  size="large"
  href={`https://gitpod.io#${githubUrl}`}
  target="_blank"
  aria-label={alt}
  data-analytics={`{"context":"example_workspace","label":"` +
    trackingName +
    `"}`}
  rel="noopener"
>
  <div class="flex items-center">
    <img
      src={`/${logo}`}
      {alt}
      class="mr-micro transition-all duration-200 delay-[50ms] grayscale group-focus:grayscale-0 group-hover:grayscale-0"
      width="24"
      height="24"
    />
    <div class="text-black">
      {title}
    </div>
  </div>
  <Button
    class="hidden transition-all duration-200 delay-[50ms] group-hover:inline-block"
    variant="tertiary"
    size="medium">Launch workspace</Button
  >
</LinkButton>
