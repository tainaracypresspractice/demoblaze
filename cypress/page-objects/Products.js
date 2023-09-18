export default class Products {


    goToSubCategory (subcategory){
        cy.get('.list-group') // Locate the parent element with class "list-group"
            .find(`a.list-group-item:contains(${subcategory})`) // Find the anchor element containing the specified subcategory text
            .should('have.attr', 'id', 'itemc'); // Ensure it has the ID "itemc"}
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
            titles.push(...getTitles()) // Recursively fetch titles from next page
          }
        })
      
        return titles
    }
    
}