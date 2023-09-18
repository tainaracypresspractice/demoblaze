export default class Login {

    login(username, password) {
        cy.get('#login2').click()
        cy.get('#loginusername')
            .type(username, { log: false }, {delay: 500})
            .should('have.value', username,  { timeout: 10000 })
        cy.get('#loginpassword').type(password, { log: false })
        cy.get('button').contains('Log in').click()
    }
}