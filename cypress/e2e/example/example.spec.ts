describe('example test', () => {
  it('open example.com and verify content', () => {
    cy.visit('https://www.example.com/');

    cy.title().should('eq', 'Example Domain');

    cy.contains('This domain is for use in illustrative examples').should('be.visible');
  });
});
