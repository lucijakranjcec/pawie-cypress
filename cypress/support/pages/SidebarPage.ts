class SidebarPage {
  elements = {
    linkPawie: () => cy.get('[data-testid="navigation-pawie-link"]'),
    linkCats: () => cy.get('[data-testid="navigation-cats-link"]'),
    linkForm: () => cy.get('[data-testid="navigation-form-link"]'),
    linkAbout: () => cy.get('[data-testid="navigation-about-link"]'),
    linkLogout: () => cy.get('[data-testid="navigation-logout-link"]'),
    logoutModalTitle: () => cy.get('[data-testid="logout-modal-title"]'),
    logoutModalBody: () => cy.get('[data-testid="logout-modal-body"]'),
    logoutModalCancel: () => cy.get('[data-testid="logout-modal-cancel-button"]'),
    logoutModalConfirm: () => cy.get('[data-testid="logout-modal-confirm-button"]'),
    loginTitle: () => cy.contains('Login to Paw.ie')
  };

  goToPawie() {
    this.elements.linkPawie().click();
  }

  goToCatsPage() {
    this.elements.linkCats().click();
  }

  goToFormPage() {
    this.elements.linkForm().click();
  }

  goToAboutUsPage() {
    this.elements.linkAbout().click();
  }

  verifySidebarElements() {
    this.elements.linkPawie().should('be.visible');
    this.elements.linkCats().should('be.visible');
    this.elements.linkForm().should('be.visible');
    this.elements.linkAbout().should('be.visible');
    this.elements.linkLogout().should('be.visible');
  }

  logoutCancel() {
    this.elements.linkLogout().click();
    this.elements.logoutModalTitle().should('have.text', 'Confirm Logout');
    this.elements.logoutModalBody().should('have.text', 'Do you really want to logout?');
    this.elements.logoutModalCancel().click();
    this.elements.loginTitle().should('not.exist');
    this.elements.linkPawie().should('be.visible');
  }

  logout() {
    this.elements.linkLogout().click();
    this.elements.logoutModalTitle().should('have.text', 'Confirm Logout');
    this.elements.logoutModalBody().should('have.text', 'Do you really want to logout?');
    this.elements.logoutModalConfirm().click();
    this.elements.loginTitle().should('be.visible');
    this.elements.linkPawie().should('not.exist');
  }
}

export default SidebarPage;
