import { recurse } from 'cypress-recurse'

export default class Login {

    login(username, password) {
        cy.get('#login2').click()

        // Using the library cypress-recurse to avoid flaky tests
        recurse(
            () =>  cy.get('input[id="loginusername"]')
                    .clear()
                    .type(username, { log: false }),
            // If input.value == username, the recursion stops
            ($input) => $input.val() === username
        ).should('have.value', username)

        cy.get('#loginpassword').type(password, { log: false })
        cy.get('button').contains('Log in').click()
    }
}