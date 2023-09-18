import { faker } from '@faker-js/faker';

export default class Cart {

    goToCart(){
        cy.visit('cart.html')
    }

    // At this method, could be interesting to put a parameter where we specify which item to delete
    // but I chose to keep it simple
    deleteItem(){
        cy.contains('a', 'Delete', { timeout: 10000 }).click()
    }

    placeOrder(){
        cy.get('button').contains('Place Order').click()
    }

    fillPlaceOrderForm(){

        const orderInformations = {
            fullName: faker.person.fullName(),
            country: faker.location.country(),
            city: faker.location.city(),
            creditCardNumber: faker.finance.creditCardNumber(),
            month: faker.date.month(),
            year: "2050"
        }
        
        cy.get('input#name', { timeout: 10000 }).type(orderInformations.fullName)
        cy.get('input#country').clear().type(orderInformations.country)
        cy.get('input#city').clear().type(orderInformations.city)
        cy.get('input#card').clear().type(orderInformations.creditCardNumber)
        cy.get('input#month').clear().type(orderInformations.month)
        cy.get('input#year').clear().type(orderInformations.year)
        cy.get('button').contains('Purchase').click()

        return orderInformations
        
    }

}