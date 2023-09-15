import SignUp from '../page-objects/SignUp'
import Login from '../page-objects/Login'

const signUpPage = new SignUp()
const loginPage = new Login()

const username = Cypress.env('username')
const password = Cypress.env('password')

describe('Registration validation', () => {
    beforeEach(() => {
        cy.visit("")
    })

    it('Sign up new user', () => {
        signUpPage.signUp()
        cy.getAlert()

        cy.get('@windowAlert').should('be.calledWith', 'Sign up successful.')

    })

    it('Sign up existent user should fail', () => {
        signUpPage.signUp(username)
        
        cy.getAlert()

        cy.get('@windowAlert').should('be.calledWith', 'This user already exist.')

    })


    it('Login with valid credentials', () => {
        loginPage.login(username, password)

        cy.get('#nameofuser').should('contain', username)
    })

    it('Login with wrong password', () => {
        const invalidPassword = "m!nh0c@s"

        loginPage.login(username, invalidPassword)

        cy.getAlert()

        cy.get('@windowAlert').should('be.calledWith', 'Wrong password.')
    })

    it('Logout user', () => {
        const username = Cypress.env('username')
        const password = Cypress.env('password')

        loginPage.login(username, password)

        cy.logout()

        cy.get('#login2').should('be.visible')
    })

});

