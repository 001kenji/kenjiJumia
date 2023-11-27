import React, { useRef, useState } from "react";
import Navbar from "./navbar";
import '../App.css'
import chart from '../assets/icons/chat.png'
import rightArrow from '../assets/icons/rightArrow.png'

 function Help(){
    const AppVersion = '12.4.3'
    var CacheData = '2.54 MB'
    const notificationDiv = useRef();
    const [Push, setPush] = useState(true)
    const pushStyler = {
        justifyContent: Push ? 'start' : 'end',
        backgroundColor : Push ? 'grey' : 'orange',
        borderColor : Push ? 'grey' : 'orange'
    }
    function Notifire (){
        var notifireDiv = document.getElementById('notificationDiv')
       setPush((e) => !e)
    
    }
    function ClearCache () {
       return CacheData = ''
    }
    return(
        <>
        <div>
        <div id='myNavbar'>
            <Navbar />
        </div>
        </div>
        <div id="chatDiv">
          <button id="chatBtn">
            <img src={chart}></img>
            <span>Start live Chat</span>
          </button>
        </div>
        <div  id='accountDiv'>
            <span>ABOUT JUMIA</span>
            <button id='accountOrderBtn'>
                <p>Jumia Services</p>
                <img id='rightArrow' src={rightArrow} alt="" />
            </button>
            <button id='accountOrderBtn'>
                <p>Frequently Asked Questions</p>
                <img id='rightArrow' src={rightArrow} alt="" />
            </button>
            <button id='accountOrderBtn'>
                <p>Privacy Policy</p>
                <img id='rightArrow' src={rightArrow} alt="" />
            </button>
        </div>
        <div  id='accountDiv'>
            <span>SETTINGS</span>
            <button id='accountOrderBtn'>
                <p>Push Notifications</p>
                <div style={pushStyler} onClick={Notifire} ref={notificationDiv} id='notificationDiv'><span></span></div>
            </button>
            <button id='accountOrderBtn'>
                <p>Country</p>
               
                <select id="LocationContainer">
                    <option disabled selected>Location</option>
                    <option value="kenya">kenya</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Ethopia">Ethopia</option>
                </select>
            </button>
            <button id='accountOrderBtn'>
                <p>Language</p>
                
                <select id="LocationContainer">
                    <option disabled selected>Language</option>
                    <option value="English">English</option>
                    <option value="Kiswahili">Kiswahili</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                </select>
            </button>
        </div>
        <div  id='accountDiv'>
            <span>APP INFO</span>
            <button id='appVersionBtn'>
                <p>App Version: {AppVersion} </p>
                <button id="clearCache">UPDATE</button>
            </button>
            <button id='CacheBtn'>
                <p>Cache Used: {CacheData} </p>
                <button onClick={ClearCache} id="clearCache">CLEAR</button>
            </button>
           <hr></hr>
        </div>
        </>
    )
}


export default Help