/// <reference types="cypress" />

describe('JWT Session', () => {
    it('is logged in through local storage', () => {
        cy.LoginAPI().then(function(){
            cy.visit('https://rahulshettyacademy.com/client', {
                onBeforeLoad : function(window){
                    window.localStorage.setItem("token", Cypress.env('token'))
                }
            })
        })

        cy.get(".card-body button:last-of-type").eq(1).click()
        cy.get("[routerlink*='cart']").click()
        cy.contains("Checkout").click()
        cy.get("[placeholder*='Country']").type("Bel")

/*         cy.get('div[class="form-group"]').each(($e1, index, $list) => {
            if($e1.text() === "Belarus") {
                cy.wrap($e1).invoke('Belarus').trigger('click')
            }
        }) */

        cy.get('div[class="form-group"]').find('button')
/*         cy.get(".action__submit").click()
        cy.wait(2000)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
            });
        cy.get('.btnn').click()  */
        
      })

    })