import FormPage from '../support/pages/FormPage';
import LoginPage from '../support/pages/LoginPage';
import SidebarPage from '../support/pages/SidebarPage';

describe('Form Tests', () => {
  const formPage = new FormPage();
  const loginPage = new LoginPage();
  const sidebarPage = new SidebarPage();

  beforeEach(() => {
    cy.visit(Cypress.env('BASE_URL'));
    loginPage.loginAdministrator();
    sidebarPage.goToFormPage();
  });

  it('Verify Validation', () => {
    formPage.verifyValidation();
  });

  it('Cancel Sending Form', () => {
    formPage.cancelSendingForm();
  });

  it('Send Form', () => {
    formPage.sendForm();
  });
});
