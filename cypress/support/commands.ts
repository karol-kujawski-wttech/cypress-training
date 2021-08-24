declare namespace Cypress {
    interface Chainable {
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
        /**
         * Checks if given spy was called with window.utag_data object
         *
         * @param  spyName name of spy
         * 
         */
        spyIsCalledWithUtagData(spy: string): void;
    }
}

Cypress.Commands.add("visitWithCookies", (pagePath: string, cookies: Array<Cypress.Cookie>) => {
    cookies.forEach(cookie => {
        cy.setCookie(cookie.name, cookie.value)    
    });
    cy.visit(pagePath);
});

Cypress.Commands.add("spyIsCalledWithUtagData", (spyName) => {
    cy.window().then((win) => {
        cy.get(spyName).should((spy) => {
            // @ts-expect-error
            expect(spy).to.be.calledWith(win.utag_data);
        });
    });
});
