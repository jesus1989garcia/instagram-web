import React from 'react'
import insta from '../imgs/Instagram-Logo.png'
import fb from '../imgs/fb-logo.png' 
import gplay from '../imgs/google-play-logo.png'
import apple from '../imgs/app-store-logo.png'


function Form() {

  return(
    <div className="right-comp">
      
      <div className="form-div">
      <img src={insta} className="insta"></img>
      <form className="form">
        <input type="text" name="username" placeholder="Phone number, username or email"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <button type="submit" >Log In</button>
      </form>
      <div className="or-div">
      <hr/><p>OR</p><hr/>
      </div>
      <div className="alt-login">
        <div className="facebook-div">
          <img src={fb} className="fb-logo"></img>
          <a>Log in with facebook</a>
        </div>
        
        <a>Forgot password?</a>
      </div>
      
      </div>
      <div className="signup">
        <p style={{paddingRight:"20px"}}>Don't have an account?</p>
        <a style={{color:"#0095f6"}}>Sign up</a>
      </div>
      <div className="get-app">
        <p>Get the app</p>
        <div className="getapp">
          <img src={gplay}></img>
          <img src={apple}></img>
        </div>
      </div>
     
    </div>
  )

}

export default Form