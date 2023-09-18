Cypress.Commands.add('getAlert', () => {
    cy.window().then((win) => {
        cy.stub(win, 'alert').as('windowAlert')
    })
})

Cypress.Commands.add('logout', () => {
    cy.get('#logout2').click()
})