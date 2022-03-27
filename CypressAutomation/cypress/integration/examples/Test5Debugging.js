/// <reference types="cypress" />



describe('My Forth Test Suit', () => {

    before(() => {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then( function (data) {
            this.data=data
        })
      })

    it('Debugging', function () {
        cy.visit(Cypress.env('url') + '/angularpractice/')
        

        // 1 
        //cy.get(':nth-child(1) > .form-control').type(this.data.name)
        //cy.get('#exampleFormControlSelect1').select(this.data.gender)

        // 2
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)       
        cy.get('select').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', "minlength", "2")
        cy.get('#inlineRadio3').should('be.disabled') 

        //cy.pause()
        cy.get(':nth-child(2) > .nav-link').click().debug()

        //1.
        /* cy.get('h4.card-title').each(($el, index, $list) => {                    // jquery object
            const text = $el.text()
            if (text.includes('Blackberry')) {
                cy.get('button.btn-info').eq(index).click()
            }
            
        }) */

        //2.
        //cy.selectProduct('Blackberry')
        //cy.selectProduct('Nokia Edge')

        //3.
        //this.data.productName
        this.data.productName.forEach(element => cy.selectProduct(element));

    })

})