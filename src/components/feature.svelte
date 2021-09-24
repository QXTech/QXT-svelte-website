<script lang="ts">
  import type { Feature } from "../types/feature.type";
  import Console from "./console.svelte";
  import Section from "./section.svelte";

  export let feature: Feature;
  const {
    documentationLink,
    moreButton,
    paragraph,
    title,
    terminal,
    image,
    previewComponent,
  } = feature;
</script>

<style lang="scss">
  :global(.feature-container-section:nth-of-type(even)) {
    .preview {
      @apply col-start-1;
      @apply row-start-1;
    }
  }
</style>

<Section class="feature-container-section">
  <div
    class="feature grid justify-center items-center md:grid-cols-2 lg:gap-32 gap-small"
  >
    <div class="sm:my-micro md:my-0">
      <div class="text-large">
        <h2 class="h3">{title}</h2>
        <p class="mt-micro">{paragraph}</p>
      </div>
      {#if moreButton || documentationLink}
        <div class="mt-xx-small md:mt-small">
          <a
            href={moreButton.href}
            class={`btn-${moreButton.type || "primary"}`}
          >
            {moreButton.text}
          </a>
          {#if documentationLink}
            <a href={documentationLink} class="btn-secondary">Documentation </a>
          {/if}
        </div>
      {/if}
    </div>
    <div
      class="preview w-full col-start-1 row-start-1 md:col-start-auto md:row-start-auto"
    >
      {#if terminal}
        <Console 
          source={terminal.source} 
          dark={terminal.dark}
          narrow={terminal.narrow}
          shadow={terminal.shadow}
          skipToEnd={terminal.skipToEnd} 
        />
      {/if}
      {#if image}
        <img
          src={image.src}
          alt={image.alt}
          class="{image.classNames} mx-auto"
          style={image.styles}
        />
      {/if}
      {#if previewComponent}
        <svelte:component this={previewComponent} />
      {/if}
    </div>
  </div>
</Section>
