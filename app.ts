import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import sequelize from "./database";
import passport from "passport";

import { initPassport } from "./auth/passport";
import employeeRouter from "./routes/employe";
import calendarRouter from "./routes/calendrieremp";

var app = express();
initPassport(passport);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());

sequelize.sync();

app.use("/employees", employeeRouter);
app.use("/calendar", calendarRouter);

export default app;
