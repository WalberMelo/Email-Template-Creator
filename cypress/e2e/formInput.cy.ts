describe("dashboard", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    const email = Cypress.env("email");
    const password = Cypress.env("password");
    cy.getByData("email-input").type(email);
    cy.getByData("password-input").type(password);
    cy.getByData("submit-button").click();
    cy.location("pathname").should("eq", "/dashboard");
  });

  it("should required a valid email", () => {
    cy.getByData("form-input-email").type("walbermelohotmail.com");
    cy.getByData("submit-form--btn").click();

    cy.getByData("form-input-email").then(($input) => {
      // Use the DOM element's API to check validity and get validation message
      const el = $input[0] as HTMLInputElement;
      const isValid = el.checkValidity();
      const validationMessage = el.validationMessage;

      expect(isValid).to.be.false;
      expect(validationMessage).to.contain(
        "Please include an '@' in the email address"
      );
    });
  });
  it("should send a default subject message", () => {
    cy.getByData("form-input-email").type("walbermelo@hotmail.com");
    cy.getByData("form-input-subject").should(
      "have.value",
      "Tu Voz, Nuestra Inspiración: Gana con WeUp"
    );
    cy.getByData("submit-form--btn").click();
  });
  it("should require name", () => {
    cy.getByData("form-input-email").type("walbermelo@hotmail.com");
    cy.getByData("form-input-name");
    cy.getByData("submit-form--btn").click();

    cy.getByData("form-input-name").then(($input) => {
      // Use the DOM element's API to check validity and get validation message
      const el = $input[0] as HTMLInputElement;
      const isValid = el.checkValidity();
      const validationMessage = el.validationMessage;

      expect(isValid).to.be.false;
      expect(validationMessage).to.contain("Please fill in this field");
    });
  });
  it("should require a company name", () => {
    cy.getByData("form-input-email").type("walbermelo@hotmail.com");
    cy.getByData("form-input-name").type("Walber melo");
    cy.getByData("form-input-company");
    cy.getByData("submit-form--btn").click();

    cy.getByData("form-input-company").then(($input) => {
      // Use the DOM element's API to check validity and get validation message
      const el = $input[0] as HTMLInputElement;
      const isValid = el.checkValidity();
      const validationMessage = el.validationMessage;

      expect(isValid).to.be.false;
      expect(validationMessage).to.contain("Please fill in this field");
    });
  });
  it("should require a message", () => {
    cy.getByData("form-input-email").type("walbermelo@hotmail.com");
    cy.getByData("form-input-name").type("walber melo");
    cy.getByData("form-input-company").type("weup");
    cy.getByData("text-area-message");
    cy.getByData("submit-form--btn").click();

    cy.getByData("text-area-message").then(($input) => {
      // Use the DOM element's API to check validity and get validation message
      const el = $input[0] as HTMLInputElement;
      const isValid = el.checkValidity();
      const validationMessage = el.validationMessage;

      expect(isValid).to.be.false;
      expect(validationMessage).to.contain("Please fill in this field");
    });
  });
  it("should require a gift name", () => {
    cy.getByData("form-input-email").type("walbermelo@hotmail.com");
    cy.getByData("form-input-name").type("Walber melo");
    cy.getByData("form-input-company").type("weup");
    cy.getByData("text-area-message").type("great company");
    cy.getByData("form-input-gift");
    cy.getByData("submit-form--btn").click();

    cy.getByData("form-input-gift").then(($input) => {
      // Use the DOM element's API to check validity and get validation message
      const el = $input[0] as HTMLInputElement;
      const isValid = el.checkValidity();
      const validationMessage = el.validationMessage;

      expect(isValid).to.be.false;
      expect(validationMessage).to.contain("Please fill in this field");
    });
  });
  it("should require a date", () => {
    cy.getByData("form-input-email").type("walbermelo@hotmail.com");
    cy.getByData("form-input-name").type("Walber melo");
    cy.getByData("form-input-company").type("weup");
    cy.getByData("text-area-message").type("great company");
    cy.getByData("form-input-gift").type("mobile");
    cy.getByData("form-input-date");

    cy.getByData("submit-form--btn").click();

    cy.getByData("form-input-date").then(($input) => {
      // Use the DOM element's API to check validity and get validation message
      const el = $input[0] as HTMLInputElement;
      const isValid = el.checkValidity();
      const validationMessage = el.validationMessage;

      expect(isValid).to.be.false;
      expect(validationMessage).to.contain("Please fill in this field");
    });
  });
  it("should send a default link", () => {
    cy.getByData("form-input-email").type("walbermelo@hotmail.com");
    cy.getByData("form-input-name").type("Walber melo");
    cy.getByData("form-input-company").type("weup");
    cy.getByData("text-area-message").type("great company");
    cy.getByData("form-input-gift").type("mobile");
    cy.getByData("form-input-date").type("2024-01-01");
    cy.getByData("form-input-link").should(
      "have.value",
      "https://docs.google.com/forms/d/e/1FAIpQLSfYkd8mFEALIm2mjPYBIHEbd9rtp9OJ0_c992cRzjmkanlLpw/viewform"
    );
    cy.getByData("submit-form--btn").click();

    cy.getByData("form-input-date").then(($input) => {
      // Use the DOM element's API to check validity and get validation message
      const el = $input[0] as HTMLInputElement;
      const isValid = el.checkValidity();
      const validationMessage = el.validationMessage;

      expect(isValid).to.be.true;
    });
  });
});
