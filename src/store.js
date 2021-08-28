import { syncStore } from './syncStore.js';
import { derived, get } from 'svelte/store';

// Vars that do need saving
export const money = syncStore('money', 0, parseFloat);
export const clips = syncStore('clips', 0, parseInt);
export const unsoldClips = syncStore('unsoldClips', 0, parseInt);
export const clipPrice = syncStore('clipPrice', 0.5, parseFloat);
export const demand = derived(clipPrice, (price) => 4 / price);
export const wire = syncStore('wire', 1000, parseInt);
export const wirePrice = syncStore('wirePrice', 15, parseInt);
