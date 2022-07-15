import { UNI_CONSENT_COOKIE } from "../../fixtures/cookies"

it("Unilever", () => {
  cy.visitWithCookies("https://www.unilever.com/", [UNI_CONSENT_COOKIE])
  .scrollTo("bottom", {
      duration: 1000 
  });
  cy.percySnapshot("Lazy loading", {
      widths: [340, 1200]
  });
})


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

it("Percy CSS", () => {
  cy.visitWithCookies("https://www.unilever.com/", [UNI_CONSENT_COOKIE])
  .scrollTo("bottom", {
      duration: 2000 
  });
  cy.percySnapshot("Region ignoring", {
      percyCSS: ".share-price {display: none; }"
  });
})
