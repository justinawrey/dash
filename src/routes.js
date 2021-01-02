import Home from './components/Home.svelte';
import Blog from './components/Blog.svelte';

export default {
  '/': Home,
  '/blog': Blog,
  '*': Home,
};