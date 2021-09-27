<script lang="ts">
  export let href: string;
  let clazz = "";
  export { clazz as class };
</script>

<style type="text/postcss">
  a {
    @apply block no-underline;
  }

  a:hover,
  a:focus {
    @apply underline;
    text-decoration-thickness: 2px;
  }

  .h3 {
    @apply text-h4 !important;
  }
</style>

<a
  {href}
  class="text-black h3 font-semibold transition-all duration-200 {clazz}"
>
  <slot />
</a>
