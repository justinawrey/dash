<script>
  import { onMount } from "svelte";

  import { pageFade, setLoaded } from "../routes/routeUtil";
  export let className = "";

  onMount(setLoaded);
</script>

<main
  class={className}
  style="position: absolute"
  in:pageFade={{ delay: 200 }}
  out:pageFade
>
  <slot />
</main>
