const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./Routers/todoRoutes");
const app = express();
app.use(
  cors({
    origin: ["http://localhost:3001", "http://localhost:5173","https://todo-list-mern-api-chi.vercel.app","https://todo-list-mern-home.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
// Swagger Documentation
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJsDocs = YAML.load("./api.yaml");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err));

//MIDDLEWARE
app.use(routes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

app.listen(3001, () => {
  console.log("Server is running on port");
});
