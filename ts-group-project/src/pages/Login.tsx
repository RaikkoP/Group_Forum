import FormInput from "../components/form/FormInput";
import FormButton from "../components/form/FormButton";
import { useState } from "react";
import axios from "axios";

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setUsername(event.currentTarget.value);
        console.log(username);
    };
    const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setPassword(event.currentTarget.value);
        console.log(password);
    };
    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        axios.post('http://localhost:3000/login', {
            username: username,
            password: password,
        }, axiosConfig)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        setPassword('');
        setUsername('');
        event.preventDefault();
    }

    return(
        <main>
            <h1>Log in</h1>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <FormInput onChange={handleUsernameChange}  name="username_email" type="text" label="Username or Email" placeholder="example@gmail.com"/>
                    <FormInput onChange={handlePasswordChange} name="password" type="password" label="Password" placeholder="***********"/>
                    <FormButton type="submit">
                        <b>Log-in</b>
                    </FormButton>
                </form>
            </div>
            <div>
                <p>Don't have a account? <a href="/register"><b>Sign up</b></a></p>
            </div>
        </main>
    )
}

export default LoginForm;