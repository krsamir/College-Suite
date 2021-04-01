import express from "express";
import { config } from "dotenv";
config();
import appRoutes from "./app/routes/appRoutes.js"
const app = express();
appRoutes(app)
  
app.get("/", (req, res) => {
  res.send("Backend API");
});

const { PORT, NODE_ENV } = process.env;
app.listen(
  PORT,
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
);
