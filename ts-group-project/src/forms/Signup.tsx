import FormInput from "../components/form/FormInput";
import FormButton from "../components/form/FormButton";
import axios from 'axios';
import { useState } from "react";

const SignUpForm = () => {

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

    return(
        <div>
            <div>
                <form>
                    <FormInput onChange={handleUsernameChange}  name="username" type="text" label="Username" placeholder="Username"/>
                    <FormInput onChange={handleEmailChange} name="email" type="text" label="Email" placeholder="Example@Email.com"/>
                    <FormInput onChange={handlePasswordChange} name="password" type="password" label="Password" placeholder="***********"/>
                    <FormButton type="submit">
                        <b>Sign up</b>
                    </FormButton>
                </form>
            </div>
            <div>
                <p>Already have a account? <a href="/login"><b>Sign in</b></a></p>
            </div>
        </div>
    )
}

export default SignUpForm;