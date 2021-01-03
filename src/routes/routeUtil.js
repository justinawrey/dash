import { fade } from 'svelte/transition';

let freshLoad = true;

export function setLoaded() {
  freshLoad = false;
}

export function pageFade(node, params) {
  // Then this was an initial load, so don't delay transition
  if (freshLoad) {
    params.delay = 0;
  }

  params.duration = freshLoad ? 650 : 200;
  return fade(node, params);
}