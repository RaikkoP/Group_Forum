import './postForm.css';
import FormButton from "../form/FormButton";

export default function PostForm() {

    return (
        <form className='formContainer'>
            <label>Post Title</label>
            <input name='title'/>
            <label>Post Description</label>
            <input name='description'/>
            <label>Post Image</label>
            <input type='file'/>
            <FormButton type="submit">
                <b>Post</b>
            </FormButton>
        </form>
    )
}   