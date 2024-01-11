import './Header.css';

const Header = ({setLoginStatus}: any) => {

    return (
        <header className='header'>
            <div className='title'>
                <h1>SammalHabe</h1>
            </div>
            <div className='search'>
                <search>
                    <form>
                        <input type='search' placeholder='Search for Post' id='search' name='search' />
                    </form>
                </search>
            </div>
            <div className='buttons'>
                <button onClick={() => setLoginStatus('Login')}>Login</button>
                <button onClick={() => setLoginStatus('Register')}>Register</button>
            </div>
        </header>
    )
}

export default Header;