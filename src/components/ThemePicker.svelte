<script>
  import { isDarkTheme, changeThemeVariables } from "../theme";
  import Moon from "../svg/Moon.svelte";
  import Sun from "../svg/Sun.svelte";

  function toggleTheme() {
    $isDarkTheme = !$isDarkTheme;
    changeThemeVariables();
  }

  $: theme = $isDarkTheme ? "dark" : "light";
</script>

<div class="picker">
  {#if $isDarkTheme}
    <Moon />
  {:else}
    <Sun />
  {/if}
  <div on:click={toggleTheme} class="slider {theme}" />
</div>

<style>
  .picker {
    position: relative;
  }

  .picker :global(#moon),
  :global(#sun) {
    position: absolute;
    top: 29px;
    left: 29px;
    height: 22px;
    width: 22px;
    z-index: 1;
    fill: var(--light);
  }

  .picker :global(#sun) {
    transform: translateX(22px);
    top: 27px;
    left: 25px;
    height: 27px;
    width: 27px;
  }

  .slider {
    position: relative;
    height: 40px;
    width: 60px;
    background-color: transparent;
    margin: var(--spacing12);
    border-radius: 2rem;
    border: 1px solid var(--light);
    cursor: pointer;
    transition: border 500ms;
    box-shadow: var(--box-shadow--sm);
  }

  .slider::before {
    content: "";
    position: absolute;
    background-color: transparent;
    top: -1px;
    left: -1px;
    height: 40px;
    width: 40px;
    border-radius: 2rem;
    border: 1px solid var(--light);
    transition-duration: 500ms;
    transition-property: border-color, background-color, transform;
  }

  .slider.light::before {
    transform: translateX(20px);
  }
</style>
