describe("Index", () => {
  before(() => {
    cy.intercept("https://opentdb.com/*", require("../fixtures/questions")).as(
      "triviaQuestionsBody"
    );

    cy.visit("./index.html");
  });

  it("loads ten trivia questions when form is submitted", () => {
    cy.get("form button").click();
    cy.wait("@triviaQuestionsBody");
    cy.get(".card").should("have.length", 10);
  });

  it("expands a card when clicked", () => {
    cy.get(".card").first().not("contain.text", "Central Processing Unit");
    cy.get(".card button").first().click();
    cy.get(".card").first().should("contain.text", "Central Processing Unit");
  });
});
