export default class Login {

    login(username, password) {
        cy.get('#login2').click()
        cy.get('#loginusername')
            .click()
            .type(username, { log: false }, { force: true })
            .should('have.value', username)
        cy.get('#loginpassword').type(password, { log: false })
        cy.get('button').contains('Log in').click()
    }
}