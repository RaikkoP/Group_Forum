import '../style/style.css'
import FormButton from "../components/form/FormButton";
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
            } else {
                navigate('/login');
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [navigate])


    return (
        <div>
            <main>
                <div className={"homepage-container"}>
                    <h1>Homepage</h1>
                    <div className={"logout-container"}>
                        <FormButton type={"button"} className="logout-button">
                            <b>Log out</b>
                        </FormButton>
                    </div>

                </div>

                <h2>Welcome!</h2>
                <div className="article-list">
                    <div className="article-box">
                        <h4>Pinned post</h4>
                        <p>Don't read the fine print</p>
                    </div>
                    <div className="article-box">
                        <h4>Post 1</h4>
                        <p>Don't read the fine print</p>
                    </div>
                    <div className="article-box">
                        <h4>Post 2</h4>
                        <p>Don't read the fine print</p>
                    </div>
                    <div className="article-box">
                        <h4>Post 3</h4>
                        <p>Don't read the fine print</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;