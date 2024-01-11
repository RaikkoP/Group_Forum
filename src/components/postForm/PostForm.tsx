import './postForm.css';

export default function PostForm() {

    return (
        <form className='formContainer'>
            <label>Post Title</label>
            <input name='title'/>
            <label>Post Description</label>
            <input name='description'/>
            <label>Post Image</label>
            <input type='file'/>
        </form>
    )
}