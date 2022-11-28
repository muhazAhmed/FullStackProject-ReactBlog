const db = require('../db')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
    //check whether the user exists

    const check = "SELECT * FROM users WHERE email = ? OR username = ?";
    let Body = (req.body)

    if (!Body.username) {
        return res.status(400).json("Please enter username")
    }

//==================> Email validation <=======================
    if (!Body.email) {
        return res.status(400).json("Please enter email")
    }
    const Emailregx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let email = Emailregx.test(Body.email)
    if (!email) {
        return res.status(400).json("Please enter valid email.")
    }
    

//==================> password validation <=======================
    if (!Body.password) {
        return res.status(400).json("Please enter password")
    }
    const Passregx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&])[a-zA-Z0-9@#$%&]{8,}$/
    let password = Passregx.test(Body.password)
    if (!password) {
        return res.status(400).json("Password must have atleast 1 uppercase\n, 1 lowercase, 1 special charecter\n 1 number and must consist atleast 8 charectors.")
    }


    db.query(check,[Body.email, Body.username], (err,data) => {
        if (err) {
            return res.json(err)
        }
        if (data.length) {
            return res.status(400).json("User aldready exists")
        }

        //Hashing the password and creating new user

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(Body.password, salt);

        const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?,?,?)";
        const values = [
            Body.username,
            Body.email,
            hash,
        ]

        db.query(q, values, (err, data) => {
            if (err) {
                return res.json(err)
            }
            return res.status(201).json({messsage : "User registration successful"})
        })
    })
}


const login = async (req, res) => {
}


const logout = async (req, res) => {
}
module.exports = {register, login, logout}