import { DashSchoolPage } from './app.po';

describe('dash-school App', function() {
  let page: DashSchoolPage;

  beforeEach(() => {
    page = new DashSchoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
