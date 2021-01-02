<script>
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import BlogPost from "./BlogPost.svelte";

  let posts = [1, 2, 3, 4, 5, 6];
</script>

<article class="grid" in:fade>
  {#each posts as post (post)}
    <BlogPost
      title="FLIP animations with Svelte 3"
      subtitle="Make full use of CSS transforms in order to never drop frames again."
      time="5 min read"
      date="November 3rd, 2020"
      on:click={() => {
        posts = [3];
      }}
    />
  {/each}
</article>

<style>
  .grid {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    grid-gap: 1rem;
    align-content: center;
    margin: 0 var(--spacing32) 0 var(--spacing32);
  }
</style>
