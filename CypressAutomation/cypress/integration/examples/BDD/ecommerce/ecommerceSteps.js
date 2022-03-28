/// <reference types="cypress" />
import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

const homePage = new HomePage()
const productPage = new ProductPage()
let name

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


// when I fill the form details
When('I fill the form details', function (dataTable) {
    // [[name, gender], [bob, male]]
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])       
    homePage.getGender().select(dataTable.rawTable[1][1])

})

// Then Validate the form behaviour
Then('Validate the form behaviour', function () {
    homePage.getTwoWayDataBinding().should('have.value', name)
    homePage.getEditBox().should('have.attr', "minlength", "2")
    homePage.getEnterpreneaur().should('be.disabled')
    Cypress.config('defaultCommandTimeout', 8000) 
    

})

// And select the form Page
And('Select the form Page', function () {
    homePage.getShopTab().click()

})
