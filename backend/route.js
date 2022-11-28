const express = require ('express')
const post = require ('./controllers/posts')
const user = require ('./controllers/users')
const {register, login, logout} = require ('./controllers/auth')

const router = express.Router()

router.get("/api/test", (req,res) => {
    res.json("Api is tested and working...")
})

// =================> API <==========
router.post("/api/posts",post)

router.get("/api/user",user)

// =================> main API <==========
router.post("/api/auth/register",register)
router.get("/api/auth/login",login)
router.get("/api/auth/logout",logout)

module.exports = router