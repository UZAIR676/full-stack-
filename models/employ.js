const mongoose = require("mongoose");

const employSchema = new mongoose.Schema({
    Username: String,
    Email: String,
    Password: String,
}, { timestamps: true });

module.exports = mongoose.model("user", employSchema);