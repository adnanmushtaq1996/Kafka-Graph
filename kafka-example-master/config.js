

const express = require("express");
const bodyParser = require("body-parser");
const GetMessage = require("./consumer.app");



const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/employees", GetMessage);



module.exports = {
  kafka_topic: 'example1',
  kafka_server: 'localhost:2181',
};
