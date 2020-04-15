class pageHome extends HTMLElement {
    constructor() {
        super(); 

        this.attachShadow({ mode: 'open' });

        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = this.getTemplate()
    }
    getTemplate() {
        return `
            <h1>Hello from Home pages</h1>
        `;
    }
}

customElements.define('page-home', pageHome);