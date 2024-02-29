const express = require("express");
const app = express();
const connectDB = require("./connection");
connectDB();
const studentRoute = require("./restapi/src/router/student");
const port = process.env.PORT || 10000;
app.use(express.json());
app.use(studentRoute);

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
console.log("hello");
