class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
    <p class="footer-text">Examen realizado por Anurag Yadav</p>
  </footer>
   `;
  }
}

customElements.define("my-footer", HeaderComponent);
