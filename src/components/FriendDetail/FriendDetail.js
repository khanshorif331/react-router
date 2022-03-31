import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams()
    
    const [friend,setFriend] = useState({})

    useEffect( () =>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])

    return (
        <div>
            <h2>This is detail about dosto : {friendId}</h2>
            <p>Name: {friend.name}</p>
            <h4>Email: {friend.email}</h4>
            <p>Website: {friend.website}</p>
            <p><small>City: {friend.address?.city}</small></p>
            <p><small>Lat: {friend.address?.geo?.lat}</small></p>
        </div>
    );
};

export default FriendDetail;