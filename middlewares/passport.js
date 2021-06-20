"use strict";
var dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
//JWT Authentication
var passport = require("passport");
var passportJWT = require("passport-jwt");
var JWTStrategy = passportJWT.Strategy;
var ExtractJWT = passportJWT.ExtractJwt;
var jwtSecretKey = process.env.SECRET_KEY;
module.exports = passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecretKey,
}, function (jwtPayload, done) {
    return done(null, 1);
}));
