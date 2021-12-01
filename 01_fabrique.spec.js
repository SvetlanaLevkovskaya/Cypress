/// <reference types="cypress" />

describe('Login', function(){
    const username = 'fabrique'
    const password = 'fabrique'

    it('loads the page using basic auth', () => {
        cy.visit('https://finance.dev.fabrique.studio/accounts/login/', {
        auth: {
            username,
            password,
        },
           
          })
        }) 
    
    it('Вход в систему', () => {
        cy.location('protocol').should('eq','https:')
        cy.get('input[type="email"]').type('admin@admin.ad')
        cy.get('input[type="password"]').type('admin')
        cy.get('button').contains('Далее').should('be.visible').click()
        cy.wait(500)
    
    })

})