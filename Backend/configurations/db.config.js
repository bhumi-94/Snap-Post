const mongoose = require("mongoose")
const dns = require("dns")
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])
dns.setServers
async function connectdb() {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("DB connected..!!")
    
}
module.exports = connectdb