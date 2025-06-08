class AboutUsPage {
  elements = {
    pageTitle: () => cy.get('[data-testid="about-page-title"]'),
    pawieDescription: () => cy.get('[data-testid="pawie-info"]'),
    pawieDescription2: () => cy.get('[data-testid="pawie-info2"]'),
    pawieDescription3: () => cy.get('[data-testid="pawie-info3"]'),
    adoptedCatImage: () => cy.get('[data-testid="adopted-cat-image"]'),
    kittensImage: () => cy.get('[data-testid="kittens-image"]'),
    facebookFavicon: () => cy.get('i.fa-facebook'),
    twitterFavicon: () => cy.get('i.fa-twitter'),
    instagramFavicon: () => cy.get('i.fa-instagram')
  };

  verifyElements(): void {
    this.elements.pageTitle().should('have.text', pageTitle);
    this.elements.pawieDescription().should('contain.text', pawieDescription);
    this.elements.adoptedCatImage().should('be.visible');
    this.elements.pawieDescription2().should('contain.text', pawieDescription2);
    this.elements.kittensImage().should('be.visible');
    this.elements.pawieDescription3().should('contain.text', pawieDescription3);
    this.elements.facebookFavicon().should('be.visible');
    this.elements.twitterFavicon().should('be.visible');
    this.elements.instagramFavicon().should('be.visible');
  }

  verifySocialMediaLinks(): void {
    this.elements.facebookFavicon()
      .parent('a')
      .should('have.attr', 'href', 'https://www.facebook.com');

    this.elements.twitterFavicon()
      .parent('a')
      .should('have.attr', 'href', 'https://www.twitter.com');

    this.elements.instagramFavicon()
      .parent('a')
      .should('have.attr', 'href', 'https://www.instagram.com');
  }

}

export default AboutUsPage;

const pageTitle = 'About Us';
const pawieDescription =
  'At Paw.ie, our mission is to help people adopt cats. We believe that every feline deserves a loving home where they can thrive and be pampered. With our dedicated team, we strive to connect potential cat parents with their perfect match.';
const pawieDescription2 =
  'We understand that adopting a pet is a significant commitment, and we are here to support you throughout every step of your journey. Through our platform, you can also send questions about the cats and potentially adopt them.';
const pawieDescription3 =
  'Established in 2020, Paw.ie has since been at the forefront of feline adoption, giving countless cats a new lease on life. We partner with various cat shelters, ensuring that every cat gets a second chance at happiness.';
