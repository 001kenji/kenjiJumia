import React from "react";
import '../App.css'
import cart from '../assets/icons/cart.png'
import facebook from '../assets/facebook.png'
import tiktok from '../assets/tiktok.png'
import instagram from '../assets/instagram.png'

export default function Navbar() {
    return (
        <>
        <div id='myHeader'>
            <div>
                <span id='refresh'>REFRESH</span>
            </div>
            <div className='md:w-94'  id='itemSearch'>
                <input placeholder='🔍 Search on jumia' type="text" />
                <button><img className=' bg-white rounded-md  w-8 h-8' src={cart}></img></button>
                <div id='socialdiv'>
                <a href='https://web.facebook.com/login/?_rdc=1&_rdr'><img id='socialIcon' src={facebook}></img></a>
                <a href="https://www.instagram.com/accounts/login/?hl=en"><img id='socialIcon' src={instagram}></img></a>
                <a href=""><img id='socialIcon' src={tiktok}></img></a>
                
                
            </div>
            </div>
        {/* <hr id="hr1"/> */}
        <div id='choicesBar'>
    <a href="../home.html"><button>Home</button></a>
    <a href="../Categories.html"><button>Categories</button></a>
    <a href="../feed.html"> <button>feed</button></a>
    <a href="../account.html"><button>Account</button></a>
    <a href="../help.html"><button>Help</button></a>
   </div>

        </div>
        
        </>
    )
}
