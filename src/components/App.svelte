<script>
  import Background from "./Background.svelte";
  import Button from "./Button.svelte";
  import TrackMouse from "./TrackMouse.svelte";
</script>

<div class="vertical-centered">
  <h1 class="header">Justin Awrey</h1>
  <h2 class="subheader">One stop web designer + developer.</h2>
  <Button size="sm">Take the tour 🕵️</Button>
</div>

<Background />
<TrackMouse />

<style>
  .vertical-centered {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .vertical-centered :global(button) {
    background-color: transparent;
  }

  .header,
  .subheader {
    margin: 0;
    color: var(--light);
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
