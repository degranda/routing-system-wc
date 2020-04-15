import './custom-header.js';
import './page-home.js';
import './page-one.js';
import './page-two.js';

class myApp extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shownSection = 1;
        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }
    getTemplate() {
        return `
            <custom-header></custom-header>
            <div class="app-section">
                ${this.getSection(this.shownSection)}
            </div>
            ${this.getStyles()}
        `;
    }
    getSection(section) {
        switch(section) {
            case 1: 
                return `
                    <page-home></page-home>
                `;
            case 2: 
                return `
                    <page-one></page-one>
                `;
            case 3:
                return `
                    <page-two></page-two>
                `;
        }
    }
    getStyles() {
        return `
            <style>
                :host {
                    display: block;
                }
            </style>
        `;
    }

    connectedCallback() {
        this.shadowRoot.querySelector('custom-header').addEventListener('custom-header-clicked', (e) => {
            let newShownSection = e.detail.data;
            if(newShownSection !== this.shownSection) {
                this.shownSection = newShownSection;
                this.reRenderAppSection();
            }
        });
    }
    reRenderAppSection() {
        this.shadowRoot.querySelector('.app-section').innerHTML = this.getSection(this.shownSection);
    }
}

customElements.define('my-app', myApp);