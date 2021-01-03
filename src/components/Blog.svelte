<script>
  import { push, pageFade } from "../routes/routeUtil";
  import posts from "../posts";
  import BlogPostCompact from "./BlogPostCompact.svelte";
</script>

<div class="posts" in:pageFade={{ delay: 500 }} out:pageFade>
  {#each Object.entries($posts) as [id, post] (id)}
    <BlogPostCompact {...post} on:click={() => push(`/blog/${id}`)} />
  {/each}
</div>

<style>
  .posts {
    display: flex;
  }
</style>
