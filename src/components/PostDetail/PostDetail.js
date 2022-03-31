import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams()
    const [post,setPost] = useState({})
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[postId])
    return (
        <div>
           <h4>This is post detail for: {postId}</h4>
           <h1>Title: {post.title}</h1>
           <p>{post.body}</p>
        </div>
    );
};

export default PostDetail;