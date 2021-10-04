import { UNI_CONSENT_COOKIE, CONSENTMGR, CONSENTMGR_v, OLX_CONSENT_COOKIE, TEMP } from "../../fixtures/cookies"

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
  // https://docs.percy.io/docs/percy-specific-css#percy-css-media-query
  // https://github.com/percy/percy-cypress/issues/56
  cy.visitWithCookies("https://comparethemarket.com", [CONSENTMGR_v, CONSENTMGR])
  cy.get("#content").invoke("hide");
  cy.get(".gbl-ftr").invoke("hide");
  cy.percySnapshot();
});

it("Search result tweak", () => {
  cy.visit("https://www.olx.pl/oferty/q-laptop/");
  cy.get("#onetrust-accept-btn-handler").click();

  cy.get("[data-cy='listing-ad-title']").each((title) => {
    cy.wrap(title).invoke("text", "It's article title for test purposes")
  });

  cy.get(".photo-cell img").each((image) => {
    cy.wrap(image).invoke("attr", "src", "https://www.wundermanthompson.com/img/wt-logo-seo-4x3.jpg")
  });

  cy.percySnapshot(
    "Serach result", {
      widths: [968, 1024]
    }
  )
});