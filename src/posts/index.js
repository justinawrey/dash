import { readable } from "svelte/store"

const posts = {
  1: {
    title: 'FLIP animations with Svelte 1',
    subtitle: 'Make use of CSS transforms to never drop frames again.',
    time: 5,
    dateCreated: 'November 2nd, 2020',
  },
  2: {
    title: 'FLIP animations with Svelte 2',
    subtitle: 'Make use of CSS transforms to never drop frames again.',
    time: 10,
    dateCreated: 'December 5th, 2020',
  },
  3: {
    title: 'FLIP animations with Svelte 3',
    subtitle: 'Make use of CSS transforms to never drop frames again.',
    time: 3,
    dateCreated: 'January 1, 2021',
  },
}

export default readable(posts)
