/// <reference types="cypress" />

const { onDatePickerPage } = require("../support/page_objects/datepickerPage");
const {
  onFormLayoutsPage,
} = require("../support/page_objects/formLayoutsPage");
const { navigateTo } = require("../support/page_objects/navigationPage");
const { onSmartTablePage } = require("../support/page_objects/smartTablePage");

describe("Test with Page Object", () => {
  beforeEach("open application", () => {
    cy.openHomePage();
    cy.viewport(1920, 1080);
  });

  it("verify navigation across the pages", () => {
    navigateTo.formLayoutsPage();
    navigateTo.datepickerPage();
    navigateTo.tosterPage();
    navigateTo.smartTablePage();
    navigateTo.tooltipPage();
  });

  it("should submit Inline and Basic form and select tomorrow date in the calandar", () => {
    navigateTo.formLayoutsPage();
    onFormLayoutsPage.submitInlineFormWithNameAndEmail(
      "Svetlana",
      "test@test.com"
    );
    onFormLayoutsPage.submitBasicFormWithEmailAndPasswod(
      "test@test.com",
      "password"
    );
    navigateTo.datepickerPage();
    onDatePickerPage.selectCommonDatepickerDateFromToday(1);
    onDatePickerPage.selectCommonDatepickerDateWithRange(7, 14);
    navigateTo.smartTablePage();
    onSmartTablePage.addNewRecordWithFirstAndLastName(
      "Svetlana",
      "Levkovskaya"
    );
    onSmartTablePage.updateAgeByFirstName("Svetlana", "42");
    onSmartTablePage.deleteRowByIndex(1);
  });
});
