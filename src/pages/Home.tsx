import '../style/style.css'
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header/Header';

const HomePage = () => {

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
                console.log(response.data);
            }
            else {
                // navigate('/login');
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [navigate])


    return (
        <div>
            <main>
                <Header />
            </main>
        </div>
    );
};

export default HomePage;