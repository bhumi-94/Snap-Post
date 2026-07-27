const dotenv = require("dotenv")
dotenv.config();
const path = require("path");
const express = require("express");
const app = require("./src/app")
const connectdb = require("./configurations/db.config")

connectdb();



// Serve React build
app.use(express.static(path.join(__dirname, "dist")));

// React routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});



const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});