<script>
  import { brands } from "../../contents/home";
  import Brand from "./brand.svelte";
</script>

<style>
  .brands {
    max-width: 1130px;
  }
</style>

<div class="brands flex flex-wrap justify-center items-center mx-auto">
  {#each brands as brand}
    <Brand {brand} />
  {/each}
</div>
