import { syncStore } from './syncStore.js';
import { derived, get } from 'svelte/store';

// Vars that do need saving
const money = syncStore('money', 0, parseFloat);
const cranes = syncStore('cranes', 0, parseInt);
const cranePrice = syncStore('money', 0, parseFloat);
const demand = derived(cranePrice, (price) => 4 / price);
const paper = syncStore('paper', 1, parseFloat);

export { money, cranes, cranePrice, demand, paper };
