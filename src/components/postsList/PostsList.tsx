import './PostsList.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

type postInterface = {
    id: number,
    image: string,
    title: string,
    published: string,
    body: string
}

export default function PostsList() {
    const [posts, setPosts] = useState<postInterface[] | undefined>([]);


    const axiosConfig = {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        }
    };

    useEffect(() => {
        axios.get('http://localhost:4000/posts', axiosConfig)
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
                {posts?.map((post) => (
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