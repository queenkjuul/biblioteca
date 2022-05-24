/// <reference types="cypress" />

context('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234')
  })

  it('Should render the header', () => {
    cy.get('.header').should('exist');
  })

  it('Links in the homepage container should be formatted as buttons', () => {
    cy.get('.homepage > a').should('have.class', 'btn');
  })

  it('Should have a See Books button which navigates to /bookshelf', () => {
    cy.get('.homepage > a:first-of-type').should('have.text', 'See Books');
  })
})