const dotenv = require("dotenv")
dotenv.config();
const app = require("./src/app")
const connectdb = require("./configurations/db.config")

connectdb();

app.listen(3000 , (req , res) => {
    console.log("server is running..!!")
})
