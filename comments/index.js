const express = require("express");
const { randomBytes } = require("crypto");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(4200, () => {
  console.log("Listening on Port 4200 :)");
});
