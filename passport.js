const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const UserSchema = require("./Schemas/UserSchema");
require("dotenv").config();

const websiteURL = "https://wnrapp.herokuapp.com";

passport.use(
	new GoogleStrategy(
		{
			clientID: `695412830406-hg4hujhvf3h52v7n29kttg4351k1amiq.apps.googleusercontent.com`,
			clientSecret: `MsAdNqrlHkUmvsZrkpTQbK-h`,
			callbackURL: `${websiteURL}/auth/google/callback`,
		},
		function (accessToken, refreshToken, profile, cb) {
			UserSchema.findOrCreate(
				{
					googleId: profile.id,
					name: profile.name.givenName,
					image: profile._json.picture,
				},
				function (err, user) {
					return cb(err, user);
				}
			);
		}
	)
);
