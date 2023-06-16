import { html, useEffect, useRef } from 'diagram-js/lib/ui';

import FeelEditor from '@bpmn-io/feel-editor';
import { resolveVariables } from '@bpmn-io/dmn-variable-resolver';

export function LiteralExpression(props) {
  const { element } = props;

  const container = useRef(null);
  const editor = useRef(null);

  useEffect(() => {
    if (!container.current) {
      return;
    }

    editor.current = new FeelEditor({
      container: container.current,
      value: element.get('text'),
      variables: resolveVariables(element)
    });

    return () => {
      editor.current = null;
    };
  });



  return html`<div ref=${container} />`;
}
