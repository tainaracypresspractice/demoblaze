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
    
}