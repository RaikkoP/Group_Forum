import './PostsList.css';
import { useState, useEffect } from 'react';
import axios from "axios";

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
        axios.get('http://localhost:4000/post/get', axiosConfig)
            .then(response => {
                if (Array.isArray(response.data)) {
                    console.log(response)
                    setPosts(response.data);
                } else {
                    console.error('Expected an array but received:', response.data);
                    setPosts([]);
                }
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
                            <img src={`http://localhost:4000/posts/image/${post.image}`} alt={`Thumbnail for ${post.title}`} className="postImage" />
                            <h3>{post.title}</h3>
                            <p>{post.published}</p>
                            <p>{post.body.substring(0, 100)}...</p>
                    </li>
                ))}
            </ul>
        </div>
)
}