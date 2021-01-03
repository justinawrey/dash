<script>
  import { push } from "svelte-spa-router";
  import Page from "./Page.svelte";
  import Button from "./Button.svelte";
</script>

<Page className="page-home">
  <h1 class="header">Justin Awrey</h1>
  <h2 class="subheader">One stop web designer + developer.</h2>
  <Button size="sm" on:click={() => push('/blog')}>Take the tour 🕵️</Button>
</Page>

<style>
  :global(.page-home) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header,
  .subheader {
    margin: 0;
    color: var(--light);
    transition: color 500ms;
  }

  .header {
    font-size: var(--fs--xl);
  }

  .subheader {
    font-size: var(--fs--md);
    margin-top: var(--spacing2);
    margin-bottom: var(--spacing24);
  }
</style>
