/// <reference types="cypress" />
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'

describe('My Fifth Test Suit', () => {

    before(() => {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then( function (data) {
            this.data=data
        })
      })

    it('PageObject', function () {
        const homePage = new HomePage()
        const productPage = new ProductPage()

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.viewport(1200, 660)


        homePage.getEditBox().type(this.data.name)       
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', "minlength", "2")
        homePage.getEnterpreneaur().should('be.disabled') 
        homePage.getShopTab().click()



        //3.
        //this.data.productName
        this.data.productName.forEach(element => cy.selectProduct(element));
        productPage.checkout().click()



    })

})