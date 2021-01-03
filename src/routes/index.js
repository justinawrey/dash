import Home from '../components/Home.svelte';
import Blog from '../components/Blog.svelte';
import BlogPost from '../components/BlogPost.svelte';

export default {
  '/': Home,
  '/blog': Blog,
  '/blog/:id': BlogPost,
  '*': Home,
};