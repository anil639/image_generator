import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cors from "cors";

import HomeRoutes from "./src/Routes/HomeRoutes.js";

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());
dotenv.config();

//Routes
app.get("/", (req, res) => {
  res.send("Anil kumar nayak");
});

app.use("/api/home", HomeRoutes);

//DB
const url = process.env.MONGO_URL;
mongoose
  .connect(url)
  .then(() => console.log("db connected successfully"))
  .catch((e) => console.log("error", e));

app.listen(process.env.PORT, () => {
  console.log(`server running at ${process.env.PORT}`);
});
