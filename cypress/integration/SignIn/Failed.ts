describe("Sign In Form", () => {
  it("Displays error on failed sign in", () => {
    cy.server();
    cy.fixture("sign-in/failed.json").as("signInFailedJSON");
    cy.route({
      method: "POST",
      url: "/api/auth/sign-in",
      status: 500,
      response: "signInFailedJSON",
    });

    cy.visit("http://localhost:3000/sign-in");
    cy.get('input[data-cy="username"]').type("test");
    cy.get('input[data-cy="password"]').type("testpassword");
    cy.get("button[data-cy=signInSubmit]").click();
    cy.get("div.Toastify").should("have.text", "sign in failed!");
  });
});
