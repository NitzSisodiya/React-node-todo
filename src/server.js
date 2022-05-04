const express = require("express");
require("./connection");
const path = require("path");

const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 8000;

const routers = require("./routers");
var cors = require("cors");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(routers);


// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is crreated ${port}`);
});
