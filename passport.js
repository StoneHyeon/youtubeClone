import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import User from "./models/User";
import {
    githubLoginCallback,
    facebookLoginCallback
} from "./controllers/userController";
import routes from "./routes";


passport.use(User.createStrategy());

passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: `https://chilly-falcon-10.localtunnel.me${routes.facebookCallback}`,
        profileFields: ['id', 'displayName', 'photos', 'email'],
        scope: ['public_profile', 'email']
    },
    facebookLoginCallback
));

passport.use(new GithubStrategy({
        clientID: process.env.GH_ID,
        clientSecret: process.env.GH_SECRET,
        callbackURL: `http://localhost:7000${routes.githubCallback}`
    },
    githubLoginCallback
));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());