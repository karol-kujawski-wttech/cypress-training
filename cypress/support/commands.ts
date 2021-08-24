declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            /**
             * Yields window with opened url with given cookies
             *
             * @param url url to site to open
             * @param cookies list of cookies to add
             * @returns Window
             * @memberof Chainable
             * @example
             *    cy.visitWithCookies("www.comparethemarket.com", [COOKIE_1, COOKIE_2])
             */
            visitWithCookies(pagePath: string, cookies: Array<Cypress.Cookie>): Chainable<Window>;
        }
  }
}

Cypress.Commands.add("visitWithCookies", (pagePath: string, cookies: Array<Cypress.Cookie>) => {
    cookies.forEach(cookie => {
        cy.setCookie(cookie.name, cookie.value)    
    });
    cy.visit(pagePath);
});

export {};
