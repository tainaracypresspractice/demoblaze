import { faker } from '@faker-js/faker';

export default class SignUp {

    signUp(
        username=faker.internet.userName(),
        password=faker.internet.password()
        ) {
        cy.get('#signin2').click()
        cy.get('#sign-username').clear().type(username)
        cy.get('#sign-password').type(password)
        cy.get('button').contains('Sign up').click()
    }
}