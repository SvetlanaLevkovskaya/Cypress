/// <reference types="cypress" />

const exp = require("constants");

describe("Our first suit", () => {
  it("first test", () => {
    cy.visit("/");
    cy.viewport(1920, 1080);
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    // by Tag name
    cy.get("input");

    // by ID name
    cy.get("#inputEmail1");

    // by Class name
    cy.get(".input-full-width");

    // by Attribute name
    cy.get("[placeholder]");

    // by Attribute name and value
    cy.get('[placeholder="Email"]');

    // by Class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]');

    // by Tag name and Attribute  with value
    cy.get('input[placeholder="Email"]');

    // by two or three different Attributes
    cy.get('[placeholder="Email"][fullwidth][type="email"]');

    // by tag name, Attribute with value, ID and Class name
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width');

    //the most recomended way by Cypress
    //cy.get('[data-cy="inputEmail1"]')
  });

  it("second test", () => {
    cy.visit("/");
    cy.viewport(1920, 1080);
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.get('[data_cy="signInButton"]');
    cy.contains("Sign in");
    cy.contains('[status="warning"]', "Sign in");
    cy.contains("Horizontal form");
    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")
      .parents("form")
      .find("nb-checkbox")
      .click();

    cy.contains("nb-card", "Horizontal form").find('[type="email"]');
  });

  it("then and wrap method", () => {
    cy.visit("/");
    cy.viewport(1920, 1080);
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    /*  cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
        cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')   //should method - assertion from Cypress!!!

        //selenium
        const firsForm = cy.contains('nb-card', 'Using the Grid')
        const secondForm = cy.contains('nb-card', 'Basic form')

        firstForm.find('[for="inputEmail1"]').should('contain', 'Email')
        firstForm.find('[for="inputPassword2"]').should('contain', 'Password')
        secondForm.find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        secondForm.find('[for="exampleInputPassword1"]').should('contain', 'Password') */

    //cypress style

    cy.contains("nb-card", "Using the Grid").then((firstForm) => {                 // JQuery format!!!!!
      const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text();
      const passwordLabelFirst = firstForm
        .find('[for="inputPassword2"]')
        .text();
      expect(emailLabelFirst).to.equal("Email");                                   //expect method - assertion from Chai!!!            
      expect(passwordLabelFirst).to.equal("Password");

      cy.contains("nb-card", "Basic form").then((secondForm) => {
        const emailLabelSecond = secondForm
          .find('[for="exampleInputEmail1"]')
          .text();
        const passswordLabelSecond = secondForm
          .find('[for="exampleInputPassword1"]')
          .text();
        expect(emailLabelSecond).to.equal("Email address");
        expect(passwordLabelFirst).to.equal(passswordLabelSecond);                // password fornm 1 form = password from 2 form

        cy.wrap(secondForm)                                                       // cy.wrap method - switch from JQuery to Cypress
          .find('[for="exampleInputPassword1"]')
          .should("contain", "Password");
      });
    });
  });

  it("invoke command", () => {
    cy.visit("/");
    cy.viewport(1920, 1080);
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    // 1.
    cy.get('[for="exampleInputEmail1"]')
      .should("contain", "Email address")
      .should("have.class", "label")
      .and("have.text", "Email address");

    // 2.
    cy.get('[for="exampleInputEmail1"]').then((label) => {
      expect(label.text()).to.equal("Email address");
      expect(label).to.have.class("label");
      expect(label).to.have.text("Email address");
    });

    // 3.
    cy.get('[for="exampleInputEmail1"]')
      .invoke("text")
      .then((text) => {
        expect(text).to.equal("Email address");
      });

    cy.contains("nb-card", "Basic form")
      .find("nb-checkbox")
      .click()
      .find(".custom-checkbox")
      .invoke("attr", "class")
      //.should('contain', 'checked')
      .then((classValue) => {
        expect(classValue).to.contain("checked");
      });
  });

  it("raddio-button", () => {
    cy.visit("/");
    cy.viewport(1920, 1080);
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.contains("nb-card", "Using the Grid")
      .find('[type="radio"]')
      .then((radioButton) => {
        cy.wrap(radioButton)
          .first()
          .check({ force: true })
          .should("be.checked");

        cy.wrap(radioButton)
          .eq(1)
          .check({ force: true });

        cy.wrap(radioButton)
          .first()
          .should("not.be.checked");

        cy.wrap(radioButton)
          .eq(2)
          .should("be.disabled");
      });
  });

  it("check-boxes", () => {
    cy.visit("/");
    cy.viewport(1920, 1080);
    cy.contains("Modal & Overlays").click();
    cy.contains("Toastr").click();

    //cy.get('[type="checkbox"]').check({force: true})
    cy.get('[type="checkbox"]').eq(0).click({ force: true });
    cy.get('[type="checkbox"]').eq(2).click({ force: true });
    cy.get('[type="checkbox"]').eq(0).check({ force: true });
    cy.get('[type="checkbox"]').eq(1).check({ force: true });
    cy.get('[type="checkbox"]').eq(2).check({ force: true });
  });

  it("list and drop downs", () => {
    cy.visit("/");
    cy.viewport(1920, 1080);

    // 1.
    /*         cy.get('nav nb-select').click()
        cy.get('.option-list').contains('Dark').click()
        cy.get('nav nb-select').should('contain', 'Dark')
        cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)') */

    // 3.

    cy.get("nav nb-select").then((dropdown) => {
      cy.wrap(dropdown).click();

      const colors = {
        Light: "rgb(255, 255, 255)",
        Dark: "rgb(34, 43, 69)",
        Cosmic: "rgb(50, 50, 89)",
        Corporate: "rgb(255, 255, 255)",
      };

      cy.get(".options-list nb-option").each((listItem, index, list) => {
        const itemText = listItem.text().trim();
        cy.wrap(listItem).click();
        cy.wrap(dropdown).should("contain", itemText);
        cy.get("nb-layout-header nav").should(
          "have.css",
          "background-color",
          colors[itemText]
        );
        if (index !== list.length - 1) {
          cy.wrap(dropdown).click();
        }
      });
    });
  });

  it("web tables", () => {
    cy.visit("/");
    cy.viewport(1920, 1080);
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();

    // 1.

    cy.get("tbody")
      .contains("tr", "Larry")
      .then((tableRow) => {
        cy.wrap(tableRow).find(".nb-edit").click();
        cy.wrap(tableRow).find('[placeholder="Age"]').clear().type("25");
        cy.wrap(tableRow).find(".nb-checkmark").click();
        cy.wrap(tableRow).find("td").eq(6).should("contain", "25");
      });

    // 2.

    cy.get("thead").find(".nb-plus").click();
    cy.get("thead")
      .find("tr")
      .eq(2)
      .then((tableRow) => {
        cy.wrap(tableRow).find('[placeholder="First Name"]').type("Svetlana");
        cy.wrap(tableRow).find('[placeholder="Last Name"]').type("Levkovskaya");
        cy.wrap(tableRow).find(".nb-checkmark").click();
      });

    cy.get("tbody tr")
      .first()
      .find("td")
      .then((tableColumns) => {
        cy.wrap(tableColumns).eq(2).should("contain", "Svetlana");
        cy.wrap(tableColumns).eq(3).should("contain", "Levkovskaya");
      });

    // 3.
    const age = [20, 30, 40, 200];

    cy.wrap(age).each((age) => {
      cy.get('thead [placeholder="Age"]').clear().type(age);
      cy.wait(500);
      cy.get("tbody tr").each((tableRow) => {
        if (age == 200) {
          cy.wrap(tableRow).should("contain", "No data found");
        } else {
          cy.wrap(tableRow).find("td").eq(6).should("contain", age);
        }
      });
    });
  });

  it("assert property", () => {
    function selectDayFromCurrent(day) {
      let date = new Date();
      date.setDate(date.getDate() + day);
      let futureDay = date.getDate();
      //let futureMonth = date.toLocaleDateString('default', {month: 'short'})
      let futureMonth = date.toLocaleDateString("en-US", { month: "short" });
      let dataAssert =
        futureMonth + " " + futureDay + ", " + date.getFullYear();
      cy.get("nb-calendar-navigation")
        .invoke("attr", "ng-reflect-date")
        .then((dateAttribute) => {
          if (!dateAttribute.includes(futureMonth)) {
            cy.get('[data-name="chevron-right"]').click();
            //cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()
            selectDayFromCurrent(day);
          } else {
            cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]')
              .contains(futureDay)
              .click();
          }
        });
      //cy.log(futureMonth)
      //console.log(futureMonth)
      return dataAssert;
    }

    cy.visit("/");
    cy.viewport(1920, 1080);
    cy.contains("Forms").click();
    cy.contains("Datepicker").click();

    cy.contains("nb-card", "Common Datepicker")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();
        let dataAssert = selectDayFromCurrent(35);
        cy.wrap(input).invoke("prop", "value").should("contain", dataAssert);
        cy.wrap(input).should("have.value", dataAssert);

        //cy.log(futureMonth)
        //console.log(futureMonth)
        //cy.log(futureDay)
        //console.log(futureDay)
        //cy.get('nb-calendar-day-picker').contains('13').click()
        //cy.wrap(input).invoke('prop', 'value').should('contain', 'Jan 13, 2022')
      });
  });

  it("tooltip", () => {
    cy.visit("/");
    cy.viewport(1920, 1080);
    cy.contains("Modal & Overlays").click();
    cy.contains("Tooltip").click();

    cy.contains("nb-card", "Colored Tooltips")
      .contains("Default")
      .trigger("mouseenter");
    cy.get("nb-tooltip").should("contain", "This is a tooltip");

    //cy.contains('nb-card' , 'Colored Tooltips').contains('Primary').click()
  });

  it("dialog box", () => {
    cy.visit("/");
    cy.viewport(1920, 1080);
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();

    // 1.

    //cy.get('tbody tr').first().find('.nb-trash').click()
    //cy.on('window:confirm', (confirm) =>{
    //expect(confirm).to.equal('Are you sure you want to delete?')
    //})

    // 2.
    /*         const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').first().find('.nb-trash').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        }) */

    // 3.
    cy.get("tbody tr").first().find(".nb-trash").click();
    cy.on("window:confirm", () => false);
  });

  it("datepicker", () => {
    cy.visit("/");
    cy.viewport(1920, 1080);
    cy.contains("Form").click();
    cy.contains("Datepicker").click();

    cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
      cy.wrap(input).click()
      cy.get('nb-calendar-day-picker').contains('25').click()
      cy.wrap(input).invoke('prop', 'value').should('contain', 'Mar 25, 2022')
    });

  });
});
