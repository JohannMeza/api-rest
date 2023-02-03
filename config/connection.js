const { connect } = require("mongoose");
const { config } = require("dotenv");
config();

const startConnection = async () => {
  try {
    await connect(process.env.APP_DEV_DATABASE_URI)
    console.log("Database is conected successfully");
  } catch (err) {
    console.log("Error in the database:", err)
  }
}

module.exports = startConnection
