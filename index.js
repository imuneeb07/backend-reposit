const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.use(express.static("publice"))
app.use(express.json())
app.use("/api/products",require("./routes/products"))
app.use("/api/users",require("./routes/users"))

async function dbConnect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/edify")
    console.log("connect")
  } catch (error) {
    console.log("not connect")
  }
}
dbConnect() 
app.listen(3000, () => {
  console.log("serer is running")
})
