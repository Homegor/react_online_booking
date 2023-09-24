const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const chalk = require("chalk")
const initDatabase = require("./startUp/initDatabase")
const routes = require("./routes/index")

const PORT = config.get("port") ?? 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/api", routes)

// homegor14
// OmGMxpxoDgI9d5iS

async function start() {
  try {
    mongoose.connection.once("open", () => {
      initDatabase()
    })
    await mongoose.connect(config.get("mongoUri"))
    console.log(chalk.green("mongo started"))
    app.listen(PORT, () =>
      console.log(chalk.green(`Server has been started on port ${PORT}...`))
    )
  } catch (e) {
    console.log(chalk.red(e.message))
    process.exit(1)
  }
}

start()
