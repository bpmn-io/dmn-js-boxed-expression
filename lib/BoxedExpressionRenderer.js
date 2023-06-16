import { render, html } from 'diagram-js/lib/ui';

import { getBusinessObject, is, isAny } from './util';
import { BoxedExpression } from './components/BoxedExpression';
import { BusinessKnowledgeModel } from './components/BusinessKnowledgeModel';
import { Decision } from './components/Decision';

export class BoxedExpressionRenderer {

  /**
   *
   * @param {import('diagram-js/lib/core/Canvas').default} canvas
   */
  constructor(canvas) {
    this._canvas = canvas;
    this._init();
  }

  _init() {
    this._container = document.createElement('div');
    this._container.style.display = 'none';
    this._container.className = 'dmn-js-boxed-expression';

    const rootContainer = this._canvas.getContainer();
    rootContainer.appendChild(this._container);
  }

  /**
   *
   * @param {import('./types').Expression} element
   */
  open(element) {
    element = getBusinessObject(element);

    if (!element) {
      throw new Error('element required');
    }

    let Component = BoxedExpression;
    if (is(element, 'dmn:Decision')) {
      Component = Decision;
    } else if (is(element, 'dmn:BusinessKnowledgeModel')) {
      Component = BusinessKnowledgeModel;
    }

    render(html`
      <div class="dmn-js-boxed-expression--content">
        <button class="dmn-js-boxed-expression--close" onClick=${this.close.bind(this)}>X</button>
        <${Component} element=${element} />
      </div>
    `, this._container);
    this._container.style.display = 'block';
  }

  canOpen(element) {
    if (!element) {
      return false;
    }

    const returnValue = isAny(element, [ 'dmn:Decision', 'dmn:BusinessKnowledgeModel', 'dmn:Expression' ]);

    return returnValue;
  }

  close() {
    render(null, this._container);
    this._container.style.display = 'none';
  }
}

BoxedExpressionRenderer.$inject = [ 'canvas' ];

