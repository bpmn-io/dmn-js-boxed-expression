import { html } from 'diagram-js/lib/ui';

import { BoxedExpression } from './BoxedExpression';
import { UnaryTests } from './UnaryTests';

export function DecisionTable(props) {
  const { element } = props;

  return html`<table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th>${element.get('hitPolicy')}</th>
        ${element.get('input').map(input => html`<${Input} element=${input} />`)}
        ${element.get('output').map(output => html`<${Output} element=${output} />`)}
      </tr>
    </thead>
    <tbody>
      ${element.get('rule').map((rule, index) => html`<${Rule} index=${index + 1} element=${rule} />`)}
    </tbody>
  </table>`;
}

function Input(props) {
  const { element } = props;
  const inputExpression = element.get('inputExpression');
  return html`<th>${element.get('label') || inputExpression.get('text') || '-'}</th>`;
}

function Output(props) {
  const { element } = props;
  return html`<th>${element.get('name') || '-'}</th>`;
}

function Rule(props) {
  const { element, index } = props;

  const inputEntries = element.get('inputEntry');
  const outputEntries = element.get('outputEntry');

  return html`<tr>
    <td>${index}</td>
    ${inputEntries.map(inputEntry => html`<td><${UnaryTests} element=${inputEntry} /></td>`)}
    ${outputEntries.map(outputEntry => html`<td><${BoxedExpression} element=${outputEntry} /></td>`)}
  </tr>`;
}
