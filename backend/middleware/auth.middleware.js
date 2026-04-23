const jwt = require("jsonwebtoken")
const User = require("../models/User")

const protect = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (authHeader === undefined || authHeader.startsWith("Bearer ") === false) {
        return res.status(401).json({ message: "Not authorized. Token missing." })
    }

    try {
        const token = authHeader.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.id).select("-password")

        if (req.user === null) {
            return res.status(401).json({ message: "User not found" })
        }

        next()
    } catch (error) {
        return res.status(401).json({ message: "Not authorized. Invalid token." })
    }
}

module.exports = protect