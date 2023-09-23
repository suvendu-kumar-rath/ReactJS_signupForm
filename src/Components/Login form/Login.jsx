import React from 'react'
import './Login.css'

import user_icon from '../Assets/user.png'
import password_icon from '../Assets/password.png'
import email_icon from '../Assets/email.png'
const Login = () => {
  return (
    <div className="container">
        <form>
        <fieldset>
        <legend>WELCOME</legend>
        <div className="header">
            <div className="text">Sign up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" />
            </div>

            <div className="input">
                <img src={email_icon} alt="" />
                <input type='email' placeholder='Enter your email' />
            </div>

            <div className="input">
                <img src={password_icon} alt="" />
                <input type='password' placeholder='Enter your password'/>
            </div>

            <div className='input'>
                <label for="address">Address</label>
                <textarea cols="30" rows="2"></textarea>
            </div>


            <div className="input">
                <label for="gender">Gender  :</label>
                <input type='checkbox'/>
                <label for="male">Male   </label>
                <input type='checkbox'/>
                <label for="female">Female</label>
            </div>

            <div className='input'>
            <label for="Language">Language :   </label>
                <select>
                    <option>Select</option>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>Hindi</option>
                    <option>Odia</option>
                </select>
            </div>

            <div className='input'>
                <label for="dob">D.O.B :   </label>
                <input type='date' />
            </div>

            <div className='input'>
                <label for="phonenumber">Phone Number :   </label>
                <input type='number' />
            </div>

            <div className='input'>
                <label for="nationality">Nationality :   </label>
                <select>
                    <option>Select</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>Newzland</option>
                    <option>Nepal</option>
                </select>
            </div>

            <div className='submit-button'>
                <input type='submit' name="Submit" />
                <input type='reset' name="reset" />
            </div>



        </div>
        </fieldset>
        </form>
    </div>
    
  );
};

export default Login;