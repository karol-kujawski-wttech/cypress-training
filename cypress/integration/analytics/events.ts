/// <reference types='Cypress' />

describe("Analytics - events tracking", () => {
    it("Event on page load", () => {
        cy.visit("https://www.comparethemarket.com/energy/");
        cy.window().then((win) => {
            cy.spy(win.utag, "view").as("viewSpy");
        });
        cy.get("@viewSpy").should("be.calledOnce");
        cy.window().then((win) => {
            cy.get("@viewSpy").should((spy) => {
                expect(spy).to.be.calledWith(win.utag_data);
            });
        });
    });
});
