const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

//JWT Authentication
const passport = require("passport");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const jwtSecretKey = process.env.SECRET_KEY;

module.exports = passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecretKey,
    },
    function (jwtPayload:any, done: any) {
      return done(null, 1);
    }
  )
);