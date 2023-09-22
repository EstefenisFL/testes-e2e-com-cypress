describe('Login', () => {

  const userEmail = Cypress.env('USER_EMAIL')
  const userPassword = Cypress.env('USER_PASSWORD')

  it('successfully log in', () => {
    cy.guiLogin(userEmail, userPassword)
    cy.contains('h1', 'Your Notes').should('be.visible')
    cy.contains('a', 'Create a new note').should('be.visible')
  })
})
