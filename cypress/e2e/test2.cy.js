import Phones from '../page-objects/Phones'
import Login from '../page-objects/Login'

const phonesPage = new Phones()
const loginPage = new Login()

const username = Cypress.env('username')
const password = Cypress.env('password')

describe('Phones', () => {
    beforeEach(() => {
        cy.visit("")
    })

    it('taet', () => {
        phonesPage.goToPhones()
        goToPhoneDetail()
    });
});