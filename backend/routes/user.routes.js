const express = require("express")
const User = require("../models/User")
const protect = require("../middleware/auth.middleware")

const router = express.Router()

router.get("/", protect, async (req, res) => {
    try {
        const users = await User.find().select("-password")
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post("/", protect, async (req, res) => {
    try {
        const { name, email, password, role } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Name, email and password are required" })
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" })
        }

        const allowed = ["admin", "reporter"]
        if (allowed.includes(role) === false) {
            return res.status(400).json({ message: "Role must be admin or reporter" })
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" })
        }

        const user = await User.create({ name, email, password, role })

        res.status(201).json({
            message: "User created",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete("/:id", protect, async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (user === null) {
            return res.status(404).json({ message: "User not found" })
        }

        res.status(200).json({ message: "User deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router