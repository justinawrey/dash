<script>
  import { onDestroy, onMount } from "svelte";
  import BackgroundBlock from "./BackgroundBlock.svelte";

  const orientations = ["horizontal", "vertical"];
  const colors = ["#86862d", "#325d67", "#603666", "#854747", "grey"];
  3;

  let id = 0;
  let interval;
  let blocks = [];

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function createBlock() {
    const orientation = orientations[randomIntFromInterval(0, 1)];
    const duration = randomIntFromInterval(8000, 10000);
    const offset = randomIntFromInterval(0, 100);
    const size = randomIntFromInterval(100, 200);
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

  function staggerInFourBlocks() {
    [1000, 2000, 3000, 4000].forEach((delay) => {
      setTimeout(() => {
        blocks = [...blocks, createBlock()];
      }, delay);
    });
  }

  onMount(() => {
    staggerInFourBlocks();
    interval = setInterval(() => {
      staggerInFourBlocks();
    }, 8000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  $: console.log(blocks);
</script>

{#each blocks as { id, ...block } (id)}
  <BackgroundBlock {...block} on:transitionend={() => removeBlock(id)} />
{/each}
