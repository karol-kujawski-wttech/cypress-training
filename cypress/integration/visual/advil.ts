import { UNI_CONSENT_COOKIE } from "../../fixtures/cookies"

it("Lazy loading", () => {
    cy.visitWithCookies("https://www.unilever.com/", [UNI_CONSENT_COOKIE])
      .scrollTo("bottom", {duration: 1000});
    cy.percySnapshot();
});

it("Region ignoring", () => {
  // https://docs.percy.io/docs/percy-specific-css#snapshot-options--sdk-options
  cy.visit("https://www.unilever.com/");
  cy.percySnapshot();
  // cy.percySnapshot("Region ignoring", {
  //   percyCSS: "#onetrust-banner-sdk { display: none; }"
  // });
});