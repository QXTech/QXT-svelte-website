<script lang="ts">
  export let value: boolean;
</script>

<style type="text/postcss">
  .toggle-container {
    height: 28px;
    width: 55px;
    background: linear-gradient(137.41deg, #ffad33 14.37%, #ff8a00 91.32%);
    border-radius: 20px;
  }

  label {
    @apply mb-0 cursor-pointer;
  }

  span {
    height: 22px;
    width: 22px;
    border-radius: 50%;
    left: calc(100% - 25px);
    transition: .4s left cubic-bezier(0.16, 1, 0.3, 1);
  }

  input:checked + span {
    left: 3px;
  }
</style>

<div class="flex justify-center items-center space-x-micro mt-x-small mb-macro">
  <label for="toggle">Desktop</label>
  <div class="toggle-container relative flex items-center cursor-pointer">
    <input id="toggle" type="checkbox" on:change={(e) => value = e.currentTarget.checked } class="h-full w-full" />
    <span class="absolute block bg-white pointer-events-none" />
  </div>
  <label for="toggle">Browser</label>
</div>
