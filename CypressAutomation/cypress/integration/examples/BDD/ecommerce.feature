

Feature: End to end Ecommerce validation

    applicatuon Regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open ECommerce Page 
    When I add item to card
    And Validate the total prices
    Then select the country and SubmitEvent and verify Thank you

    @Smoke
    Scenario: Filling the form to shop
    Given I open ECommerce Page 
    When I fill the form details
    |name | gender|
    |bob  | Male  |
    Then Validate the form behaviour
    And Select the form Page


 
   
 
    