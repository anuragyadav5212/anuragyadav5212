class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <article class="lista">
      <h1>Lista de Anurag Yadav</h1>
      <ul>
        <li>Opción 1</li>
        <li>Opción 2</li>
        <li>Opción 3</li>
        <li>Opción 4</li>
        <li>Opción 5</li>
      </ul>
      </article>
     `;
  }
}

customElements.define("my-lista", HeaderComponent);
