const app = require("./index");
const startConnection = require("./config/connection.js")
startConnection()

app.listen(app.get('port'), () => console.log("Port listening on 4000"))