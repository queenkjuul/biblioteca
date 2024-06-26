require("dotenv").config()
const express = require("express")
const logger = require("morgan")
const cors = require("cors")
// const { sequelize } = require('./models');
const app = express()
const PORT = process.env.PORT || 8080
const routes = require("./routes")
const env = process.env.NODE_ENV || "development"
const config = require(__dirname + "/config/config.js")[env]

const corsOptions = {
  origin: "*",
}

app.use(logger("dev"))
app.use(cors(corsOptions))
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/dist"))
}

app.use(routes)

// sequelize.sync().then(() => {
app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}!`)
})
// });
