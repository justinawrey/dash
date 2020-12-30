<script>
  import { onDestroy, onMount } from "svelte";
  import BackgroundBlock from "./BackgroundBlock.svelte";

  const orientations = ["horizontal", "vertical"];
  const colors = ["#86862d", "#325d67", "#603666", "#854747", "grey"];

  let id = 0;
  let interval;
  let blocks = [];

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function createBlock() {
    const orientation = orientations[randomIntFromInterval(0, 1)];
    const duration = randomIntFromInterval(10000, 20000);
    const offset = randomIntFromInterval(0, 100);
    const size = randomIntFromInterval(75, 250);
    const color = colors[randomIntFromInterval(0, 4)];

    return {
      orientation,
      duration,
      offset,
      size,
      color,
      id: ++id,
    };
  }

  function removeBlock(id) {
    blocks = blocks.filter((block) => block.id !== id);
  }

  function staggerInBlocksAt() {
    [...arguments].forEach((delay) => {
      setTimeout(() => {
        blocks = [...blocks, createBlock()];
      }, delay);
    });
  }

  function startBlocks() {
    staggerInBlocksAt(1000, 2000, 3000, 10000);
    interval = setInterval(() => {
      staggerInBlocksAt(1000, 2000, 3000, 10000);
    }, 15000);
  }

  onMount(() => {
    startBlocks();
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

{#each blocks as { id, ...block } (id)}
  <BackgroundBlock {...block} on:transitionend={() => removeBlock(id)} />
{/each}
