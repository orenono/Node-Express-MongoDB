  const users =
     require('/Users/orenono/Desktop/MEANSecondProject/app/controllers/users.server.controller');
   const passport = require('passport');

   module.exports = function(app) {
     app.route('/signup')
        .get(users.renderSignup)
        .post(users.signup);

     app.route('/signin')
        .get(users.renderSignin)
        .post(passport.authenticate('local', {
          successRedirect: '/',
          failureRedirect: '/signin',
          failureFlash: true
}));

         app.get('/oauth/facebook', passport.authenticate('facebook', {
     failureRedirect: '/signin'
}));
   app.get('/oauth/facebook/callback', passport.authenticate('facebook',
   {
     failureRedirect: '/signin',
     successRedirect: '/'
   }));

     app.get('/signout', users.signout);
   };

