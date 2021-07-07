//imports

const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");

const taskRoutes = require("./API/task/routes");

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());
//Routes
app.use("/", taskRoutes);

app.listen(8000);
