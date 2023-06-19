import React, { useState } from 'react';
import './Sign.css';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  let n=useNavigate();
  const [lfullname, setFullname] = useState('');
  const [lusername, setUsername] = useState('');
  const [lpassword, setPassword] = useState('');

  const handleSignup = async(e) => {
    e.preventDefault();

    if(lfullname==""){
      alert("Enter the fullname");
    }
    else if(lusername==""){
      alert("Enter the username");
    }
    else if(lpassword==""){
      alert("Enter the password");
    }
    else{
      let mydata={
        username:lfullname,
        email:lusername,
        password:lpassword
      }
      
      let result= await axios.post("http://localhost:8080/hostaa/logindara",mydata)
      alert(result.data);
      if(result.data == "added"){
       n("/Login") 
      }
      else{
        
      }
    }

  };

  return (
    <div className="Sback">
      <div>
        <div className="login-container">
          <div className="login-card">
            <h2>Signup</h2>
            <form>
              <div className="input-group">
                <input type="text" placeholder="username" value={lfullname} onChange={(e) => setFullname(e.target.value)} required />
              </div>
              <div className="input-group">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="email" value={lusername} onChange={(e) => setUsername(e.target.value)} required />
              </div>
              <div className="input-group">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" value={lpassword} onChange={(e) => setPassword(e.target.value)} required />
              </div>

              <Button type="submit" onClick={handleSignup} variant="contained">Signup</Button>
              <div className="forgot-password">
                <h3>If you already signed up?</h3>
                <a href="/Login">Login</a><br/><br/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
