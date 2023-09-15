export default class Phones {

    goToPhones (){
        cy.get('#itemc').contains('Phones').click()
    }

    goToPhoneDetail(phoneName){
        cy.contains('a', phoneName).click();
    }

    addToCart(){
        cy.contains('a', 'Add to cart').click();
    }

    assertProductAddedToCart() {
        
        cy.getAlert()

        const alertMessage = /Product added|Product added.\./

        cy.get('@windowAlert').should('be.calledWith', Cypress.sinon.match(alertMessage))
    }
}