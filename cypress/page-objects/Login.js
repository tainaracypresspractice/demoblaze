export default class Login {

    login(username, password) {
        cy.get('#login2').click()
        cy.get('#loginusername').clear().focus()
            .type(username, { log: false }, {delay: 50})
            .should('have.value', username)
        cy.get('#loginpassword').type(password, { log: false })
        cy.get('button').contains('Log in').click()
    }
}