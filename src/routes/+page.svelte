<script>
  import "@picocss/pico";
  import "../styles/app.css";
  import { slide, scale } from "svelte/transition";

  let pagar = 0;
  let porce = "10%";
  let moneda = "Bs";

  $: propina = pagar * (porce.slice(0, -1) / 100);
  $: total = pagar + propina;

  let historial = [];

  function calcular() {
    historial.push({ pagar, porce, propina, total, moneda });
    historial = historial;
    console.log(historial);
  }

  function convert() {
    console.log(pagar);
    if (moneda == "Bs") {
      pagar = pagar / 6.96;
      moneda = "Usd";
    } else {
      pagar = pagar * 6.96;
      moneda = "Bs";
    }
  }
</script>

<nav>
  <div class="container">
    <ul>
      <li><strong>Calculadora de Propina</strong></li>
    </ul>
  </div>
</nav>
<hr />
<main class="container">
  <h3>Calculadora</h3>
  <div class="grid">
    <div class="grid">
      <label for="inpTot">Total de factura: </label>
      <input id="inpTot" type="number" bind:value={pagar} />
      <select on:input={convert}>
        <option>Bs</option>
        <option>Usd</option>
      </select>
      <select bind:value={porce}>
        <option>10%</option>
        <option>15%</option>
        <option>20%</option>
      </select>
    </div>
  </div>
  <button on:click={calcular} disabled={!pagar || pagar < 0}>Calcular</button>
  <h3>Resultados</h3>
  <div class="grid">
    <div class="grid">
      <strong>Propina:</strong>
      <p>{propina}</p>
      <strong>{moneda}</strong>
    </div>
    <div />
  </div>
  <div class="grid">
    <div class="grid">
      <strong>Total:</strong>
      <p>{total}</p>
      <strong>{moneda}</strong>
    </div>
    <div />
  </div>

  <h3>Historial</h3>
  <ol>
    {#each historial as val}
      <li transition:scale>
        {val.pagar} {val.moneda} + {val.porce} = {val.total}
        {val.moneda}
      </li>
    {/each}
  </ol>
</main>
