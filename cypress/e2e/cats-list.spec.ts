import LoginPage from '../support/pages/LoginPage';
import CatsListPage from '../support/pages/CatsListPage';
import SidebarPage from '../support/pages/SidebarPage';

describe('Cats List Page Tests', () => {
  const loginPage = new LoginPage();
  const sidebarPage = new SidebarPage();
  const catsListPage = new CatsListPage();

  beforeEach(() => {
    cy.visit(Cypress.env('BASE_URL'));
    loginPage.loginAdministrator();
    sidebarPage.goToCatsPage();
  });

  it('Verify Elements', () => {
    catsListPage.verifyElements();
  });

  it('View Element Details', () => {
    catsListPage.viewElementDetails();
  });
});
