<script>
  import { money, wire, wirePrice } from '../store.js';

  import { moneyFormatter, numberFormatter } from '../utils.js';

  const buyWire = () => {
    if ($money < $wirePrice) return;
    $money -= $wirePrice;
    $wire += 1000;
  };
</script>

<section id="manufacturing">
  <br /><b>Manufacturing</b>
  <hr />

  <div class="line">
    <button class="me-2" disabled={$money < $wirePrice} on:click={buyWire}>
      Wire
    </button>
    <span>{numberFormatter($wire)} inches</span>
  </div>
  <div class="line">
    <span>Cost: {moneyFormatter($wirePrice)}</span>
  </div>
</section>
