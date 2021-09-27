<script>
  import { brands } from "../../contents/blog";

  import Section from "../section.svelte";
</script>

<Section
  class="text-center bg-off-white pt-small shadow-normal rounded-2xl px-small"
>
  <h2>Thanks to our partners</h2>
  <div class="flex flex-wrap justify-around mt-small">
    {#each brands as { logo, alt }}
      <div class="flex justify-center mb-small w-32">
        <img src="/{logo}" {alt} class="h-7 w-28" />
      </div>
    {/each}
  </div>
</Section>
