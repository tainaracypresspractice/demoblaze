import cypressConfig from "../../cypress.config";

export default class Phones {

    goToPhones (){
        cy.get('#itemc').contains('Phones').click()
    }

    goToPhoneDetail(phoneName){
        cy.contains('a', phoneName).click();
    }
}