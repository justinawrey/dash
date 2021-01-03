<script>
  import Page from "./Page.svelte";
  import posts from "../posts";

  export let params = {};
  const { id } = params;
  const { title, subtitle, time, dateCreated } = $posts[id];
</script>

<Page className="page-post">
  <h1>{title}</h1>
  <h2>{subtitle}</h2>
  <span>{time}</span>
  <span>{dateCreated}</span>
</Page>

<style>
  :global(.page-post) {
    height: 100%;
    width: 100%;
    color: var(--light);
  }
</style>
