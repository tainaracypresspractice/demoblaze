export default class Login {

    login(username, password) {
        cy.get('#login2').click()
        cy.get('#loginusername').clear().type(username)
        cy.get('#loginpassword').type(password)
        cy.get('button').contains('Log in').click()
    }
}