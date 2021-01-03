import { fade } from 'svelte/transition';
import { push as routerPush } from 'svelte-spa-router'

let freshLoad = true;

export function push(path) {
  freshLoad = false;
  routerPush(path)
}

export function pageFade(node, params) {
  // Then this was an initial load, so don't delay transition
  if (freshLoad) {
    params.delay = 0;
  }

  params.duration = 500;
  return fade(node, params);
}