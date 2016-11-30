import { BlocRailsAngular2StarterPage } from './app.po';

describe('bloc-rails-angular2-starter App', function() {
  let page: BlocRailsAngular2StarterPage;

  beforeEach(() => {
    page = new BlocRailsAngular2StarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
