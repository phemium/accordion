import { TestWindow } from '@stencil/core/testing';
import { Accordion } from './accordion';

describe('accordion', () => {
  it('should build', () => {
    expect(new Accordion()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAccordionElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Accordion],
        html: '<accordion></accordion>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
