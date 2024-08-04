import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import { register, login } from '../../services/authService'; // Import the authService
import './login.css'; // Import your CSS file
// import styles from  './login.module.css'; // Import your CSS file
import user_icon from '../../assets/person.png';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';

const Login = () => {
  const [action, setAction] = useState("Register");
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    try {
      const data = await register(username, email, password);
      setMessage(data.message);
    } catch (error) {
      setMessage(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      setMessage(data.message);
      // Optionally, you can store the user data or token in local storage here
      navigate('/home'); // Navigate to the home page on successful login
    } catch (error) {
      setMessage(error);
    }
  };

  return (
    <div className='login'>
      <div className='container'>
        <div className='submit-container'>
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Register") }}>Register</div>
          <div className={action === "Register" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
        </div>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={action === "Login" ? handleLogin : handleRegister}>
          <div className='inputs'>
            {action === "Login" ? <div></div> : (
              <div className='input'>
                <img src={user_icon} alt=""></img>
                <input type="text" placeholder='Name' value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>
            )}
            <div className='input'>
              <img src={email_icon} alt=""></img>
              <input className='email' type="email" placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className='input'>
              <img src={password_icon} alt=""></img>
              <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            {action === "Login" ? <div></div> : (
              <div className='input'>
                <img src={password_icon} alt=""></img>
                <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              </div>
            )}
            <input className='final-submit' type="submit" value={action} />
          </div>
        </form>
        {message && <div className='message'>{message}</div>}
        {action === "Register" ? <div></div> : (
          <div className='forgot-password'>
            Forgot Password?<span> click here </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
