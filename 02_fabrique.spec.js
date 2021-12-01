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
    
    it('Sign in', () => {
        cy.location('protocol').should('eq','https:')
        cy.get('input[type="email"]').type('admin@admin.ad')
        cy.get('input[type="password"]').type('admin')
        cy.get('button').contains('Далее').should('be.visible').click()
        cy.wait(500)
        
        })

    it('Добавить платёж', () => {
        cy.get('button').contains('Добавить платёж').should('be.visible').click()
        cy.wait(500)
        cy.url().should('include','/edit')
        cy.go('back')
        })
      
        //it('Заполнить платёж', () => {
        //cy.get('input').first().type('test')
    
        //})        

    })
    


//npx cypress-ntlm open
