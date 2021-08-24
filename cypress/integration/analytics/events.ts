/// <reference types='Cypress' />
import {CONSENTMGR, CONSENTMGR_v} from "../../fixtures/cookies"

describe("Analytics - events tracking", () => {
    const EXPECTED_PROPERTIES = {
        event_action: "onClick",
        event_category: "EnergyComparison_Energy_FAQBlock",
        event_label:
            "EnergyComparison_Energy_FAQBlock_WhoIsTheCheapestEnergySupplier",
    };

    it("View event on page load", () => {
        cy.visit("https://www.comparethemarket.com/energy/");
        cy.window().then((win) => {
            // @ts-expect-error
            cy.spy(win.utag, "view").as("viewSpy");
        });
        cy.window().then((win) => {
            cy.get("@viewSpy").should((spy) => {
                // @ts-expect-error
                expect(spy).to.be.calledOnceWith(win.utag_data);
            });
        });
    });

    it("Link event on link click", () => {
        cy.visitWithCookies("https://www.comparethemarket.com/energy/", [
            CONSENTMGR,
            CONSENTMGR_v,
        ]);
        cy.window().then((win) => {
            // @ts-expect-error
            cy.spy(win.utag, "link").as("linkSpy");
        });
        cy.get(
            "#EnergyComparison_Energy_FAQBlock_WhoIsTheCheapestEnergySupplier"
        ).click();
        cy.window().then((win) => {
            cy.get("@linkSpy").should((spy) => {
                // @ts-expect-error
                expect(spy).to.be.calledOnceWith(win.utag_data);
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
