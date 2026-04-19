const express = require("express")
const Report = require("../models/Report")

const router = express.Router()

// create a report
router.post("/", async (req, res) => {
    try {
        const { crimeType, incidentDate, county, locationDesc, incidentDesc, reporter } = req.body

        const report = await Report.create({ crimeType, incidentDate, county, locationDesc, incidentDesc, reporter })

        res.status(201).json({ message: "Report created", report })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// get all reports (admin)
router.get("/", async (req, res) => {
    try {
        const reports = await Report.find().populate("reporter", "name email")

        res.status(200).json(reports)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// get reports by reporter id
router.get("/my/:reporterId", async (req, res) => {
    try {
        const reports = await Report.find({ reporter: req.params.reporterId })

        res.status(200).json(reports)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// update report status (admin)
router.put("/:id", async (req, res) => {
    try {
        const { status } = req.body

        const report = await Report.findByIdAndUpdate(req.params.id, { status }, { new: true })

        if (!report) {
            return res.status(404).json({ message: "Report not found" })
        }

        res.status(200).json({ message: "Report updated", report })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// delete a report (admin)
router.delete("/:id", async (req, res) => {
    try {
        const report = await Report.findByIdAndDelete(req.params.id)

        if (!report) {
            return res.status(404).json({ message: "Report not found" })
        }

        res.status(200).json({ message: "Report deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router