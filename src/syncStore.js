import { writable } from 'svelte/store';

const syncStore = (id, defaultVal, parseFun) => {
  const val = parseFun(localStorage.getItem(id)) || defaultVal;
  const store = writable(val);
  store.subscribe((v) => localStorage.setItem(id, v));
  return store;
};

export { syncStore };
