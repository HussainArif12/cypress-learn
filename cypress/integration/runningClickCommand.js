describe("Goes to homepage", () => {
  it("Goes to the homepage", () => {
    cy.visit("https://the-internet.herokuapp.com/add_remove_elements/");
  });
  it("Clicks the Add Element Button", () => {
    for (var i = 0; i < 20; i++) {
      cy.get('button[onclick="addElement()"]').click();
    }
  });
  it("Performs some assertions", () => {
    cy.get(".added-manually").should("have.length", 1);
    cy.get("[onclick='addElement()']").should("have.text", "Add Element");
  });
  it("Deletes stuff", () => {
    cy.get(".added-manually").each(($el) => {
      cy.wrap($el).click();
    });
  });
});
