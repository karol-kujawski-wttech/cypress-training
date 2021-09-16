import { UNI_CONSENT_COOKIE } from "../../fixtures/cookies"

it("Lazy loading", () => {
    cy.visitWithCookies("https://www.unilever.com/", [UNI_CONSENT_COOKIE])
      .scrollTo("bottom", {duration: 1000});
    cy.percySnapshot();
});
