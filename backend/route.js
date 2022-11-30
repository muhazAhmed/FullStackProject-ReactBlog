const express = require ('express')
const {GetPosts, GetPost, AddPost, DeletePost, UpdatePost} = require ('./controllers/posts.js')
const user = require ('./controllers/users')
const {register, login, logout} = require ('./controllers/auth')

const router = express.Router()

router.get("/api/test", (req,res) => {
    res.json("Api is tested and working...")
})

// =================> Post API <==========
router.get("/",GetPosts)
router.get("/:id",GetPost)
router.post("/",AddPost)
router.delete("/:id",DeletePost)
router.put("/:id",UpdatePost)

// =================> auth API <==========
router.post("/api/auth/register",register)
router.post("/api/auth/login",login)
router.post("/api/auth/logout",logout)

module.exports = router