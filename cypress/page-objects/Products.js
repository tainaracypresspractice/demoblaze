export default class Products {


    goToSubCategory (subcategory){
        cy.get('.list-group')
            .find(`a.list-group-item:contains(${subcategory})`) 
            .should('have.attr', 'id', 'itemc');
    }

    goToCategories (){
        cy.get('a#cat').contains('CATEGORIES').click()
    }

    goToProductDetail(productName){
        cy.contains('a', productName).click();
    }

    getTitles() {
        const titles = []
    
        cy.get('a.hrefch').each(($title) => {
          titles.push($title.text())
        })
      
        cy.get('body').then(($body) => {
          const isNextButtonVisible = $body.find('button#next2').is(':visible');
          if (isNextButtonVisible) {
            cy.get('button#next2').click()
            cy.wait(1000) // Wait should be avoided but in this case it was the simpler solution
            titles.push(...this.getTitles()) // Recursively fetch titles from next page
          }
        })
      
        return titles
    }
    
}