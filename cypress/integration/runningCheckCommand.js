describe("Checkbox commands", () => {
  it("Checks a checkbox", () => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");
    cy.get("#checkboxes > [type='checkbox']").check();
    cy.get("h3").should("have.text", "Checkboxes");
  });
  it("Unchecks them", () => {
    cy.wait(1000);
    cy.get("input:checked").uncheck();
  });
});
