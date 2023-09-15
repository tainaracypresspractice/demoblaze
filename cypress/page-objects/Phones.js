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
}