/// <reference types="cypress" />

describe('My Sixth Test Suit', () => {
    it('Mock HTTP Response', () => {
        //cy.intercept({requestobject}, {responseobject})

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        cy.intercept("GET", "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty", 
        (req) => {
            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=xfhh"
            req.continue((res) =>{
                expect(res.statusCode).to.equal(200)

            })
        }).as("dummyurl")
        
         
        cy.get('button[class="btn btn-primary"]').click()

        cy.wait("@dummyurl")

        
      })

    })