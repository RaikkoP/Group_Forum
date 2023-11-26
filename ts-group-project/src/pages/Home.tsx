import '../style/style.css'
import FormButton from "../components/form/FormButton";

const HomePage = () => {
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