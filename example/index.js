import Modeler from 'dmn-js-drd/lib/Modeler.js';
import DmnModdle from 'dmn-moddle';
import Ids from 'ids';

import fileDrop from 'file-drops';

import { BoxedExpressionRendererModule } from '../lib';

import NestedContextDmn from 'bundle-text:./nested-context.dmn';

let container;
let editor;

async function open(xml) {
  const parsed = await DmnModdle().fromXML(xml);

  return editor.open(parsed.rootElement);
}

container = document.createElement('div');
container.className = 'test-container';

document.body.appendChild(container);

const moddle = DmnModdle();

// attach ids to moddle to be able to track
// and validated ids in the DMN XML document
// tree
moddle.ids = new Ids([ 32, 36, 1 ]);

const options = {
  container: container,
  keyboard: {
    bindTo: document
  },
  additionalModules: [
    BoxedExpressionRendererModule,
    {
      moddle: [ 'value', moddle ]
    }
  ]
};

editor = new Modeler(options);
open(NestedContextDmn);

document.body.addEventListener('dragover', fileDrop('Open DMN file', function(files) {

  // files = [ { name, contents }, ... ]

  const file = files[0];

  if (file) {
    open(file.contents);
  }
}), false);
