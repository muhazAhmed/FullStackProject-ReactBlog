import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

    const [posts, setPosts] = useState([])

    const cat = useLocation().search

    useEffect (() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/${cat}`)
                setPosts(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[cat])

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
    //     },
    //     {
    //         id : 4,
    //         title : "Lorem ipsum dolor sit amet",
    //         desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //         img : "https://picsum.photos/id/237/300/300"
    //     },
    //     {
    //         id : 5,
    //         title : "Lorem ipsum dolor sit amet",
    //         desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //         img : "https://picsum.photos/400/600"
    //     },
    // ]
  return (
    <div className='home'>
      <div className='posts'>
        {posts.map(post => (
            <div className='post' key={post.id} data-aos="zoom-out">
                <div className='img' >
                    <img src={post.img} alt="pic"/>
                </div>
                <div className='content'>
                    <Link className='link' to={`/post/${post.id}`}>
                        <h1>{post.title}</h1>
                    </Link>
                        <p>{post.desc}</p>
                        <button>Read More</button>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Home

