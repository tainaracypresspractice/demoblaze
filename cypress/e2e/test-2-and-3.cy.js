import Phones from '../page-objects/Phones'
import Login from '../page-objects/Login'
import Cart from '../page-objects/Cart'

const phonesPage = new Phones()
const loginPage = new Login()
const cartPage = new Cart()

const username = Cypress.env('username')
const password = Cypress.env('password')

describe('Place order validation', () => {
    beforeEach(() => {
        // Clear cookies and local storage before each test
        // otherwise, the cart would keep the added items from other tests
        cy.clearCookies()
        cy.clearLocalStorage()

        cy.visit("")
    })

    it('Place order', () => {

        loginPage.login(username, password)
 
        cy.get('#nameofuser').should('contain', username)

        phonesPage.goToPhones()

        //i could use a fixture to get all products names, so i wont hard code it
        phonesPage.goToPhoneDetail('Samsung galaxy s6')

        phonesPage.addToCart()

        cy.getAlert()

        const alertMessage = /Product added|Product added.\./

        cy.get('@windowAlert').should('be.calledWith', Cypress.sinon.match(alertMessage))

        cy.visit("")

        phonesPage.goToPhones()

        phonesPage.goToPhoneDetail('Nokia lumia 1520')

        phonesPage.addToCart()

        cy.getAlert()

        cy.get('@windowAlert').should('be.calledWith', Cypress.sinon.match(alertMessage))

        cartPage.goToCart()

        cy.intercept('POST', '/deleteitem').as('deleteRequest')

        cartPage.deleteItem()

        cy.wait('@deleteRequest').then((interception) => {
            cartPage.placeOrder()

            const orderInformations = cartPage.fillPlaceOrderForm()

            cy.get('p.lead.text-muted').should('contain', 'Card Number: ' + orderInformations.creditCardNumber)
                .and('contain', orderInformations.fullName)
        })

    });
});