import FormInput from "../components/form/FormInput";
import FormButton from "../components/form/FormButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        const axiosConfig = {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        };
        axios.get('http://localhost:4000/authentication/userData', axiosConfig)
        .then(function (response) {
            console.log(response);
            if(response.data.valid){
                navigate('/');
            } else {
                navigate('/login');
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [navigate])


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
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        }
    };
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        axios.post('http://localhost:4000/authentication/login', {
            username: username,
            password: password,
        }, axiosConfig)
        .then(function (response) {
            if(response.data.Login){
                navigate('/');
            } else {
                alert("No record");
            }
            setPassword('');
            setUsername('');
        })
        .catch(function (error) {
            console.log(error);
        })
        event.preventDefault();
    }

    return(
        <main>
            <h1>Log in</h1>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <FormInput onChange={handleUsernameChange}  name="username" type="text" label="Username" placeholder="Username"/>
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