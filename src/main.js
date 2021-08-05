import App from './App.svelte';

import { get } from 'svelte/store';
import { money, cranes, cranePrice, demand } from './store.js';

const app = new App({
  target: document.body,
});

export default app;

// Event loop
const mainLoop = () => {
  if (Math.random() * 100 <= get(demand) && get(cranes) > 0) {
    cranes.update((x) => x - 1);
    money.update((x) => x + get(cranePrice));
  }
};

const mainLoopObj = setInterval(mainLoop, 100);
