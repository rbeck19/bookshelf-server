    //authentication middleware for Node.js. Sole purpose is to autheniticate requests
const passport = require('passport')
	//needed to Hash passwords securely
const bcrypt = require('bcrypt')
	//token used for authentication between two parties
const jwt = require('jsonwebtoken')

	//secret is held only on the client 
    // if process.env.JWT_SECRET is undefined  OR   "string"
const secret = process.env.JWT_SECRET || 'some string value only your app knows'

const { Strategy, ExtractJwt } = require('passport-jwt')

// Minimum required options for passport-jwt
const opts = {
        //extract the token
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        //store this in an environment variable so it isn't ever pushed to GitHub!
	secretOrKey: secret,
}

// Require the user model
const User = require('../models/user')

const strategy = new Strategy(opts, function (jwt_payload, done) {
	User.findById(jwt_payload.id)
			//gives access to req.user
		.then((user) => done(null, user))
		.catch((err) => done(err))
})

passport.use(strategy)

passport.initialize()

    //variable that holds the authenticate method 
const requireToken = passport.authenticate('jwt', { session: false })

const createUserToken = (req, user) => {
	if (
		!user ||
		!req.body.credentials.password ||
		!bcrypt.compareSync(req.body.credentials.password, user.password)
	) {
		const err = new Error('The provided username or password is incorrect')
		err.statusCode = 422
		throw err
	}
	    //create the token from user's id andreturn the token
		//expiresIn: 36000 means the token will no longer be valid after an hour
	return jwt.sign({ id: user._id }, secret, { expiresIn: 36000 })
}

module.exports = {
	requireToken,
	createUserToken,
}