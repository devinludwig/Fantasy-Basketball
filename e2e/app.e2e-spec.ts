import { FantasyBasketballPage } from './app.po';

describe('fantasy-basketball App', function() {
  let page: FantasyBasketballPage;

  beforeEach(() => {
    page = new FantasyBasketballPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
