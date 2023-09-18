Cypress.Commands.add('getAlert', () => {
    cy.window().then((win) => {
        cy.stub(win, 'alert').as('windowAlert')
    })
})

Cypress.Commands.add('logout', () => {
    cy.get('#logout2').click()
})

beforeEach(() => {
    // Clear cookies and local storage before each test
    // otherwise, the cart would keep the added items from other tests
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit('');
});