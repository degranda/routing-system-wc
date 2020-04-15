class pageTwo extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.render()
    }
    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }
    getTemplate() {
        return `
            <h1>Hello from page two!!</h2>
        `;
    }
}

customElements.define('page-two', pageTwo);