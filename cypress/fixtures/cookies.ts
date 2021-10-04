export const CONSENTMGR : Cypress.Cookie = {
    name: "CONSENTMGR",
    value: "consent:true%7Cts:1610719841554",
    path: "/",
    domain: ".comparethemarket.com",
    httpOnly: false,
    secure: false
}

export const CONSENTMGR_v : Cypress.Cookie = {
    name: "CONSENTMGR_v",
    value: "1.0.1",
    path: "/",
    domain: ".comparethemarket.com",
    httpOnly: false,
    secure: false
}

export const UNI_CONSENT_COOKIE : Cypress.Cookie = {
    name: "OptanonAlertBoxClosed",
    value: "2021-09-16T12:48:22.814Z",
    path: "/",
    domain: "www.unilever.com",
    httpOnly: false,
    secure: false
}

export const OLX_CONSENT_COOKIE : Cypress.Cookie = {
    name: "OptanonAlertBoxClosed",
    value: "2021-10-04T12:41:29.952Z",
    expiry: 1635724799,
    path: "/",
    domain: ".olx.pl",
    httpOnly: false,
    secure: false,
    sameSite: 'lax'
}
