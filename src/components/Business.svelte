<script>
  import { money, unsoldClips, clipPrice, demand } from '../store.js';

  import { moneyFormatter } from '../utils.js';
</script>

<section id="business">
  <b>Business</b>
  <hr />
  <div class="line">Available funds: {moneyFormatter($money)}</div>
  <div class="line"><span>Inventory: {$unsoldClips}</span><br /></div>

  <div class="line">
    <div class="button-group me-2">
      <button
        on:click={() => {
          $clipPrice -= 0.01;
        }}
      >
        -
      </button>
      <button
        on:click={() => {
          $clipPrice += 0.01;
        }}
      >
        +
      </button>
    </div>

    <span>Price per clip: {moneyFormatter($clipPrice)}</span><br />
  </div>

  <div class="line"><span>Demand: {$demand.toFixed(0)}%</span></div>
</section>
