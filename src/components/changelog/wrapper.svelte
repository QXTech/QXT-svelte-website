<script>
  let clazz = "";
  export { clazz as class };
</script>

<style type="text/postcss">
  :global(h2) {
    @apply mt-12 mb-4 md:mt-16 !important;
  }

  :global(h3) {
    @apply mt-12 mb-6 md:mt-16 md:mb-8 !important;
  }

  :global(li) {
    @apply mt-0 mb-3;
  }
</style>

<div class="content-docs {clazz}">
  <slot />
</div>
