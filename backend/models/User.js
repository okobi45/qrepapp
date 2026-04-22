const mongoose = require("mongoose");
const argon2 = require("argon2");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    }, email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true
    }, password: {
        type: String,
        required: [true, "password is required"],
        minlength: [6, "Password must be at least 6 characters long"]
    }, role: {
        type: String,
        enum: ["admin", "reporter"],
        default: "reporter"
    }
},
    { timestamps: true });

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await argon2.hash(this.password)
    }
    next()
})

userSchema.methods.comparePass = async function (enteredPassword) {
    return argon2.verify(this.password, enteredPassword)
}

module.exports = mongoose.model("User", userSchema);