<script lang="ts">
  import Section from "../section.svelte";
  import ScreenshotToggle from "./screenshot-toggle.svelte";
  let selectedIde = "vscode";
  let ideType = "browser";
  const ides = [
    {
      name: "vscode",
      label: "Visual Studio Code",
      screenshots: {
        desktop: "vscode-desktop.png",
        browser: "vscode-browser.png",
      },
      icon: "vscode.svg",
    },
    {
      name: "pycharm",
      label: "PyCharm",
      icon: "pycharm.svg",
    },
    {
      name: "vscode",
      label: "Visual Studio Code",
      screenshots: {
        desktop: "vscode-desktop.png",
        browser: "vscode-browser.png",
      },
      icon: "vscode.svg",
    },
    {
      name: "pycharm",
      label: "PyCharm",
      icon: "pycharm.svg",
    },
    {
      name: "vscode",
      label: "Visual Studio Code",
      screenshots: {
        desktop: "vscode-desktop.png",
        browser: "vscode-browser.png",
      },
      icon: "vscode.svg",
    },
    {
      name: "pycharm",
      label: "PyCharm",
      icon: "pycharm.svg",
    },
  ];

  $: idetoRender = ides.find((ide) => ide.name === selectedIde);
</script>

<style>
  p {
    max-width: 638px;
  }
</style>

<Section>
  <div class="row">
    <h2 class="text-center">Your environment, your tools, your craft</h2>
    <div class="relative">
      <ScreenshotToggle 
        on:change={() => ideType = "desktop"}
      />
      <div>
        <img
          src="/images/index/{idetoRender.screenshots[ideType]}"
          alt={idetoRender.label}
        />
      </div>
      <div class="absolute top-0 right-0 space-y-5">
        {#each ides as { icon, label }}
          <div
            class="flex items-center justify-center h-20 w-20 bg-off-white rounded-2xl shadow-lg"
          >
            <img src="/svg/index/{icon}" alt={label} class="h-12 w-12" />
          </div>
        {/each}
      </div>
    </div>
    <div class="text-center m-auto">
      <h3 class="mt-medium md:mt-x-large">We adapt, so you don't need to</h3>
      <p class="text-large mt-xx-small mb-x-small mx-auto">
        Run a desktop or browser based version of VS Code or any JetBrains IDE
        and customise it to your individual needs - from themes to extensions,
        you have full control.
      </p>
      <a href="/#get-started" class="btn-primary">Try Now</a>
    </div>
  </div>
</Section>
