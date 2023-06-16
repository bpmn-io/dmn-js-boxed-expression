import BaseDrillDown from 'dmn-js-drd/lib/features/drill-down/DrillDown';

export class DrillDown extends BaseDrillDown {

  /**
   *
   * @param {import('./BoxedExpressionRenderer').BoxedExpressionRenderer} boxedExpressionRenderer
   * @param  {...unknown} args
   */
  constructor(boxedExpressionRenderer, eventBus, ...args) {
    super(...args);
    this._boxedExpressionRenderer = boxedExpressionRenderer;

    eventBus.on('shape.added', ({ element }) => {
      if (boxedExpressionRenderer.canOpen(element)) {
        this.addOverlay(element, 'dmn-icon-literal-expression');
      }
    });
  }

  /**
   *
   * @param {import('./types').Expression} element
   */
  drillDown(element) {
    if (!this._boxedExpressionRenderer.canOpen(element)) {
      return;
    }

    this._boxedExpressionRenderer.open(element);
  }
}

DrillDown.$inject = [ 'boxedExpressionRenderer', 'eventBus', ...BaseDrillDown.$inject ];
