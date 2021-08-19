import { syncStore } from './syncStore.js';
import { derived, get } from 'svelte/store';

// Vars that do need saving
const money = syncStore('money', 0, parseFloat);
const clips = syncStore('clips', 0, parseInt);
const unsoldClips = syncStore('unsoldClips', 0, parseInt);
const clipPrice = syncStore('clipPrice', 0.5, parseFloat);
const demand = derived(clipPrice, (price) => 4 / price);
const wire = syncStore('wire', 1000, parseInt);
const wirePrice = syncStore('wirePrice', 15, parseInt);

export { money, clips, unsoldClips, clipPrice, demand, wire, wirePrice };
