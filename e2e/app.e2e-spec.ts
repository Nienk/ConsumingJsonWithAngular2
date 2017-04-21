import { AngularJsonAppPage } from './app.po';

describe('angular-json-app App', () => {
  let page: AngularJsonAppPage;

  beforeEach(() => {
    page = new AngularJsonAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
