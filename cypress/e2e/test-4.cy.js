import ProductsPage from '../page-objects/Products'

const productsPage = new ProductsPage()

describe('Categories', () => {
    it('Check if Categories list contains all products', () => {
        productsPage.goToCategories();

        const categoriesTitles = productsPage.getTitles()

        const subcategories = ['Phones', 'Laptops', 'Monitors'];

        subcategories.forEach((subcategory) => {
            productsPage.goToSubCategory(subcategory);
            const subcategoryTitles = productsPage.getTitles();

            subcategoryTitles.forEach((title) => {
                cy.wrap(categoriesTitles).should('include', title);
            });
        });
    });
});
