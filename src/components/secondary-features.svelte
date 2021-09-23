<script lang="ts">
  import type { SecondaryFeature as SecondaryFeatureType } from "../types/secondary-feature.type";
  import SecondaryFeature from "./secondary-feature.svelte";
  import Section from "./section.svelte";
  export let secondaryFeatures: SecondaryFeatureType[];
</script>

<Section class="flex flex-col items-center space-y-small lg:items-stretch lg:space-y-0 lg:flex-row lg:space-x-xx-small max-w-screen-xl mx-auto">
  {#each secondaryFeatures as secondaryFeature}
    <SecondaryFeature {secondaryFeature} />
  {/each}
</Section>
