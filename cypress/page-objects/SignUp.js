import { faker } from '@faker-js/faker';

export default class SignUp {

    signUp(
        userName=faker.internet.userName()
        ) {
        cy.get('#signin2').click()
        cy.get('#sign-username').clear().type(userName)
        cy.get('#sign-password').type(faker.internet.password())
        cy.get('button').contains('Sign up').click()
    }
}