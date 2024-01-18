import './PostsList.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export default function PostsList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching postsList:', error);
            });
    }, []);


    return (
        <div className="postsContainer">
            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/${post.id}`} className="postLink">
                            <img src={post.image} alt={`Thumbnail for ${post.title}`} className="postImage" />
                            <h3>{post.title}</h3>
                            <p>{post.published}</p>
                            <p>{post.body.substring(0, 100)}...</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
)
}