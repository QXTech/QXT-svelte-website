<script lang="ts">
  export let id: string = "";
  let clazz = "";
  export { clazz as class };
</script>

<style lang="scss">
  section {
    margin-top: var(--xx-large);

    &:last-of-type {
      margin-bottom: var(--xx-large);
    }

    @media (max-width: 972px) {
      margin-top: var(--x-huge);

      &:last-of-type {
        margin-bottom: var(--x-huge);
      }
    }
  }
</style>

<section {id} class={clazz}>
  <slot />
</section>
