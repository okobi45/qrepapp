const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    CrimeType: {
        type: String,
        required: true
    },
    incidentDate: {
        type: Date,
        required: true
    },
    county: {
        type: String,
        required: true
    },
    locationDesc: {
        type: String,
        required: true
    },
    incidentDesc: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Under Review", "Resolved"],
        default: "Pending"
    },
    reporter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Report", reportSchema);