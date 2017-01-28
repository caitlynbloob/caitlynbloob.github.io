import { CjPage } from './app.po';

describe('cj App', function() {
  let page: CjPage;

  beforeEach(() => {
    page = new CjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
