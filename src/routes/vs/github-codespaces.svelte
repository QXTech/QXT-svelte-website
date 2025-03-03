<script context="module">
  export const prerender = true;
</script>

<script>
  import CalloutSecondary from "$lib/components/callout-secondary.svelte";
  import Card from "$lib/components/card/card.svelte";
  import FeatureBox from "$lib/components/feature-box.svelte";
  import Header from "$lib/components/header.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Section from "$lib/components/section.svelte";
  import FeatureTable from "$lib/components/ui-library/feature-table/feature-table.svelte";
  import { codespacesComparison } from "$lib/contents/codespaces";
  import { openSourceFeature } from "$lib/contents/jetbrains-space";
</script>

<style lang="postcss">
  .page-bottom {
    @apply mb-xx-large;

    @media (max-width: 972px) {
      @apply mb-x-large;
    }
  }
</style>

<OpenGraph
  data={{
    description:
      "Why choose Gitpod over GitHub Codespaces? Gitpod is the faster, more resource-efficient, open-source alternative that integrates with your individual stack.",
    title: "Gitpod vs GitHub Codespaces - what makes Gitpod different?",
    keywords: "Codespaces, alternative, differences",
  }}
/>

<Header
  title="Gitpod vs GitHub Codespaces"
  text="Gitpod is the faster, more resource-efficient, open-source platform that
  integrates with your individual stack."
  tight={true}
/>

<FeatureBox
  feature={{
    title: "Ready in a flash",
    paragraph:
      "Gitpod removes long init and build times by continuously pre-building workspaces for your project. Thereby it allows you to start coding or debugging immediately, from any context, at any time.",
    moreButton: {
      href: "/docs/prebuilds",
      text: "More about Prebuilds.",
    },
    image: {
      src: "/images/github-codespaces/spaces-1.svg",
      alt: "Gitpod vs GitHub Codespaces speed comparison",
    },
    footnote:
      "Compared start-up time until ready-to-code for<br /> <a href='https://github.com/gitpod-io/vscode' target='_blank'>https://github.com/gitpod-io/vscode</a>. Last verified 25 Sep 2020.",
  }}
/>

<FeatureBox
  feature={{
    title: "Resource Efficient",
    paragraph:
      "Instead of running on expensive VMs, Gitpod provisions secure containers and achieves best-in-class resource-efficiency with scalable workspaces running on shared high-powered cloud servers. <a href='https://www.researchgate.net/publication/333096446_Reduced_carbon_emission_and_optimized_power_consumption_technique_using_container_over_virtual_machine' target='_blank'>Helping our planet</a> 🌱.",
    image: {
      src: "/images/github-codespaces/spaces-2.svg",
      alt: "Gitpod vs GitHub Codespaces price comparison",
    },
    footnote:
      "Price comparison for a developer working 5h per day, 21 per month with 8 core CPUs and 12GB RAM. Last verified 3 Sep 2021. Sources: <a href='/pricing'>Gitpod</a>, <a href='https://github.com/features/codespaces' target='_blank'>GitHub Codespaces</a>.",
  }}
/>

<Section>
  <FeatureTable tableData={codespacesComparison} />
</Section>

<CalloutSecondary
  title="Ready to feel the difference?"
  text="Spin up an example workspace now, just link your git provider"
/>

<FeatureBox feature={openSourceFeature} />

<div class="flex justify-center flex-wrap page-bottom">
  <Card
    card={{
      title: "Automation-first",
      text: "Simply add your build command into a .gitpod.yml file and let Gitpod do the heavy-lifting. Once you’ve experienced the freedom of ephemeral workspaces, you’ll never want to go back to long-lived manually-maintained environments.",
      link: {
        href: "/#get-started",
        text: "Try Now",
      },
    }}
    variant="primary"
    btnClassNames="mt-x-small"
    class="mx-micro mb-micro"
    headingLevel="h2"
  />

  <Card
    card={{
      title: "Code in a carbon-neutral workspace",
      text: "Not only is Gitpod more resource-efficient but it also runs on 100% carbon-neutral cloud servers (GCP). All the power, with a lower cost to our planet.",
      link: {
        href: "https://cloud.google.com/sustainability",
        text: "More on GCP carbon neutral",
      },
    }}
    variant="cta"
    btnClassNames=" mt-x-small"
    class="mx-micro mb-micro"
    headingLevel="h2"
  />
</div>
