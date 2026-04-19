const express = require("express")
const User = require("../models/User")

const router = express.Router()

// get all users
router.get("/", async (req, res) => {
    try {
        const users = await User.find().select("-password")

        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// create a user (admin creates reporter or admin)
router.post("/", async (req, res) => {
    try {
        const { name, email, password, role } = req.body

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

// delete a user
router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        res.status(200).json({ message: "User deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router