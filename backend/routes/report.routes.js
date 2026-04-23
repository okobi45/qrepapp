const express = require("express")
const { body, validationResult } = require("express-validator")
const Report = require("../models/Report")

const router = express.Router()

// create a report
router.post("/",
    body("crimeType").trim().notEmpty().withMessage("Crime type is required"),
    body("incidentDate").notEmpty().withMessage("Incident date is required"),
    body("county").trim().notEmpty().withMessage("County is required"),
    body("locationDesc").trim().notEmpty().withMessage("Location description is required"),
    body("incidentDesc").trim().notEmpty().withMessage("Incident description is required"),
    body("reporter").notEmpty().withMessage("Reporter is required"),
    async (req, res) => {
        const errors = validationResult(req)
        if (errors.isEmpty() === false) {
            return res.status(400).json({ message: errors.array()[0].msg })
        }

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