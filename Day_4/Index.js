const express = require('express');
const cors = require('cors')
const arr = []
const app = express()


app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//Routes
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.finOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "login Successfully", user: user })
            } else {
                res.send("User not registered")
                res.send({ message: "password didnt match" })
            }
        } else {
            res.send({ message: "user not Registered" })
        }
    })
})

app.post("/register", (req, res) => {
    const { name, email, number, password } = req.body;
    let user = userData.find((user) => {
        return user.email == email;
    });
    if (user) {
        res.status(400).json({ 'Error': [{ message: "Already exist" }] });
    }
    else if (!user) {
        res.status(200).json({
            'Response': [{ 'message': 'Registration successful' }]
        })
    }
    bcrypt.hash(password, 12, (err, hashPassword) => {
        if (err) {
            return res.status(400).json({ error: err })
        }
        else {
            arr.push({ name, number, email, password: hashPassword })
        }

        app.listen(9000, () => {
            console.log("Conneted to port 9000");
        })