import Login from '../page-objects/Login'
import Cart from '../page-objects/Cart'
import ProductsPage from '../page-objects/Products'
import ProductDetailsPage from '../page-objects/ProductDetails'

const productsPage = new ProductsPage()
const loginPage = new Login()
const cartPage = new Cart()
const productDetailsPage = new ProductDetailsPage()

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

        productsPage.goToSubCategory('Phones')

        //i could use a fixture to get all products names, so i wont hard code it
        productsPage.goToProductDetail('Samsung galaxy s6')

        productDetailsPage.addToCart()

        productDetailsPage.assertProductAddedToCart()

        cy.visit("")

        productsPage.goToSubCategory('Phones')

        productsPage.goToProductDetail('Nokia lumia 1520')

        productDetailsPage.addToCart()

        productDetailsPage.assertProductAddedToCart()

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