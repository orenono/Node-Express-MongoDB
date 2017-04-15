   const passport = require('passport');
   const url = require('url');
   const FacebookStrategy = require('passport-facebook').Strategy;
   const config = require('/Users/orenono/Desktop/MEANSecondProject/config/config');
   const users = require('/Users/orenono/Desktop/MEANSecondProject/app/controllers/users.server.controller');
   module.exports = function() {
     passport.use(new FacebookStrategy({
       clientID: config.facebook.clientID,
       clientSecret: config.facebook.clientSecret,
       callbackURL: config.facebook.callbackURL,
       profileFields: ['id', 'name', 'displayName', 'emails'],
       scope: ['public_profile','email'], //added this because of an error https://github.com/jaredhanson/passport-facebook/issues/134
       passReqToCallback: true
     }, function(req, accessToken, refreshToken, profile, done){
       const providerData = profile._json;
       providerData.accessToken = accessToken;

       providerData.refreshToken = refreshToken;
       const providerUserProfile = {
         firstName: profile.name.givenName,
         lastName: profile.name.familyName,
         fullName: profile.displayName,
         email: profile.emails[0].value,
         username: profile.name.givenName + profile.name.familyName,
         provider: 'facebook',
         providerId: profile.id,
         providerData: providerData
};
       users.saveOAuthUserProfile(req, providerUserProfile, done);
     }));
};