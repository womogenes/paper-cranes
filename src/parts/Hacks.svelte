<script>
  import { money, wire } from '../store';
</script>

<div id="hacks">
  <b>Hacks</b>
  <hr />
  <div class="line">
    <span>Money: </span><input type="number" bind:value={$money} />
  </div>
  <div class="line">
    <span>Wire: </span><input type="number" bind:value={$wire} />
  </div>
</div>

<style lang="scss">
  #hacks {
    margin-top: 60px;
  }

  #hacks > .line > span {
    margin-right: 0.7rem;
  }
</style>
