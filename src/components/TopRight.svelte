<script>
  import ThemePicker from "./ThemePicker.svelte";
  import Octocat from "../svg/Octocat.svelte";
  import LinkedIn from "../svg/LinkedIn.svelte";
</script>

<div class="top-right">
  <ThemePicker />
  <a
    href="https://www.linkedin.com/in/justin-awrey-2b91a7119/"
    target="_blank"
    style="margin-bottom: 10px"
  >
    <LinkedIn />
  </a>
  <a href="https://github.com/justinawrey" target="_blank">
    <Octocat />
  </a>
</div>

<style>
  .top-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
  }

  a {
    margin-left: 25px;
  }

  a :global(svg) {
    fill: var(--light);
    transition: fill 500ms linear;
  }
</style>
