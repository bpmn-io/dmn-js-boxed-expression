import { html } from 'diagram-js/lib/ui';

import { BoxedExpression } from './BoxedExpression';

export function Decision(props) {
  const { element } = props;
  return html`
    <h1>${element.get('name')}</h1>
    <${BoxedExpression} element=${element.get('decisionLogic')} />
  `;
}
