<script>
  import { push } from "../routes/routeUtil";
  import posts from "../posts";
  import Page from "./Page.svelte";
  import BlogPostCompact from "./BlogPostCompact.svelte";
</script>

<Page className="page-blog">
  {#each Object.entries($posts) as [id, post] (id)}
    <BlogPostCompact {...post} on:click={() => push(`/blog/${id}`)} />
  {/each}
</Page>

<style>
  :global(.page-blog) {
    display: flex;
    position: absolute;
  }
</style>
