it("Loads the advil site and compare with baseline", () => {
    cy.visit("https://www.advil.com/");
    cy.percySnapshot();
});