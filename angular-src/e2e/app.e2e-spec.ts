import { StronaKonkursPage } from './app.po';

describe('strona-konkurs App', function() {
  let page: StronaKonkursPage;

  beforeEach(() => {
    page = new StronaKonkursPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
