<script>
  import { nextSizes } from "../theme";

  export let size = "md";
  const nextSize = nextSizes[size];
</script>

<button
  on:click
  style="font-size: var(--fs--{size});
         padding: var(--padding-box--{size});
         box-shadow: var(--box-shadow--{size});
         --box-shadow--next: var(--box-shadow--{nextSize});
         "
>
  <slot />
</button>

<style>
  button {
    position: relative;
    color: var(--light);
    background-color: var(--dark);
    border: 1px solid var(--light);
    cursor: pointer;
    transition-property: background-color, box-shadow, border-color, color;
    transition-duration: 500ms;
    overflow: hidden;
  }

  button::before {
    content: "";
    height: 100%;
    width: 100%;
    bottom: 0%;
    left: -100%;
    transform: rotate(-45deg);
    position: absolute;
    background: linear-gradient(
      transparent 0%,
      transparent 20%,
      hsl(var(--dark-h), 10%, 50%) 50%,
      transparent 80%,
      transparent 100%
    );
    pointer-events: none;
  }

  button:hover {
    box-shadow: var(--box-shadow--next) !important;
    background-color: var(--dark--lighter);
  }

  button:hover::before {
    transition: transform 400ms ease-out;
    transform: translateX(200%) rotate(-45deg);
  }

  button:focus {
    outline: none;
  }

  button:focus-visible {
    border-color: var(--focus);
  }
</style>
