<script lang="ts">
  import Card from "$lib/components/ui-library/card";
  import Section from "../section.svelte";
  import Brands from "./brands.svelte";
  let clazz = "";
  export { clazz as class };
  export let isCard: boolean = true;

  export let title: string;
</script>

{#if isCard}
  <Card size="small">
    <Section class="text-center {clazz}" {...$$restProps}>
      <h2 class="h3">{title}</h2>
      <Brands />
    </Section>
  </Card>
{:else}
  <Section class="text-center {clazz}" {...$$restProps}>
    <h2 class="h3">{title}</h2>
    <Brands />
  </Section>
{/if}
