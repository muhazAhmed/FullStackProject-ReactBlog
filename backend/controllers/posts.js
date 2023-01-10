const db = require ("../db")
const jwt = require("jsonwebtoken")

// =================> Get all posts <=================
const GetPosts = async (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat= ?"
    : "SELECT * FROM posts";

    db.query(q, [req.query.cat], (err, data) => {
        if (err) {
            return res.status(400).json(err)
        }
        return res.status(200).json(data)
    })
};

// =================> Get perticular post <=================
const GetPost = async (req, res) => {
    const q =
    "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

  db.query(q, [req.params.id], (err, data) => {
        if (err) {
            return res.status(400).json(err)
        }
        return res.status(200).json(data[0])
    })    
};

// =================> add a post <=================
const AddPost = async (req, res) => {
    const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, process.env.JWT_SECRET, (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been created.");
    });
  });
};

// =================> delete a post <=================
const DeletePost = async (req, res) => {
    const token = req.cookies.access_token
    if (!token) {
        return res.status(401).json("Please login first")
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, userInfo) => {
        if (err) {
            return res.status(403).json(
    "Token is invalid")
        }
        const postId = req.params.id
        const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

        db.query(q, [postId, userInfo.id], (err, data) => {
            if (err) {
                return res.status(403).json("You are not allowed to delete this book")
            }    
            return res.status(200).json("Post deleted successfully!")
        })
    })
    
};

// =================> update a post <=================
const UpdatePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, process.env.JWT_SECRET, (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const q =
      "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";

    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

    db.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been updated.");
    });
  });
};

module.exports = { GetPosts, GetPost, AddPost, DeletePost, UpdatePost };
