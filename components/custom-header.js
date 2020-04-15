
class customHeader extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }
    getTemplate() {
        return `
            <ul class="custom-header__ul">
                <li class="custom-header__li">
                    <a href="#home">Home</a>
                </li>
                <li class="custom-header__li">
                    <a href="#one">Page one</a>
                </li>
                <li class="custom-header__li">
                    <a href="#two">Page two</a>
                </li>
            </ul>

            ${this.getStyles()}
        `;
    }
    getStyles() {
        return `
            <style>
                :host {
                    display: block;
                    top: 0;
                    background: #46cff3;
                    position: sticky;
                    height: 75px;
                    box-shadow: 1px 0px 5px 0px black;
                }
                .custom-header__ul {
                    display: flex;
                    margin: 0;
                    justify-content: flex-end;
                    height: 100%;
                }
                .custom-header__li {
                    align-self: center;
                    list-style: none;
                    margin-right: 25px;
                }
                .custom-header__li a {
                    text-decoration: none;
                    color: white;
                    font-size: 25px;
                }
            </style>
        `;
    }

    connectedCallback() {
        this.shadowRoot.querySelectorAll('.custom-header__li a').forEach((aTag, index) => {
            aTag.addEventListener('click', (e) => {
                this.handleClick(index);
            })
        })
    }
    handleClick(index) {
        this.dispatchEvent( new CustomEvent('custom-header-clicked', {
            detail: {data: index + 1},
            bubbles: true,
        }) )
    }

}

customElements.define('custom-header', customHeader);