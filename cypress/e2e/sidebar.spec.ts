import LoginPage from '../support/pages/LoginPage';
import SidebarPage from '../support/pages/SidebarPage';

describe('Sidebar Tests', () => {
  const loginPage = new LoginPage();
  const sidebarPage = new SidebarPage();

  beforeEach(() => {
    cy.visit(Cypress.env('BASE_URL'));
    loginPage.loginAdministrator();
  });

  it('Verify Sidebar Elements', () => {
    sidebarPage.verifySidebarElements();
  });

  it('Cancel Logging Out', () => {
    sidebarPage.logoutCancel();
  });

  it('Logout', () => {
    sidebarPage.logout();
  });
});
