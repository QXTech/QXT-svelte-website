<script lang="ts">
  import type { Ide } from "../../types/ide.type";
  import { createEventDispatcher } from "svelte";
  export let ides: Ide[];

  const dispatch = createEventDispatcher();

  const hasNoScreenshots = (name: string) =>
    ides.find((ide) => ide.name === name).screenshots === undefined;

  const handleMouseEnter = (e: MouseEvent, name: string) => {
    // @ts-ignore
    const [iconDiv, soonSpan]: HTMLElement[] = Array.from(
      (e.target as HTMLElement).children
    );
    // the following if block is temporary and it should be removed when screenshots for the other ides are added.
    if (!hasNoScreenshots(name)) {
      return;
    }
    if (hasNoScreenshots(name)) {
      iconDiv.classList.remove("grayed");
      soonSpan.style.display = "flex";
    } else {
      iconDiv.classList.add("grayed");
    }

    if (!hasNoScreenshots(name)) {
      dispatch("message", {
        text: name,
      });
    }
  };

  const handleMouseLeave = (e: MouseEvent, name: string) => {
    // @ts-ignore
    const [iconDiv, soonSpan]: HTMLElement[] = Array.from(
      (e.target as HTMLElement).children
    );
    if (hasNoScreenshots(name)) {
      iconDiv.classList.add("grayed");
      soonSpan.style.display = "none";
    } else {
      iconDiv.classList.remove("grayed");
    }
  };
</script>

<style type="text/postcss">
  button {
    @apply outline-none;
  }

  .icon-box {
    height: 71px;
    width: 71px;

    @media (max-width: 1140px) {
      height: 55px;
      width: 55px;
    }

    @media (max-width: 768px) {
      height: 44px;
      width: 44px;
    }

    @media (max-width: 536px) {
      height: 38px;
      width: 38px;
    }

    @media (max-width: 435px) {
      height: 32px;
      width: 32px;
    }
  }

  .icon {
    height: 41px;
    width: 41px;

    @media (max-width: 1140px) {
      height: 36px;
      width: 36px;
    }

    @media (max-width: 768px) {
      height: 23px;
      width: 23px;
    }

    @media (max-width: 536px) {
      height: 20px;
      width: 20px;
    }
  }

  .grayed {
    filter: grayscale(100%);
    @apply hover:bg-white;
  }
</style>

<div class="absolute top-0 right-0 lgx:-right-2 space-y-0 sm:space-y-2">
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
        class="icon-box flex items-center justify-center bg-off-white rounded-lg sm:rounded-2xl shadow-lg transition duration-200 linear"
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
