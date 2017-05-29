import { ZamgerPage } from './app.po';

describe('zamger App', () => {
  let page: ZamgerPage;

  beforeEach(() => {
    page = new ZamgerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
