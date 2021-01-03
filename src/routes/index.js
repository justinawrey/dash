import { fade } from 'svelte/transition';
import { push as routerPush } from 'svelte-spa-router';
import Home from '../components/Home.svelte';
import Blog from '../components/Blog.svelte';
import BlogPost from '../components/BlogPost.svelte';

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

export default {
  '/': Home,
  '/blog': Blog,
  '/blog/:id': BlogPost,
  '*': Home,
};