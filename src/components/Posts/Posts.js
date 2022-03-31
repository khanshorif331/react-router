import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import Post from '../Post/Post';

const Posts = () => { 
    const [posts,setPosts] = useState([])
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div>
            <h2>Every posts Facebook ever had: {posts.length}</h2>
            {
                posts.map(post=><Link 
                    to={`/posts/${post.id}`}
                    key={post.id}>
                    {post.id} 
                </Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;