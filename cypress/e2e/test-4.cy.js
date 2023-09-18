import ProductsPage from '../page-objects/Products'
import CategoriesPage from '../page-objects/Categories'
import PhonesPage from '../page-objects/Phones'
import LaptopsPage from '../page-objects/Laptops'
import MonitorsPage from '../page-objects/Monitors'

const productsPage = new ProductsPage()
const categoriesPage = new CategoriesPage()
const phonesPage = new PhonesPage()
const laptopsPage = new LaptopsPage()
const monitorsPage = new MonitorsPage()


describe('Categories', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()

        cy.visit("")
    })

    it('Check if Categories list contains all products', () => {
        productsPage.goToCategories();

        // Get the categories titles
        const categoriesTitles = categoriesPage.getCategoriesTitles();

        // Get the phones titles
        productsPage.goToSubCategory('Phones')

        const phonesTitles = phonesPage.getPhonesTitles()

        // Check if all elements in phonesTitles exist in categoriesTitles using Cypress's expect assertion
        phonesTitles.forEach(phoneTitle => {
            cy.wrap(categoriesTitles).should('include', phoneTitle);
        })

        // Get the Laptops titles
        productsPage.goToSubCategory('Laptops')

        const laptopsTitles = laptopsPage.getLaptopsTitles()

        // Check if all elements in laptopsTitles exist in categoriesTitles using Cypress's expect assertion
        laptopsTitles.forEach(laptopTitle => {
            cy.wrap(categoriesTitles).should('include', laptopTitle)
        })

        // Get the Monitors titles
        productsPage.goToSubCategory('Monitors')

        const monitorsTitles = monitorsPage.getMonitorsTitles()

        // Check if all elements in monitorsTitles exist in categoriesTitles using Cypress's expect assertion
        monitorsTitles.forEach(monitorTitle => {
            cy.wrap(categoriesTitles).should('include', monitorTitle)
        })


  


        

        //entrar em cada Subcategory e ver se cada item está na lista de Categories
    });
});