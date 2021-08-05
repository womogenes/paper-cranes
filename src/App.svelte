<script>
  import { money, cranes, cranePrice, demand, paper } from './store.js';

  cranePrice.subscribe((x) => Math.max(x, 0.01));

  const makeCrane = () => {
    $cranes++;
  };

  const moneyFormatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format;
</script>

<div id="root">
  <h1>Money: {moneyFormatter($money)}</h1>

  <div id="left-col">
    <b>Business</b>
    <hr />
    <div class="line">
      <button on:click={makeCrane}>Make crane</button><br />
    </div>
    <div class="line"><span>Inventory: {$cranes}</span><br /></div>

    <div class="line">
      <button
        on:click={() => {
          $cranePrice -= 0.01;
        }}
      >
        lower
      </button>
      <button
        on:click={() => {
          $cranePrice += 0.01;
        }}
      >
        raise
      </button>

      <span>Price per crane: {moneyFormatter($cranePrice)}</span><br />
    </div>

    <div class="line"><span>Demand: {$demand.toFixed(0)}%</span></div>

    <br /><b>Manufacturing</b>
    <hr />

    <div class="line">
      <button>Useless button</button>
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
    padding: 2px 6px;
    margin-right: 5px;

    @extend .btn;
    @extend .btn-sm;
    @extend .btn-secondary;
  }

  .line {
    display: flex;
    align-items: center;
    margin: 5px 0;
  }

  #left-col {
    width: 300px;
  }
</style>
