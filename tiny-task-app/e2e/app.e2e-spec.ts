import { TinyTaskAppPage } from './app.po';

describe('tiny-task-app App', () => {
  let page: TinyTaskAppPage;

  beforeEach(() => {
    page = new TinyTaskAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
