import { AngularSrc2Page } from './app.po';

describe('angular-src2 App', function() {
  let page: AngularSrc2Page;

  beforeEach(() => {
    page = new AngularSrc2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
