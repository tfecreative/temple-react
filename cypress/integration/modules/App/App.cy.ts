describe("App", () => {
  it("Loads", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("temple");
  });
});

export {};
