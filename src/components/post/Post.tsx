import './Post.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Post(id){
    const { id } = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/posts/${id}`, axiosConfig)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.error('Error fetching post:', error);
            });
    }, [])


    return (
        <div className="postDetailContainer">
            <img src={post.image} alt={`Image for ${post.title}`} />
            <h2>{post.title}</h2>
            <p>{post.published}</p>
            <p>{post.body}</p>
        </div>
    );
}