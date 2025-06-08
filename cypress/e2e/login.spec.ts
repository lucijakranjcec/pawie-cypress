// cypress/e2e/login.spec.ts
import LoginPage from '../support/pages/LoginPage';

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit(Cypress.env('BASE_URL'));
  });

  it('Verify Login Page Elements', () => {
    loginPage.verifyHomePageElements();
  });

  it('Verify Validation', () => {
    loginPage.verifyValidation();
  });

  it('Login with Invalid Credentials', () => {
    loginPage.loginInvalidCredentials();
  });

  it('Login with Valid Administrator Credentials', () => {
    loginPage.loginAdministrator();
  });
});
