/// <reference types="cypress" />

describe('Login', function(){
    const username = 'fabrique'
    const password = 'fabrique'
    beforeEach(() => {
        cy.viewport(1920,1080)
    })

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


    it('Iphone-se2', () => {
        cy.viewport('iphone-se2')

        }) 

    it('Side__menu', () => {
        //cy.viewport(1920, 1080)
        cy.contains('Контрагенты').should('be.visible').click()
        cy.wait(500)
        cy.contains('Счета').should('be.visible').click()
        cy.wait(500)
        cy.contains('Статьи расходов').should('be.visible').click()
        cy.wait(500)
        cy.contains('Юр. лица').should('be.visible').click()
        cy.wait(500)
        cy.contains('Пользователи').should('be.visible').click()
        cy.contains('breadcrumb')
        })  


    })
    
