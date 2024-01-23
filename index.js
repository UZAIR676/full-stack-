// index.cjs

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const employ = require("./models/employ");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1/employ");

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    
    employ.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ message: "Congratulations, you are logged in!" });
                } else {
                    res.json({ message: "Enter the correct password!" });
                }
            } else {
                res.json({ message: "The record is not found!" });
            }
        });
});

app.post("/register", (req, res) => {
    employ.create(req.body)
        .then(employ => res.json(employ))
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
