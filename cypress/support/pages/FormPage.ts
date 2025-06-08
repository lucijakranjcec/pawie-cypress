import catsList from '../../fixtures/cats-list.json';

const formEmail = "test@test.hr";
const formFirstName = "Test";
const formLastName = "Test";
const formRequestText = `Hello, I hope this message finds you well. Over the past few months, I've been giving serious thought to the idea of adopting a cat. My home feels like it's missing that special companion, and I believe a cat would fill that void perfectly. After browsing through your website and getting to know about the cats available for adoption, I've been particularly drawn to 'Midnight'. There's something about Midnight that deeply resonates with me. I would love to learn more about Whiskers' personality, habits, and any specific needs or preferences he might have. Could you provide me with more details? Additionally, I'd like to understand the adoption process and if there are any prerequisites or requirements on my end. Thank you for the wonderful work you do in rescuing and rehoming these lovely animals. I'm eagerly looking forward to the possibility of giving a loving home to a cat in need. Warm regards.`;

class FormPage {
  elements = {
    inputEmail: () => cy.get('input#email'),
    inputFirstName: () => cy.get('input#firstName'),
    inputLastName: () => cy.get('input#lastName'),
    selectCat: () => cy.get('select#cat'),
    inputRequest: () => cy.get('textarea#requestText'),
    buttonSendFormCancel: () => cy.get('[data-testid="form-cancel-button"]'),
    buttonSendFormConfirm: () => cy.get('[data-testid="form-submit-button"]'),
    emailRequiredMessage: () => cy.get('[data-testid="email-required-message"]'),
    emailInvalidMessage: () => cy.get('[data-testid="email-invalid-message"]'),
    firstNameRequiredMessage: () => cy.get('[data-testid="first-name-required-message"]'),
    lastNameRequiredMessage: () => cy.get('[data-testid="last-name-required-message"]'),
    catRequiredMessage: () => cy.get('[data-testid="cat-required-message"]'),
    requestRequiredMessage: () => cy.get('[data-testid="request-text-required"]'),
    successModalTitle: () => cy.get('[data-testid="sucess-modal-title"]'),
    successModalBody: () => cy.get('[data-testid="success-modal-body"]'),
    successModalCloseButton: () => cy.get('[data-testid="sucess-modal-close-button"]')
  };

  verifyValidation(): void {
    this.elements.buttonSendFormConfirm().click();

    this.elements.emailRequiredMessage()
      .should('be.visible')
      .and('have.text', 'Email is required');
    this.elements.firstNameRequiredMessage()
      .should('be.visible')
      .and('have.text', 'First name is required');
    this.elements.lastNameRequiredMessage()
      .should('be.visible')
      .and('have.text', 'Last name is required');
    this.elements.catRequiredMessage()
      .should('be.visible')
      .and('have.text', 'Cat selection is required');
    this.elements.requestRequiredMessage()
      .should('be.visible')
      .and('have.text', 'Request text is required');

    this.elements.inputEmail().type('test');
    this.elements.emailInvalidMessage()
      .should('be.visible')
      .and('have.text', 'Invalid email format');

    catsList.forEach((cat) => {
      cy.get(`select#cat option[value="${cat.name}"]`).should('have.text', cat.name);
    });
  }

  cancelSendingForm(): void {
    this.elements.inputEmail().type(formEmail);
    this.elements.inputFirstName().type(formFirstName);
    this.elements.inputLastName().type(formLastName);
    this.elements.selectCat().select(catsList[9].name);
    this.elements.inputRequest().type(formRequestText, { delay: 0 });

    this.elements.buttonSendFormCancel().click();

    this.elements.successModalTitle().should('not.be.visible');
    this.elements.successModalBody().should('not.be.visible');
    this.elements.inputEmail().should('have.value', '');
    this.elements.inputFirstName().should('have.value', '');
    this.elements.inputLastName().should('have.value', '');
    this.elements.inputRequest().should('have.value', '');
  }

  sendForm(): void {
    this.elements.inputEmail().type(formEmail);
    this.elements.inputFirstName().type(formFirstName);
    this.elements.inputLastName().type(formLastName);
    this.elements.selectCat().select(catsList[9].name);
    this.elements.inputRequest().type(formRequestText, { delay: 0 });

    this.elements.buttonSendFormConfirm().click();

    this.elements.successModalTitle()
      .should('be.visible')
      .and('have.text', 'Form Submitted Successfully');
    this.elements.successModalBody()
      .should('be.visible')
      .and('contain.text', `Dear ${formFirstName} ${formLastName},`)
      .and('contain.text', 'Thank you for reaching out! Our team will get in touch with you via e-mail as soon as possible.');
  }
}

export default FormPage;
