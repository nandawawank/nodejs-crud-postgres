const router = require("../src/routes/StudentRoute");
const express = require("express");
const cors = require("cors");

const db = require("../src/config/database");
require("dotenv").config();

const app = express();
const port = process.env.REST_PORT;

app.use(cors());
app.use(express.json());
app.use('/',router);

app.listen(port, () => {
    console.log("rest api has been running in port : " + port);
})