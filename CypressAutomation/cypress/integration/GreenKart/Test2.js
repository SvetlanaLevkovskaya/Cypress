/// <reference types="cypress" />

describe('My First Test Suit', () => {

    it('My Second Test', () => {
        cy.visit(Cypress.env('url') + '/seleniumPractise/#/')
        //cy.visit(Cypress.env('url'))

        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productLocator')


        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        })

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get(':nth-child(14)').click()

    })
})