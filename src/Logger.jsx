
import { useState, useRef, useCallback } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserWritter from './JS/userwriter.js'
import AllUsers from '../src/Files/UsersLogger.json'
import './App.css'
import UserIcon from '../src/assets/icons/user.png'
import emailIcon from '../src/assets/icons/email.png'
import gmailIcon from '../src/assets/icons/gmail.png'
import passIcon from '../src/assets/icons/passcode.png'
import trial from '../src/Files/trial.json'

function Logger() {
  
  const [wrong, setwrong] = useState(false)
  const [Sign,setSign] = useState(true)
 
var username = document.getElementById('UserName')
var password = document.getElementById('Password')

const [data, setdata] = useState(() => {
  return({
  UserName : '',
  pass : "",
  gmail : "",
})  });

const MyVal =  (event) => {
  const {value, name} = event.target
  setdata((data) => {
    return{
      ...data,
      [name] : value
    }
    
  })
}
const Checker = useCallback(() => {
  console.log(data.pass)
 AllUsers.map((details) =>
 {
  if(details.username == data.UserName, details.password == data.pass ){
    window.open('../home.html')
    window.close('../index.html')
  }else{
    
    setSign(true)
    setwrong(true)
  }
 }
 )
})

function setSignFunction () {
  setSign(false)
}

function SignUp(event){
  
  
  const {value, name} = event.target
  setdata((data) => {
    return{
      ...data,
      [name] : value
    }
    
  })
   AllUsers.push(JSON.stringify(data))
  setSign(true)
 
  window.close('../index.html')
   window.open('../home.html')
}
  return(
    <>
  
    <div id='LoggerBody'>
      <div id='omega'>
        <div id="logIn">
          <div id='UserIconDiv'><img id='UserIcon' src={UserIcon}></img></div>
          <div id='logInDiv'>
          {Sign && <form id='logInForm'>
              {wrong && <p id='wrong'>Incorrect Password or UserName</p>}
              <div id='userNameDiv'><img src={emailIcon}></img><input name='UserName' value={data.UserName} onChange={MyVal} placeholder='UserName' type='text'></input></div>
              <div id='PasswordDiv'><img src={passIcon}></img><input required name='pass' value={data.pass} onChange={MyVal} placeholder='Password' type='password'></input></div>
              <div id='moreActionDiv'>
                <button onClick={setSignFunction} type='button' id='SingInBtn'>Sign Up</button>
                <button type='button' id='ForgotBtn'>Forgot Password</button>
              </div>
              <div  id='LoggerDiv'><button onClick={Checker} type='submit'>LOGIN</button></div>
            </form>}
          {!Sign && <form onSubmit={SignUp} id='logInForm'>
              {wrong && <p id='wrong'>Incorrect Password or UserName</p>}
              <div id='userNameDiv'><img src={emailIcon}></img><input required name='UserName' value={data.UserName} onChange={MyVal} placeholder='UserName' type='text'></input></div>
              <div id='PasswordDiv'><img src={passIcon}></img><input required name='pass' value={data.pass} onChange={MyVal} placeholder='Password' type='password'></input></div>
              <div id='PasswordDiv'><img required src={gmailIcon}></img><input required name='gmail' value={data.gmail} onChange={MyVal} placeholder='gmail' type='email'></input></div>
              <div id='moreActionDiv'>
                <button  type='submit' id='SingInBtn'>Sign Up</button>
                
              </div>
            
            </form>}
          </div>
        </div>
        
      </div>
      <div id='welcomeDiv'><img id='welcomeImg'></img></div>
    </div>
    </>
  )
}

export default Logger
