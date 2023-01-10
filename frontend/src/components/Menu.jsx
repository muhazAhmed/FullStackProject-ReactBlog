import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = ({cat}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

    // const posts = [
    //     {
    //         id : 1,
    //         title : "Lorem ipsum dolor sit amet",
    //         desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //         img : "https://picsum.photos/300/300"
    //     },
    //     {
    //         id : 2,
    //         title : "Lorem ipsum dolor sit amet",
    //         desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //         img : "https://picsum.photos/seed/picsum/300/300"
    //     },
    //     {
    //         id : 3,
    //         title : "Lorem ipsum dolor sit amet",
    //         desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //         img : "https://picsum.photos/300/300?grayscale"
    //     }
    // ];

  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map(post => (
        <div className='post' key={post.id} data-aos="fade">
            <img src={post.img} alt='pic' />
            <h2>{post.title}</h2>
            <button>Read more</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
