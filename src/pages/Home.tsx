import '../style/style.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/header/Header';
import LoginBox from '../components/loginBox/LoginBox';
import RegisterBox from '../components/registerBox/RegisterBox';
import PostForm from '../components/postForm/PostForm';
import LockedForm from '../components/lockedForm/LockedForm';
import PostsList from "../components/postsList/PostsList";

const HomePage = () => {

    const [loginStatus, setLoginStatus] = useState('None');
    const [validLogin, setValidLogin] = useState(false);
    const [username, setUsername] = useState(null);

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
                setValidLogin(true);
                setLoginStatus('None');
                setUsername(response.data.user_info)
            }
            else {
                setValidLogin(false);
            }
        })
        .catch(function (error) {
            console.log(error);
            setValidLogin(false);
        })
    }, [validLogin, setLoginStatus])


    return (
        <>
            <Header username={username} setLoginStatus={setLoginStatus}/>
            {
                validLogin ? <PostForm/> : <LockedForm/>
            }
            {
                validLogin ? <PostsList/> : null
            }

            { 
                loginStatus === 'Login' ? 
                <LoginBox setLoginStatus={setLoginStatus}/> : null
            }
            {
                loginStatus === 'Register' ?
                <RegisterBox setLoginStatus={setLoginStatus}/> : null
            }
        </>
    );
};

export default HomePage;