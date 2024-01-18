import FormInput from "../../components/form/FormInput";
import FormButton from "../../components/form/FormButton";
import axios from 'axios';
import { useState } from "react";
import './RegisterBox.css'

const RegisterBox = ({ setLoginStatus }: any) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleUsernameChange = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setUsername(event.currentTarget.value);
        console.log(username);
    };
    const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setEmail(event.currentTarget.value);
        console.log(email);
    };
    const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setPassword(event.currentTarget.value);
        console.log(password);
    }
    const axiosConfig = {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        }
    };
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        axios.post('http://localhost:4000/authentication/register', {
            username: username,
            email: email,
            password: password
        }, axiosConfig)
            .then(function (response) {
                console.log(response);
                if (response.data.Registered) {
                    setLoginStatus('Login');
                } else {
                    alert("No record");
                }
                setUsername('');
                setEmail('');
                setPassword('');
            })
            .catch(function (error) {
                console.log(error);
            })
        event.preventDefault();
    }

    return (
        <div className="loginFormContainer">
            <h1>Sign up</h1>
            <div>
                <form className='authForm' onSubmit={handleFormSubmit}>
                    <FormInput onChange={handleUsernameChange} name="username" type="text" label="Username" placeholder="Username" />
                    <FormInput onChange={handleEmailChange} name="email" type="text" label="Email" placeholder="Example@Email.com" />
                    <FormInput onChange={handlePasswordChange} name="password" type="password" label="Password" placeholder="***********" />
                    <FormButton type="submit">
                        <b>Sign up</b>
                    </FormButton>
                    <button onClick={() => setLoginStatus('None')}>Close</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterBox;