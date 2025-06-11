/// <reference types="cypress" />

describe('Home page', () => {
  it('Redirects to home page', () => {
    cy.visit('http://localhost:5173/')
    cy.url().should('include', 'localhost:5173/me')
  })

  it('Has name title', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Joshua Scott Kelso')
  })
})