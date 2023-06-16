import { html } from 'diagram-js/lib/ui';

import { BoxedExpression } from './BoxedExpression';

export function Relation(props) {
  const { element } = props;
  const columns = element.get('column');
  const rows = element.get('row');

  return html`<table class="table table-bordered table-striped">
    <thead>
      <tr>
        ${columns.map(column => html`<th>${column.get('name')}</th>`)}
      </tr>
    </thead>
    <tbody>
      ${rows.map(row => html`<${Row} element=${row} />`)}
    </tbody>
  </table>`;
}

function Row(props) {
  const { element } = props;
  const elements = element.get('elements');

  return html`<tr>
    ${elements.map(element => html`<td>
      <${BoxedExpression} element=${element} />
    </td>`)}
  </tr>`;
}