<script lang="ts" context="module">
  export const prerender = true;
  export async function load({ session }) {
    const securityLogs = session.securityLogs;
    return { props: { securityLogs } };
  }
</script>

<script lang="ts">
  import type { SecurityLog } from "$lib/types/security.type";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Header from "$lib/components/header.svelte";
  import { formatDate } from "$lib/utils/helpers";
  import Wrapper from "$lib/components/changelog/wrapper.svelte";
  import { onMount } from "svelte";

  export let securityLogs: SecurityLog[];
  onMount(() => {
    const tocs = document.getElementsByClassName("toc");
    while (tocs.length > 0) tocs[0].remove();
  });
</script>

<style lang="postcss">
  div :global(.header) {
    @apply mb-large;
  }
</style>

<OpenGraph
  data={{
    description: "A sum-up of Gitpod’s latest security incidents and updates",
    title: "Gitpod Security Log - Latest Security findings & updates",
    type: "website",
    keywords:
      "updates, security, incident, findings, fixes, version, updates, improvements",
  }}
/>

<div class="flex">
  <div class="hidden w-4/12 flex-shrink-0 md:block" />
  <Header
    title="Security Log"
    centered={false}
    text="A sum-up of Gitpod’s latest security findings and updates."
    class="w-full header"
    textAlign="left"
  />
</div>
<div class="flex flex-col space-y-x-large mb-large divide-y divide-gray-300">
  {#each securityLogs as log}
    <div class="flex md:flex-row flex-col first:pt-0 pt-x-large">
      <div class="w-full flex-shrink-0 md:w-4/12">
        <div class="text-black text-h4 font-semibold">
          {formatDate(log.date)}
        </div>
      </div>
      <div>
        <h2 class="text-h4 font-bold">{@html log.title}</h2>
        <Wrapper class="w-full md:w-8/12">
          {@html log.content}
        </Wrapper>
      </div>
    </div>
  {/each}
</div>
