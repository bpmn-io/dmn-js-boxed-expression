import Modeler from 'dmn-js-drd/lib/Modeler';
import DmnModdle from 'dmn-moddle';
import Ids from 'ids';

import { BoxedExpressionRendererModule } from '../../lib';

import SimpleDmn from '../fixtures/simple.dmn';
import NestedContextDmn from '../fixtures/nested-context.dmn';
import BkmWithRelationDmn from '../fixtures/BkmWithRelation.dmn';

import { parse, singleStart } from '../TestHelper';

describe('BoxedExpressionRenderer', function() {


  let container;
  let editor;

  async function open(xml) {
    const parsed = await parse(xml);

    return editor.open(parsed.rootElement);
  }

  beforeEach(function() {
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
  });

  // singleStart || afterEach(function() {
  //   if (editor) {
  //     editor.destroy();

  //     editor = null;
  //   }

  //   document.body.removeChild(container);
  // });


  (singleStart ? it.only : it)('should work', async function() {

    // given
    await open(SimpleDmn);
  });


  it('should open nested context', async function() {

    // given
    await open(NestedContextDmn);
    const elementRegistry = editor.get('elementRegistry');
    const decision = elementRegistry.get('Decision_1');
    const boxedExpressionRenderer = editor.get('boxedExpressionRenderer');

    // when
    boxedExpressionRenderer.open(decision);

    // then
    // 🫣
  });


  it('should open BKM with relation', async function() {

    // given
    await open(BkmWithRelationDmn);
    const elementRegistry = editor.get('elementRegistry');
    const bkm = elementRegistry.get('BKM');
    const boxedExpressionRenderer = editor.get('boxedExpressionRenderer');

    // when
    boxedExpressionRenderer.open(bkm);

    // then
    // 🫣
  });
});
