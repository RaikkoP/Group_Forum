import './Header.css';

const Header = ({setLoginStatus, username}: any) => {

    const usernameStyle = {
        color: 'white',
        padding: '5px',
        marginRight: '15px',
        marginLeft: 'auto'
    }

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
            {
                username != null ? <h3 style={usernameStyle}>{username}</h3> :   <div className='buttons'>
                <button onClick={() => setLoginStatus('Login')}>Login</button>
                <button onClick={() => setLoginStatus('Register')}>Register</button>
            </div>
            }
        </header>
    )
}

export default Header;