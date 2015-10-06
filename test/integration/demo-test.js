import {assert} from 'chai';

describe('supporting evidence page', () => {
  before(async () => {
    await browser.url('/');
  });

  it('should have a page title', async () => {
    let title = await browser.getTitle();
    assert.strictEqual(title, 'App');
  });
});
