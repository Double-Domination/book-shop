import { HTMLConverter } from './html-converter.js';

// export type IDOMNodeConstructor = {
//   tagName?: string;
//   className?: string;
//   nodeContent?: string;
//   useTemplate?: string;
// };

export class DOMFactory {
  constructor(DOMInitialParam) {
    // this.domNode = ''; //empty dom enement
    const el = document.createElement(DOMInitialParam?.tagName || 'div');
    el.className = DOMInitialParam?.className || '';
    el.textContent = DOMInitialParam?.nodeContent || '';

    this.domNode = el;

    if (DOMInitialParam?.useTemplate) {
      const constructedMarkup = HTMLConverter(DOMInitialParam.useTemplate);
      this.domNode.appendChild(constructedMarkup);
    }
  }

  destroyDomElement() {
    this.domNode.remove();
  }

  renderElement(parentDomNode) {
    parentDomNode.append(this.domNode);
  }
}
