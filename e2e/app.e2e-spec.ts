import { HockeyTeamPage } from './app.po';

describe('hockey-team App', () => {
  let page: HockeyTeamPage;

  beforeEach(() => {
    page = new HockeyTeamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
