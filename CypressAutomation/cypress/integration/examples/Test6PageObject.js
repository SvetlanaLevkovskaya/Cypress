/// <reference types="cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'

describe('My Fifth Test Suit', () => {

    before(() => {
        cy.fixture('example').then( function (data) {
            this.data=data
        })
      })

    it('PageObject', function () {
        //Cypress.config('defaultCommandTimeout', 10000)
        const homePage = new HomePage()
        const productPage = new ProductPage()

        cy.visit(Cypress.env('url') + '/angularpractice/')
        

        homePage.getEditBox().type(this.data.name)       
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', "minlength", "2")
        homePage.getEnterpreneaur().should('be.disabled') 

        //Cypress.config('defaultCommandTimeout', 10000)
        homePage.getShopTab().click()



        //3.
        //this.data.productName
        this.data.productName.forEach(element => cy.selectProduct(element));

        productPage.checkoutButton().click()
        var sum = 0

        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            //cy.log($el.text())
            const amount = $el.text()
            var result = amount.split(" ")
            result = result[1].trim()
            cy.log('result = ', result)
            sum=Number(sum)+Number(result)
            cy.log(result)

        }).then(function(){
            cy.log(sum)
        })

        cy.get('h3 > strong').then(function(element){
           
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            cy.log('total = ', total)
            expect(Number(total)).to.equal(sum)
        })

        

        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        //cy.wait(2000)
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force:true})
        //cy.get('.checkbox > label').click()
        //cy.get('.ng-untouched > .btn').click()
        cy.get('input[type="submit"]').click()
        //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function(element) {
            const actualText = element.text()
            expect(actualText.includes('Success')).to.be.true
 
        })

    })

})