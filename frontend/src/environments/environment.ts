/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'goldman.eu.auth0.com', // the auth0 domain prefix
    audience: 'Coffeshop', // the audience set for the auth0 app
    clientId: 'fM6y29WeL4k7HzdWVUdzMo2tyEjm6ez3', // the client id generated for the auth0 app
    callbackURL: 'http://127.0.0.1:8080/login-results', // the base url of the running ionic application. 
  }
};
