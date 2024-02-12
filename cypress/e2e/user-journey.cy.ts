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

  it("success submit the form and shows success message", () => {
    cy.getByData("form-input-email").type("walbermelo@hotmail.com");
    cy.getByData("form-input-subject").type("active voice");
    cy.getByData("form-input-name").type("Walber Melo");
    cy.getByData("form-input-company").type("weup");
    cy.getByData("text-area-message").type("grow potential of the company");
    cy.getByData("form-input-gift").type("bonus of 50$");
    cy.getByData("form-input-date").type("2024-01-01");
    cy.getByData("form-input-link").should(
      "have.value",
      "https://docs.google.com/forms/d/e/1FAIpQLSfYkd8mFEALIm2mjPYBIHEbd9rtp9OJ0_c992cRzjmkanlLpw/viewform"
    );
    cy.getByData("submit-form--btn").click();
    // Wait for the toast message to appear
    cy.contains(".Toastify__toast--success", "Email sent successfully!", {
      timeout: 10000,
    }).should("be.visible");
  });
});
