<script>
  import { isDarkTheme } from "../theme";

  export let orientation;
  export let duration;
  export let offset;
  export let size;
  export let color;

  let updated = false;
  setTimeout(() => {
    updated = true;
  }, 100);

  $: isHorizontal = orientation === "horizontal";
  $: width = isHorizontal ? "100%" : `${size}px`;
  $: height = isHorizontal ? `${size}px` : "100%";
  $: top = isHorizontal ? `${offset}%` : "0";
  $: left = isHorizontal ? "0" : `${offset}%`;
  $: filter = `grayscale(50%) opacity(${$isDarkTheme ? 20 : 10}%) saturate(${
    $isDarkTheme ? 80 : 150
  }%)`;
  $: transform = isHorizontal
    ? `translateX(${updated ? "" : "-"}100%)`
    : `translateY(${updated ? "" : "-"}100%)`;
</script>

<div
  class="background-block"
  style="width: {width};
         height: {height};
         top: {top};
         left: {left};
         background-color: {color};
         transition-duration: {duration}ms;
         transform: {transform};
         filter: {filter}"
  on:transitionend
/>

<style>
  .background-block {
    z-index: -1;
    position: absolute;
    transition-property: transform, filter;
    transition-timing-function: linear;
  }
</style>
