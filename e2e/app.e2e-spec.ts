import { JdenekatPage } from './app.po';

describe('jdenekat App', function() {
  let page: JdenekatPage;

  beforeEach(() => {
    page = new JdenekatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
