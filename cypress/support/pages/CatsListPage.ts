import catsList from '../../fixtures/cats-list.json';

class CatsListPage {
  elements = {
    getCatImage: (index: number) => cy.get(`[data-testid="cat-${index}-image"]`),
    getCatName: (index: number) => cy.get(`[data-testid="cat-${index}-name"]`),
    getCatShortDescription: (index: number) => cy.get(`[data-testid="cat-${index}-short-description"]`),
    getCatDetailsButton: (index: number) => cy.get(`button[data-target="#catModal-${index}"]`),
    getCatModalTitle: (index: number) => cy.get(`[data-testid="cat-${index}-modal-title"]`),
    getCatBreed: (index: number) => cy.get(`[data-testid="cat-${index}-breed"]`),
    getCatAge: (index: number) => cy.get(`[data-testid="cat-${index}-age"]`),
    getCatLongDescription: (index: number) => cy.get(`[data-testid="cat-${index}-long-description"]`),
    buttonCloseModal: (index: number) => cy.get(`#catModal-${index}.show button.close`).contains('×')
  };

  verifyElements(): void {
    for (let i = 0; i < 10; i++) {
      this.elements.getCatImage(i).should('be.visible');
      this.elements.getCatName(i)
        .should('be.visible')
        .and('have.text', catsList[i].name);
      this.elements.getCatShortDescription(i)
        .should('be.visible')
        .and('have.text', catsList[i].shortDescription);
      this.elements.getCatDetailsButton(i).should('be.visible');
    }
  }

  viewElementDetails(): void {
    for (let i = 0; i < 10; i++) {
      this.elements.getCatDetailsButton(i).click({ force: true });

      this.elements.getCatModalTitle(i)
        .should('be.visible')
        .and('have.text', `${catsList[i].name} details`);
      this.elements.getCatBreed(i)
        .should('be.visible')
        .and('have.text', `Breed: ${catsList[i].breed}`);
      this.elements.getCatAge(i)
        .should('be.visible')
        .and('have.text', `Age: ${catsList[i].age}`);
      this.elements.getCatLongDescription(i)
        .should('be.visible')
        .and('have.text', catsList[i].longDescription);

       this.elements.buttonCloseModal(i).click({ force: true });
    }
  }
}

export default CatsListPage;
