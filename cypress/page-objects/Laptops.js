export default class Laptops {

    laptopsTitles = []

    getLaptopsTitles(){
        cy.get('a.hrefch').each(($title) => {
            this.laptopsTitles.push($title.text())
        })
    
        cy.get('body').then(($body) => {
            const isNextButtonVisible = $body.find('button#next2').is(':visible')
            if (isNextButtonVisible) {
                cy.get('button#next2').click()
                cy.wait(1000) //wait should be avoided but in this case it was the simpler solution
                this.getLaptopsTitles()
            }
        })
        
        return this.laptopsTitles
    }

    goToLaptopDetail(productName){
        cy.contains('a', productName).click();
    }
}