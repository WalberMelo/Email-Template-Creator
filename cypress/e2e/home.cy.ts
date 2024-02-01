describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Display login form", () => {
    cy.getByData("logo").should("be.visible");
    cy.getByData("login-form").should("be.visible");
  });
});
