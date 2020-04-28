import { LitElement, html, unsafeCSS } from 'lit-element'
import { dom } from '@fortawesome/fontawesome-svg-core'

export class FontAwesomeIcon extends LitElement {
  static get properties() {
   return {
     json: {type: String}
   }
  }

  static get styles() {
    return [
      unsafeCSS(dom.css())
    ]
  }

  render() {
    const {
      icon
    } = JSON.parse(this.json)
    return html`<svg class="svg-inline--fa" viewBox="0 0 ${icon[0]} ${icon[1]}"><path d="${icon[4]}"></path></svg>`
  }
}

window.customElements.define('fa-icon', FontAwesomeIcon)
