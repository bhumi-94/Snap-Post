const dotenv = require("dotenv")
dotenv.config();
const path = require("path");
const app = require("./src/app")
const connectdb = require("./configurations/db.config")

connectdb();


// Serve React build
app.use(express.static(path.join(__dirname, "dist")));

// React routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});


app.listen(3000 , (req , res) => {
    console.log("server is running..!!")
})





