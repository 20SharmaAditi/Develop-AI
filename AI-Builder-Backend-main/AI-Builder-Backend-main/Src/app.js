const express = require("express");

const dotenv = require("dotenv");
const morgan = require("morgan");

const cors = require("cors");
const bodyParser = require("body-parser");

const promptRouter = require('./Routes/Prompt.routes');

dotenv.config();

const app = express();

app.use(express.json({ limit: "100kb" }));

app.use(bodyParser.json());

app.use(cors());

app.options("*", cors());

app.use(morgan("dev"));

app.use("/api/v1/data/" , promptRouter);

module.exports = app;
