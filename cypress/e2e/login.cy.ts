describe("login form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("does NOT allow an invalid email address or short password length", () => {
    // Access environment variables
    const email = "walber.melogmail.com";
    const password = "dfdf4";

    // Enter credentials
    cy.getByData("email-input").type(email);
    cy.getByData("email-input-error").should("exist");

    cy.getByData("password-input").type(password);
    cy.getByData("password-input-error").should("exist");
  });
  it("does NOT allow an invalid credentials", () => {
    // Access environment variables
    const email = Cypress.env("email");
    const password = "dfdf4dgdgd";

    // Enter credentials
    cy.getByData("email-input").type(email);
    cy.getByData("password-input").type(password);

    // Submit the form
    cy.getByData("submit-button").click();
    cy.getByData("error-credentials").should("exist");
  });
  it("allow the user login to the dashboard", () => {
    // Access environment variables
    const email = Cypress.env("email");
    const password = Cypress.env("password");

    // Make sure the values are defined
    if (typeof email === "undefined" || typeof password === "undefined") {
      throw new Error(
        "Environment variables for email or password are undefined"
      );
    }

    // Enter credentials
    cy.getByData("email-input").type(email);
    cy.getByData("password-input").type(password);

    // Submit the form
    cy.getByData("submit-button").click();
    cy.location("pathname").should("eq", "/dashboard");
  });
});
