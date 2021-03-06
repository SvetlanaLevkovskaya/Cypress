/// <reference types="cypress" />

describe('My First Test Suit', () => {
    it('My First Test', () => {
        cy.visit(Cypress.env('url') + '/seleniumPractise/#/')
        // cypress get acts like findElement of Selenium
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        // parent child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
        cy.log('sf')
        console.log('sf') // browser log


        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                //$el.find('button').trigger("click")
                cy.wrap($el).find('button').click()
            }

        /* const logo = cy.get('.brand')
        cy.log(logo.text()) */
        
        // assert if logo text is corretly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        // this is to print logs
        cy.get('.brand').then((logoelement) => {
            cy.log(logoelement.text())
            console.log('sf in then()')

        })

      })

    })
})