import Login from '../page-objects/Login';
import Cart from '../page-objects/Cart';
import ProductsPage from '../page-objects/Products';
import ProductDetailsPage from '../page-objects/ProductDetails';

const productsPage = new ProductsPage();
const loginPage = new Login();
const cartPage = new Cart();
const productDetailsPage = new ProductDetailsPage();

const username = Cypress.env('username');
const password = Cypress.env('password');

describe('Place order validation', () => {
    it('Place order', () => {
        loginPage.login(username, password);

        cy.get('#nameofuser').should('contain', username);

        const productsNames = ['Samsung galaxy s6', 'Nokia lumia 1520']
        
        productsNames.forEach(productName => {
            productsPage.goToSubCategory('Phones');
            productsPage.goToProductDetail(productName);
            productDetailsPage.addToCart();
            productDetailsPage.assertProductAddedToCart();
            cy.visit('');
        });

        cartPage.goToCart();

        cy.intercept('POST', '/deleteitem').as('deleteRequest');

        cartPage.deleteItem();

        cy.wait('@deleteRequest').then(() => {
            cartPage.placeOrder();

            const orderInformations = cartPage.fillPlaceOrderForm();

            cy.get('p.lead.text-muted')
                .should('contain', 'Card Number: ' + orderInformations.creditCardNumber)
                .and('contain', orderInformations.fullName);
        });
    });
});
