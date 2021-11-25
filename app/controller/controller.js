// server portion

const app = require(__dirname + "/app.js")

// Listen for incoming requests
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`))