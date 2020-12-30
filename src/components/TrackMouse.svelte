<script>
  import { quintOut } from "svelte/easing";

  let id = 0;
  let effects = [];

  function ripple(node, params) {
    const existingTransform = getComputedStyle(node).transform.replace(
      "none",
      ""
    );

    return {
      delay: params.delay || 0,
      duration: params.duration || 800,
      easing: params.easing || quintOut,
      css: (t, u) =>
        `transform: ${existingTransform} scale(${t * 15}); opacity: ${u};`,
    };
  }

  function createEffectAt({ clientX: x, clientY: y }) {
    effects = [...effects, { x, y, id: ++id }];
  }

  function removeEffect(id) {
    effects = effects.filter((effect) => effect.id !== id);
  }
</script>

{#each effects as { id, x, y } (id)}
  <div
    class="track-mouse"
    style="transform: translate({x}px, {y}px)"
    in:ripple
    on:introend={() => removeEffect(id)}
  />
{/each}

<svelte:window on:click={createEffectAt} />

<style>
  .track-mouse {
    position: absolute;
    top: 0;
    left: 0;
    height: 2px;
    width: 2px;
    background-color: var(--light);
    border-radius: 50%;
    pointer-events: none;
  }
</style>
