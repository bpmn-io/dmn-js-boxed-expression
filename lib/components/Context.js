import { html } from 'diagram-js/lib/ui';

import { BoxedExpression } from './BoxedExpression';

export function Context(props) {
  const { element } = props;
  const entries = element.get('contextEntry');

  return html`<table class="table table-bordered table-striped">
    <tbody>
      ${entries.map(entry => html`<${ContextEntry} element=${entry} />`)}
    </tbody>
  </table>`;
}

export function ContextEntry(props) {
  const { element } = props;
  const boxedExpression = element.get('value');

  return html`<tr>
    <td>${element.get('variable').get('name')}</td>
    <td><${BoxedExpression} element=${boxedExpression} /></td>
  </tr>`;
}
