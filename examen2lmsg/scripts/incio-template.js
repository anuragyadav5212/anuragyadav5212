class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <article class="contenido-principal">
      <h1>Inicio</h1>
      <p>Esta es la primera pagina del sitio web</p>
      <p>Suerte!!!</p>
      </article>
      
     `;
  }
}

customElements.define("my-inicio", HeaderComponent);
