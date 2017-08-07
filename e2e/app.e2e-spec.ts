import { AmpleManagePage } from './app.po';

describe('ample-manage App', () => {
  let page: AmpleManagePage;

  beforeEach(() => {
    page = new AmpleManagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
