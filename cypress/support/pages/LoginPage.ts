// cypress/support/pages/LoginPage.ts
import SidebarPage from './SidebarPage';

class LoginPage {
  elements = {
    loginTitle: () => cy.contains('Login to Paw.ie'),
    mandatoryFieldsMessages: () => cy.get('.validation-error'),
    invalidCredentialsMessage: () => cy.contains('Invalid credentials'),
    usernameInput: () => cy.get('#username'),
    passwordInput: () => cy.get('#password'),
    loginButton: () => cy.get('button[type="submit"]')
  };

  verifyHomePageElements(): void {
    this.elements.usernameInput().should('be.visible');
    this.elements.passwordInput().should('be.visible');
    this.elements.loginButton().should('be.visible');
  }

  verifyValidation(): void {
    this.elements.loginButton().click();
    this.elements.mandatoryFieldsMessages().should('have.length', 2);
    this.elements.mandatoryFieldsMessages().first().should('have.text', 'This field is mandatory.');
  }

  loginInvalidCredentials(): void {
    const sidebarPage = new SidebarPage();
    cy.get('#username').type(Cypress.env('ADMINISTRATOR_USERNAME'));
    cy.get('#password').type('wrongPassword');
    cy.get('button[type="submit"]').click();

    this.elements.invalidCredentialsMessage().should('be.visible');
    this.elements.loginTitle().should('be.visible');
    sidebarPage.elements.linkPawie().should('not.exist');
  }

  loginAdministrator(): void {
    const sidebarPage = new SidebarPage();
    cy.get('#username').type(Cypress.env('ADMINISTRATOR_USERNAME'));
    cy.get('#password').type(Cypress.env('ADMINISTRATOR_PASSWORD'));
    cy.get('button[type="submit"]').click();

    this.elements.loginTitle().should('not.exist');
    sidebarPage.elements.linkPawie().should('be.visible');
  }
}

export default LoginPage;
