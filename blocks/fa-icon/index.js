import { LitElement, html } from 'lit-element'
import { dom } from '@fortawesome/fontawesome-svg-core'

export class FontAwesomeIcon extends LitElement {
  static get properties() {
   return {
     json: {type: String}
   }
  }

  // TODO: consider what errors to which this might be prone,
  // inserting the Css in the construction of each component.
  constructor() {
    super()
    dom.insertCss(dom.css())
  }

  createRenderRoot() {
    // This will result in no Shadow DOM being used for this custom element.
    return this
  }

  render() {
    const {
      icon
    } = JSON.parse(this.json)
    return html`<svg class="svg-inline--fa" viewBox="0 0 ${icon[0]} ${icon[1]}"><path fill="currentColor" d="${icon[4]}"></path></svg>`
  }
}

window.customElements.define('fa-icon', FontAwesomeIcon)
