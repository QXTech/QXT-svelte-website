<script>
  import { projects } from "../../../contents/home";
  import Project from "./project.svelte";
</script>

<h3>Launch an example workspace</h3>
<p>Dive into one of our example workspaces</p>
<div class="my-x-small">
  {#each projects as project}
    <Project {project} />
  {/each}
</div>

<div class="text-base">
  <a href="/docs/quickstart">More example workspaces</a>
</div>
