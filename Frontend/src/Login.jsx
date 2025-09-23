import {useState} from 'react'
import './Login.css' 


function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username.trim() && password.trim()){
            onLogin();
        }else{
            alert('enter valid username and password')
        }
    }

    return(
        <>
        <div className='mainPage'>
            <h1 className='heading'>Welcome to AI-Check</h1>
            <div className='login'>
                <form onSubmit={handleSubmit}>
                    <h2>Login: </h2>
                    <input className='input' type="email" placeholder='Enter your email' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <br /><br />
                    <input className='input' type="text" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br /> <br />
                    <div className='button'>
                        <button className='button' type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login