/// <reference types="cypress" />

describe("JSON objects", () => {
  it("JSON objects", () => {
    cy.openHomePage();
    cy.viewport(1920, 1080);

    const simpleObject = { key: "value", key2: "value2" };

    const simpleArrayOfValues = ["one", "two", "three"];

    const arrayOfObjects = [
      { key: "value" },
      { key2: "value2" },
      { key3: "value3" },
    ];

    const typeOfData = { string: "this is a string", number: 10 };

    const mix = {
      FirstName: "Svetlana",
      LastName: "Levkovskaya",
      Age: 42,
      Students: [
        {
          firstName: "Sara",
          lastName: "Conor",
        },
        {
          firstName: "Bruce",
          lastNmae: "Willis",
        },
      ],
    };

    console.log(simpleObject.key2);
    console.log(simpleObject["key2"]);
    console.log(simpleArrayOfValues[1]);
    console.log(arrayOfObjects[2].key3);
    console.log(mix.Students[0].firstName);

    const lastNameOfSecondStudent = mix.Students[1].lastName;
  });
});
