import App from './App.svelte';

import { get } from 'svelte/store';
import { money, unsoldClips, clipPrice, demand } from './store.js';

const app = new App({
  target: document.body,
});

export default app;

// Event loop
const mainLoop = () => {
  if (Math.random() * 100 * 4 <= get(demand) && get(unsoldClips) > 0) {
    unsoldClips.update((x) => x - 1);
    money.update((x) => x + get(clipPrice));
  }
};

const mainLoopObj = setInterval(mainLoop, 10);
