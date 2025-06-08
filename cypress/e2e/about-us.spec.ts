import LoginPage from '../support/pages/LoginPage';
import AboutUsPage from '../support/pages/AboutUsPage';
import SidebarPage from '../support/pages/SidebarPage';

const facebookLink = 'https://web.facebook.com/?_rdc=1&_rdr#';
const twitterLink = 'https://twitter.com/';
const instagramLink = 'https://www.instagram.com';

describe('About Us Page', () => {
  const aboutUsPage = new AboutUsPage();
  const loginPage = new LoginPage();
  const sidebarPage = new SidebarPage();

  beforeEach(() => {
    cy.visit(Cypress.env('BASE_URL'));
    loginPage.loginAdministrator();
    sidebarPage.goToAboutUsPage();
  });

  it('Verify all elements are present and correct', () => {
    aboutUsPage.verifyElements();
  });

  it('Verify social media links go to correct URLs', () => {
    aboutUsPage.verifySocialMediaLinks();
  });
});
