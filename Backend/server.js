const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const dotenv = require("dotenv")

const studentRoutes = require("./routes/studentRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/students", studentRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.listen(5000, () => console.log("Server running on port 5000"));
