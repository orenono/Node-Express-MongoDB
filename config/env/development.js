module.exports = {
	//Development configuration options
	db: 'mongodb://localhost:27017/mean-book',
	sessionSecret: 'developmentSessionSecret',
	facebook: {
		clientID: '1840234182910851',
		clientSecret: '5b8c892229beab24ba21579a081f7cf2',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback',
		profileFields: ['emails']
	}

};