class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <article class="tabla-container">
      <h1 class="title">Tabla de Anurag Yadav</h1>
      <table class="tabla">
        <caption class="caption">
          Examen2 Tabla
        </caption>
        <tr>
          <th class="th">Cabecera 1</th>
          <th class="th">Cabecera 2</th>
          <th class="th">cabecera 3</th>
        </tr>
        <tr>
          <td class="celda1-1" colspan="2">Celada 1.1</td>
          <td class="celda1-1" rowspan="3">Celda3.3</td>
        </tr>
        <tr>
          <td class="celda2-2">Celda2.1</td>
          <td class="celda2-2">Celda2.2</td>
        </tr>
        <tr>
          <td class="celda1-1">Celada 3.1</td>
          <td class="celda1-1">Celada 3.2</td>
        </tr>
        <tr>
          <td class="last-celda" colspan="3">Total Filas: 3</td>
        </tr>
      </table>
      </article>
     `;
  }
}

customElements.define("my-tabla", HeaderComponent);
