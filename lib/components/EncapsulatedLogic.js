import { html } from 'diagram-js/lib/ui';

import { BoxedExpression } from './BoxedExpression';

export function EncapsulatedLogic(props) {
  const { element } = props;
  const params = element.get('formalParameter');
  return html`
    <span>${element.get('kind')}</span> | <span>(${params.map(p => p.get('name')).join(', ')})</span>
    <${BoxedExpression} element=${element.get('body')} />
  `;
}
