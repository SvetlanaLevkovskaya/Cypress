/// <reference types="cypress" />

describe('My Sixth Test Suit', () => {
    it('Mock HTTP Response', () => {
        //cy.intercept({requestobject}, {responseobject})

        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {

            "name":"Learn Appium Automation with Java",
            "isbn":"bcdqqq",
            "aisle":"227555",
            "author":"John foe"
            }).then(function(response){
                expect(response.body).to.have.property("Msg", "successfully added")
                expect(response.status).to.eq(200)

            })
                  

        
      })

    })