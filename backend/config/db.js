const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO.URI);
        console.log("MongoDB is Sucessfully Connected");
    } catch (error) {
        console.error("MongoDB failed to connect:", error.message);
        process.exit(1);
    }
}