<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let ides;

  const dispatch = createEventDispatcher();

  const hasNoScreenshots = (name) =>
    ides.find((ide) => ide.name === name).screenshots === undefined;

  const handleMouseEnter = (e, name) => {
    const [iconDiv, soonSpan]: HTMLElement[] = e.target.children;
    if (hasNoScreenshots(name)) {
      iconDiv.classList.remove("grayed")
      soonSpan.style.display = 'flex';
    } else {
      iconDiv.classList.add("grayed")
    }

    if (!hasNoScreenshots(name)) {
      dispatch("message", {
        text: name,
      });
    }
  };

  const handleMouseLeave = (e, name) => {
    const [iconDiv, soonSpan]: HTMLElement[] = e.target.children;
    if(hasNoScreenshots(name)) {
      iconDiv.classList.add('grayed')
      soonSpan.style.display = 'none';
    } else {
      iconDiv.classList.remove("grayed")
    }
  };
</script>

<style type="text/postcss">
  .icon-box {
    height: 71px;
    width: 71px;

    @media (max-width: 1140px) {
      height: 55px;
      width: 55px;
    }

    @media (max-width: 540px) {
      height: 48px;
      width: 48px;
    }

    @media (max-width: 460px) {
      height: 40px;
      width: 40px;
    }

    @media (max-width: 400px) {
      height: 35px;
      width: 35px;
    }
  }

  .icon {
    height: 41px;
    width: 41px;

    @media (max-width: 1140px) {
      height: 36px;
      width: 36px;
    }

    @media (max-width: 540px) {
      height: 25px;
      width: 25px;
    }

    @media (max-width: 460px) {
      height: 22px;
      width: 22px;
    }
  }

  .grayed {
    filter: grayscale(100%);
  }
</style>

<div class="absolute top-0 right-0 space-y-1 sm:space-y-5">
  {#each ides as { name, label, icon, screenshots }}
    <button
      class="block relative cursor-pointer"
      on:mouseenter={(e) => {
        handleMouseEnter(e, name);
      }}
      on:mouseleave={(e) => {
        handleMouseLeave(e, name);
      }}
    >
      <div
        class="icon-box flex items-center justify-center bg-off-white rounded-2xl shadow-lg transition duration-200 linear"
      class:grayed={!screenshots}
      >
        <img src="/svg/index/{icon}" alt={label} class="icon" />
      </div>
      <div
        class="hidden absolute -top-2 -left-10 lg:left-3/4 items-center justify-center h-5 w-14 text-xs font-semibold text-gray-900 bg-pink-900 rounded-lg shadow-light"
      >
        Soon
      </div>
    </button>
  {/each}
</div>
