import { GroupByPage } from './app.po';

describe('group-by App', () => {
  let page: GroupByPage;

  beforeEach(() => {
    page = new GroupByPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
