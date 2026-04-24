const express = require("express")
const Report = require("../models/Report")
const protect = require("../middleware/auth.middleware")

const router = express.Router()

router.post("/", protect, async (req, res) => {
    try {
        const { crimeType, incidentDate, county, locationDesc, incidentDesc } = req.body

        if (!crimeType || !incidentDate || !county || !locationDesc || !incidentDesc) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const report = await Report.create({
            crimeType, incidentDate, county, locationDesc, incidentDesc,
            reporter: req.user._id
        })

        res.status(201).json({ message: "Report created", report })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get("/", protect, async (req, res) => {
    try {
        const reports = await Report.find().populate("reporter", "name email")
        res.status(200).json(reports)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get("/my", protect, async (req, res) => {
    try {
        const reports = await Report.find({ reporter: req.user._id })
        res.status(200).json(reports)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put("/:id", protect, async (req, res) => {
    try {
        const { status } = req.body
        const allowed = ["Pending", "Under Review", "Resolved"]

        if (allowed.includes(status) === false) {
            return res.status(400).json({ message: "Status must be Pending, Under Review, or Resolved" })
        }

        const report = await Report.findByIdAndUpdate(req.params.id, { status }, { new: true })

        if (report === null) {
            return res.status(404).json({ message: "Report not found" })
        }

        res.status(200).json({ message: "Report updated", report })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete("/:id", protect, async (req, res) => {
    try {
        const report = await Report.findByIdAndDelete(req.params.id)

        if (report === null) {
            return res.status(404).json({ message: "Report not found" })
        }

        res.status(200).json({ message: "Report deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router