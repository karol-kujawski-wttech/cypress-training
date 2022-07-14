// eslint-disable-next-line import/extensions
const url = require('url');
describe('Auth flow', () => {
//   const environment = Cypress.env(Cypress.env('environment'));
//   const bffApiDomain = environment.bffApiURL;
//   const forgeRockDomain = environment.forgeRockURL;

//   const authHeader = (accessToken) => {
//     return {
//       authorization: 'Bearer ' + accessToken,
//     };
//   };
// ​
//   const assertStatusCode = (status, statusCode) => {
//     return expect(status).equal(statusCode);
//   };

  it('chain test', function() {
    cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts/1'
      })
      .as('responePost')
      .its('status').should('eq', 200)
    cy.then(() => {
        cy.request({
          url: `https://jsonplaceholder.typicode.com/users/${this.responePost.body.userId}`
        })
        .its('status').should('eq', 200);
      })
  })

  // xit('Verifies the authentication flow', () => {
  //   //authenticate
  //   cy.request({
  //     method: 'POST',
  //     url: forgeRockDomain + '/am/json/realms/root/realms/alpha/authenticate',
  //       })
  //     .its('status').should('eq', '200')
  //     .request({
  //       method: 'GET',
  //       url:
  //         forgeRockDomain +
  //         '/am/oauth2/realms/root/realms/alpha/authorize?client_id=a0c2e1e5-da9e-458a-a84f-18020483199d&redirect_uri=https%3A%2F%2Fprevious-investments.dev.aws.hl.co.uk%2FauthCallback&response_type=code&scope=test&state=NTYyMTc3Mzk5MTAyMTk4NjEyMTQ5MjAzMTM5MTE4MjAxMTkzMTQyMjUw&code_challenge=AR1JEVhHbt68ljDiQ8PMVYOplJSRAH6igLZemMCiHTI&code_challenge_method=S256',
  //       followRedirect: false,
  //     }).as('level1')
  //     .request({
  //       method: 'POST',
  //       url: forgeRockDomain + '/am/oauth2/realms/root/realms/alpha/access_token',
  //       body: {
  //         code: url.parse(this.level1.headers.location, true).query.code,
  //       },
  //     }).as('level2')
    
    
    // then((res) => {
    //   assertStatusCode(res.status, 200);
    //   //authorize
    //   cy.request({
    //     method: 'GET',
    //     url:
    //       forgeRockDomain +
    //       '/am/oauth2/realms/root/realms/alpha/authorize?client_id=a0c2e1e5-da9e-458a-a84f-18020483199d&redirect_uri=https%3A%2F%2Fprevious-investments.dev.aws.hl.co.uk%2FauthCallback&response_type=code&scope=test&state=NTYyMTc3Mzk5MTAyMTk4NjEyMTQ5MjAzMTM5MTE4MjAxMTkzMTQyMjUw&code_challenge=AR1JEVhHbt68ljDiQ8PMVYOplJSRAH6igLZemMCiHTI&code_challenge_method=S256',
    //     followRedirect: false,
    //   }).then((res) => {
    //     assertStatusCode(res.status, 302);
    //     //Location header in response contains a url which contains "code" parameter,
    //     //we're extracting this parameter here
    //     const codeFromAuthorizeRespose = url.parse(res.headers.location, true).query.code;
    //     //access_token
    //     cy.request({
    //       method: 'POST',
    //       url: forgeRockDomain + '/am/oauth2/realms/root/realms/alpha/access_token',
    //       body: {
    //         code: codeFromAuthorizeRespose,
    //       },
    //     }).then((res) => {
    //       assertStatusCode(res.status, 200);
    //       const accessToken = res.body.access_token;
    //       //call BFF API
    //       cy.request({
    //         method: 'GET',
    //         url: bffApiDomain + '/currentUser',
    //         headers: authHeader(accessToken),
    //       }).then((res) => {
    //         assertStatusCode(res.status, 200);
    //         expect(res.body).has.property('clientNumber', '123456');
    //       });
    //       cy.request({
    //         method: 'GET',
    //         url: bffApiDomain + '/accounts/22/previousInvestments?offset=0&limit=5&sortBy=disposalDate.desc',
    //         headers: authHeader(accessToken),
    //       }).then((res) => {
    //         assertStatusCode(res.status, 200);
    //         expect(res.body.data[0]).has.property('sedol', 'B4PF2C0');
    //         //save response as an input to browser tests
    //         cy.writeFile('data/bffPreviousInvestmentApi.json', res.body);
    //       });
    //     });
    //   });
    // });
  // });
});