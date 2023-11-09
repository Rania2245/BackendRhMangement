import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import sequelize from "./database";

import usersRouter from "./routes/users";
import employeeRouter from "./routes/employe"
import calendarRouter from "./routes/calendrieremp"


var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

sequelize.sync()

// app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/employees", employeeRouter);
app.use("/calendar", calendarRouter);

export default app;
