/// <reference types='Cypress' />
import {CONSENTMGR, CONSENTMGR_v} from "../../fixtures/cookies"

describe("Analytics - events tracking", () => {
    const EXPECTED_PROPERTIES = {
        event_action: "onClick",
        event_category: "EnergyComparison_Energy_FAQBlock",
        event_label:
            "EnergyComparison_Energy_FAQBlock_WhoIsTheCheapestEnergySupplier",
    };

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

    it("Event on link click", () => {
        cy.visitWithCookies("https://www.comparethemarket.com/energy/", [
            CONSENTMGR,
            CONSENTMGR_v,
        ]);
        cy.window().then((win) => {
            cy.spy(win.utag, "link").as("linkSpy");
        });
        cy.get(
            "#EnergyComparison_Energy_FAQBlock_WhoIsTheCheapestEnergySupplier"
        ).click();
        cy.get("@linkSpy").should("be.calledOnce");
        cy.window().then((win) => {
            cy.get("@linkSpy").should((spy) => {
                expect(spy).to.be.calledWith(win.utag_data);
            });
        });
        cy.window().then((win) => {
            cy.wrap(win)
                .its("utag_data")
                .then((utag_data) => {
                    expect(utag_data)
                        .to.be.an("object")
                        .that.include(EXPECTED_PROPERTIES);
                });
        });
    });
});
