<script>
  import './components/Business.svelte';
  import Business from './components/Business.svelte';
  import Manufacturing from './components/Manufacturing.svelte';
  import Hacks from './components/Hacks.svelte';

  import { money, clips, unsoldClips, clipPrice, wire } from './store.js';

  import { round, moneyFormatter } from './utils';

  $: $clipPrice = round(Math.max($clipPrice, 0.01), 2);
  $: $money = round($money, 2);

  const makeClip = () => {
    if ($wire <= 0) return;
    $clips++;
    $unsoldClips++;
    $wire--;
  };
</script>

<div id="root">
  <h1 style="margin-bottom: 20px;">Paperclips: {$clips}</h1>

  <button on:click={makeClip} disabled={$wire <= 0}>Make clip</button><br />
  <br />

  <div id="left-col">
    <Business />
    <Manufacturing />
    <Hacks />
  </div>
</div>

<style lang="scss" global>
  @import './sass/globals.scss';
  @import './sass/App.scss';
</style>
