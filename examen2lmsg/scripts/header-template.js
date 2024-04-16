class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="header">
      <div class="logo-container">
        <img class="logo" src="imagenes/logolmsg.png" alt="logo" />
      </div>
      <nav class="menu">
        <li class="link-list">
          <a class="link" href="inicio.html">Inicio</a>
        </li>
        <li class="link-list">
          <a class="link" href="listas.html">Listas</a>
        </li>
        <li class="link-list">
          <a class="link" href="tablas.html">Tablas</a>
        </li>
        <li class="link-list">
        <a class="link" href="equipos.xml">XML</a>
      </li>
      </nav>
  </header> `;
  }
}

customElements.define("my-header", HeaderComponent);
