import { PassportStatic } from "passport";
import passportJwt from "passport-jwt";
import jwtKey from "./constant";

export const initPassport = (passport: PassportStatic) => {
  passport.use(
    new passportJwt.Strategy(
      {
        secretOrKey: jwtKey,
        jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
      },
      async (token, done) => {
        try {
          return done(null, token.id);
        } catch (error) {
          done(error);
        }
      }
    )
  );
};
