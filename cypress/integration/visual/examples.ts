import { UNI_CONSENT_COOKIE, CONSENTMGR, CONSENTMGR_v } from "../../fixtures/cookies"

it("Lazy loading", () => {
  // https://docs.cypress.io/api/commands/scrollto#Syntax
  cy.visitWithCookies("https://www.unilever.com/", [UNI_CONSENT_COOKIE])
    .scrollTo("bottom", {duration: 1000});
  cy.percySnapshot();
});

it("Region ignoring", () => {
  // https://docs.percy.io/docs/percy-specific-css#snapshot-options--sdk-options
  cy.visitWithCookies("https://www.unilever.com/", [UNI_CONSENT_COOKIE])
    .scrollTo("bottom", {
      duration: 1000
    });
  cy.percySnapshot("Region ignoring", {
    percyCSS: ".video-hero { display: none; }"
  });
});

it("Element screenshot", () => {
  // https://docs.percy.io/docs/percy-specific-css#snapshot-options--sdk-options
  cy.visitWithCookies("https://comparethemarket.com", [CONSENTMGR_v, CONSENTMGR])
  cy.get("#content").invoke("hide");
  cy.get(".gbl-ftr").invoke("hide");
  cy.percySnapshot();
});