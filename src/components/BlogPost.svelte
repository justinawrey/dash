<script>
  import { fade } from "svelte/transition";

  export let title;
  export let subtitle;
  export let time;
  export let date;
</script>

<div class="post" on:click out:fade|local>
  <p class="title">{title}</p>
  <p class="subtitle">{subtitle}</p>
  <div class="footer">
    <p>{time}</p>
    <p>{date}</p>
  </div>
</div>

<style>
  p {
    margin: 0;
  }

  .post {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    color: var(--light);
    border: 1px solid var(--light);
    padding: var(--padding-box--lg);
    box-shadow: var(--box-shadow--sm);
    height: 30vh;
  }

  .title {
    margin: 0 0 var(--spacing8);
    font-size: var(--fs--sm);
    font-weight: bold;
  }

  .subtitle {
    font-size: var(--fs--xs);
  }

  .footer {
    display: flex;
    margin-top: auto;
    justify-content: space-between;
  }
</style>
