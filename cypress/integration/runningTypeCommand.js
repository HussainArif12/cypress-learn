describe("Goes to homepage", () => {
  it("Goes to the homepage", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });
  it("Input data", () => {
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
  });
  it("Submits", () => {
    cy.get("button[type='submit']").click();
  });
});
