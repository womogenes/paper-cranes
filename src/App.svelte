<script>
  import {
    money,
    clips,
    unsoldClips,
    clipPrice,
    demand,
    wire,
    wirePrice,
  } from './store.js';
  import { round } from './utils';

  $: $clipPrice = round(Math.max($clipPrice, 0.01), 2);
  $: $money = round($money, 2);

  const makeclip = () => {
    if ($wire <= 0) return;
    $clips++;
    $unsoldClips++;
    $wire--;
  };

  const buyWire = () => {
    if ($money < $wirePrice) return;
    $money -= $wirePrice;
    $wire += 1000;
  };

  const moneyFormatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format;
</script>

<div id="root">
  <h1 style="margin-bottom: 20px;">Paperclips: {$clips}</h1>

  <button on:click={makeclip} disabled={$wire <= 0}>Make clip</button><br />
  <br />

  <div id="left-col">
    <b>Business</b>
    <hr />
    <div class="line">Available funds: {moneyFormatter($money)}</div>
    <div class="line"><span>Inventory: {$unsoldClips}</span><br /></div>

    <div class="line">
      <button
        on:click={() => {
          $clipPrice -= 0.01;
        }}
      >
        lower
      </button>
      <button
        on:click={() => {
          $clipPrice += 0.01;
        }}
      >
        raise
      </button>

      <span>Price per clip: {moneyFormatter($clipPrice)}</span><br />
    </div>

    <div class="line"><span>Demand: {$demand.toFixed(0)}%</span></div>

    <br /><b>Manufacturing</b>
    <hr />

    <div class="line">
      <button disabled={$money < $wirePrice} on:click={buyWire}> Wire </button>
      <span>{$wire} inches</span>
    </div>
    <div class="line">
      <span>Cost: {moneyFormatter($wirePrice)}</span>
    </div>
  </div>
</div>

<style lang="scss" global>
  @import '../node_modules/bootstrap/scss/bootstrap.scss';

  body {
    padding: 20px;
  }

  hr {
    margin: 2px 0 10px 0;
  }

  span {
    line-height: 1em;
  }

  button {
    padding: 0 6px 1px 6px;
    margin-right: 8px;
    border-radius: 5px;

    @extend .btn;
    @extend .btn-sm;
    @extend .btn-outline-dark;
  }

  .line {
    display: flex;
    align-items: center;
    margin: 8px 0;
  }

  #left-col {
    width: 300px;
  }
</style>
