

Feature: End to end Ecommerce validation

    applicatuon Regression

    Scenario: Opening a network page
    Given I open ECommerce Page 
    When I add item to card
    And Validate the total prices
    Then select the country and SubmitEvent and verify Thank you
   
 
    