import './postForm.css';
import { useState } from 'react';
import axios from 'axios';
import FormButton from '../form/FormButton';

export default function PostForm({ userId }: any) {

    const [postTitle, setPostTitle] = useState("");
    const [postDescription, setPostDescription] = useState("");
    const [postImage, setPostImage] = useState<File | null>(null);

    const changeTitle = (event: React.FormEvent<HTMLInputElement>) => {
        setPostTitle(event.currentTarget.value);
        console.log(event.currentTarget.value);
        event.preventDefault();
    };

    const changeDescription = (event: React.FormEvent<HTMLInputElement>) => {
        setPostDescription(event.currentTarget.value);
        console.log(event.currentTarget.value);
        event.preventDefault();
    };

    const handleFileChange = (event: React.FormEvent<HTMLInputElement>) => {
        if (event.currentTarget.files && event.currentTarget.files.length > 0) {
            setPostImage(event.currentTarget.files[0]);
        }
    };

    const axiosConfig = {
        withCredentials: true,
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', postTitle);
        formData.append('body', postDescription);
        formData.append('author_id', "5");
        console.log(formData)
        if (postImage) {
            event.preventDefault();
            console.log(postImage)
            formData.append('image', postImage);
        }

        axios.post('http://localhost:4000/post/create', formData, axiosConfig)
            .then(function (response) {
                event.preventDefault();
                console.log(response)
                setPostTitle('');
                setPostDescription('');
                setPostImage(null);
            })
            .catch(function (error) {
                event.preventDefault();
                console.log(error);
            })
    };

    return (
        <form className='formContainer' onSubmit={handleFormSubmit}>
            <label>Post Title</label>
            <input value={postTitle} onChange={changeTitle} name='title' />
            <label>Post Description</label>
            <input value={postDescription} onChange={changeDescription} name='description' />
            <label>Post Image</label>
            <input name='image' type='file' onChange={handleFileChange} />
            <FormButton type='submit'>Post</FormButton>
        </form>
    )
}   