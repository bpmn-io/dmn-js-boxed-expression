import { html } from 'diagram-js/lib/ui';

import { EncapsulatedLogic } from './EncapsulatedLogic';

export function BusinessKnowledgeModel(props) {
  const { element } = props;
  return html`
    <h1>${element.get('name')}</h1>
    <${EncapsulatedLogic} element=${element.get('encapsulatedLogic')} />
  `;
}
