/// <reference types="cypress" />



describe('My Second Test Suit', () => {

    it('Checkboxes, Radiobuttons', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.viewport(900, 660)

        // checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])


        // static dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        //dynamic dropdown
        cy.get('#autocomplete').type('ind')
        

        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() == "India"){
                cy.wrap($el).click()
            }
        })

        cy.get('#autocomplete').should('have.value', 'India')

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // radiobuttons
        cy.get('[for="radio1"] > .radioButton').check().should('be.checked')
        cy.get('[value="radio2"]').check().should('be.checked')
        cy.get('[value="radio1"]').should('not.be.checked')
        cy.get('[value="radio3"]').should('not.be.checked')

    })

    it('Alerts, Pop ups', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.viewport(900, 660)

        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        // window:alert
        cy.on('window:alert', (str) => {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        // window:confirm
        cy.on('window:confirm', (str) => {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })       
    })

    it('Child tab', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.viewport(900, 660)

        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://www.rahulshettyacademy.com/#/index')
        cy.go('back')
        cy.url().should('eq', 'https://rahulshettyacademy.com/AutomationPractice/')
    })


    it('Web tables', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.viewport(900, 660)

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {                    // jquery object
            const text = $el.text()
            if (text.includes('Python')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then((price) => {       // siblings
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })                         
            }
            

        })

        
    })


    it('Web tables', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.viewport(900, 660)

        //cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('eq', 'https://rahulshettyacademy.com/AutomationPractice/#top')
      
    })

    it.only('Child windows', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.viewport(900, 660)

        // 1 - the same domain
        cy.get('#opentab').then((el) => {
            const url = el.prop('href')
            cy.log(url)
            cy.visit(url)
        })

        // 2 - for different domains use remove target


      
    })


})