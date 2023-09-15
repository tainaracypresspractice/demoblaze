export default class Login {

    login(username, password) {
        cy.get('#login2').click()
        cy.get('#loginusername').clear().type(username, { log: false })
        cy.get('#loginpassword').type(password, { log: false })
        cy.get('button').contains('Log in').click()
    }
}