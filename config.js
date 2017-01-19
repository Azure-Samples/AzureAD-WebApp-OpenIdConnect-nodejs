  // Don't commit this file to your public repos. This config is for first-run
  //
 exports.creds = {
    hostURL: 'http://localhost:3000/',
    tenantID: 'common',  // Set to 'common/v2.0' if you are using a multi-tenant application
    returnURL: function () {
        return (this.hostURL + 'auth/openid/return');   
    },
    identityMetadata: function () {
        return ('https://login.microsoftonline.com/' + this.tenantID + '/.well-known/openid-configuration');
    }, // For using Microsoft you should never need to change this.
	clientID: 'c9655d1d-f356-46a7-afe1-431c0d6eeb37',
 	clientSecret: '4+47R51b9PJA15G6G5C1ZP7oayV0IMKNZ5lrYN6pVIc=', // if you are doing code or id_token code
 	skipUserProfile: true, // for AzureAD should be set to true.
 	responseType: 'id_token code', // for login only flows use id_token. For accessing resources use `id_token code`
 	responseMode: 'query', // For login only flows we should have token passed back to us in a POST
    logoffFromProvider: false // Force logoff at the AzureAD level. Useful for MFA authentication, where a logoff means a 2FF authentication is needed whatever the openIDConnect token validity is
 	//scope: ['email', 'profile'] // additional scopes you may wish to pass
 };
