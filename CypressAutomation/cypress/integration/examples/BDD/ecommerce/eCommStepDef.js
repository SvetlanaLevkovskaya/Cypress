/// <reference types="cypress" />
import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
const homePage = new HomePage()
const productPage = new ProductPage()

Given('I open ECommerce Page', () => {
    cy.visit(Cypress.env('url') + '/angularpractice/')

})

When('I add item to card', function () {
    homePage.getShopTab().click()
    this.data.productName.forEach(element => cy.selectProduct(element));
    productPage.checkoutButton().click()
})

And('Validate the total prices', function () {
    var sum = 0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        
        const amount = $el.text()
        var result = amount.split(" ")
        result = result[1].trim()
        cy.log('result = ', result)
        sum=Number(sum)+Number(result)
        cy.log(result)
    }).then(function(){
        cy.log(sum)
    })
})

Then('select the country and SubmitEvent and verify Thank you', () =>{
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force:true})
    cy.get('input[type="submit"]').click()
    cy.get('.alert').then(function(element) {
        const actualText = element.text()
        expect(actualText.includes('Success')).to.be.true
    })
})


