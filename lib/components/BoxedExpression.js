import { html } from 'diagram-js/lib/ui';

import { Context } from './Context';
import { DecisionTable } from './DecisionTable';
import { LiteralExpression } from './LiteralExpression';
import { Relation } from './Relation';

import { is } from '../util';

export function BoxedExpression(props) {
  const { element } = props;

  if (is(element, 'dmn:Context')) {
    return html`<${Context} element=${ element } />`;
  } else if (is(element, 'dmn:DecisionTable')) {
    return html`<${DecisionTable} element=${ element } />`;
  } else if (is(element, 'dmn:LiteralExpression')) {
    return html`<${LiteralExpression} element=${ element } />`;
  } else if (is(element, 'dmn:Relation')) {
    return html`<${Relation} element=${ element } />`;
  }

  return null;
}
