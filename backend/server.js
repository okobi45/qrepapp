require("dotenv").config()
const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const mongoSanitize = require("express-mongo-sanitize")
const connectDB = require("./config/db")
const authRoutes = require("./routes/auth.routes")
const reportRoutes = require("./routes/report.routes")
const userRoutes = require("./routes/user.routes")

const app = express()
const PORT = process.env.PORT || 5000

app.use(helmet())
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))
app.use(express.json())
app.use(mongoSanitize)

app.get("/", (req, res) => {
    res.json({ message: "SWR(secure web report) backend is running" })
})

app.use("/api/auth", authRoutes)
app.use("/api/reports", reportRoutes)
app.use("/api/users", userRoutes)

const startServer = async () => {
    await connectDB()
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}

startServer()