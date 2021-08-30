<script>
  import { money, wire } from '../store';
</script>

<div id="hacks">
  <b>Hacks</b>
  <hr />
  <table>
    <tr>
      <th>Variable</th>
      <th>Value</th>
    </tr>
    <tr>
      <td><span>Money</span></td>
      <td><input type="number" bind:value={$money} /></td>
    </tr>
    <tr>
      <td><span>Wire</span></td>
      <td><input type="number" bind:value={$wire} /></td>
    </tr>
  </table>
</div>

<style lang="scss">
  #hacks {
    margin-top: 60px;
  }
</style>
