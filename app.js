const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");

const usersRoutes = require("./routes/users.js");

connection();
app.use(express.json());
app.use(cors());


// routes
app.use("/api/", usersRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
