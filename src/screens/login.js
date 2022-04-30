import '../css/login.css'
import { useState,useContext, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { AuthContext } from '../context/authProvider';
import axios from '../api/axios';
import { useToasts } from 'react-toast-notifications';


const LOGIN_URL = '/signin';

export default function LoginCard() {
  
  const navigate = useNavigate();
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');



  const {setToken,setRole} = useContext(AuthContext);
  const { addToast } = useToasts();
  useEffect(()=>{
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
    setToken('');
    setRole('');
  },[])

  const handleSubmit= async (props)=>{
    props.preventDefault();

    
    try{
      const response = await axios.post(LOGIN_URL,JSON.stringify({email,password}));
      console.log(response.data);
      console.log(response.data.token);
    sessionStorage.setItem('token',response.data.token);
    sessionStorage.setItem('role',response.data.user.role);
    setToken(response.data.token);
    setRole(response.data.user.role);
    setEmail('');
    setPassword('');

    response.data.user.role=='user'?navigate('/home'):navigate('/home/books');
    console.log("done");
    addToast('succesful', { appearance: 'success' });
    }
    catch(e){
      addToast(e.response.data,{ appearance: 'error' });
      console.log(e.response.data);
    }
    
  }

  return (
    <><div id="triangle-up"></div>
    <div className="wrapper">
      
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input 
          type="email"
          htmlFor='email'
          autoComplete='off'
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          required />
          <label htmlFor='email'>Email Address</label>
        </div>
        <div className="field">
          <input type="password"
          htmlFor='password'
          autoComplete='off'
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          required 
          />
          <label htmlFor='password'>Password</label>
        </div>
        <div className="content">
          <div className="checkbox">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <div className="pass-link"><a href="#">Forgot password?</a></div>
        </div>
        <div className="field">
          <input type="submit" value="Login" />
        </div>
       
        <div className="signup-link">Not a member?  <Link to='/signup'>Signup now</Link></div>
      </form>
    </div>
    </>
  );
}