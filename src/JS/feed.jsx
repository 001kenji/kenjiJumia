import React from "react";
import '../CSS/feed.css'
import trolley from '../assets/icons/cart.png'
import search from '../assets/icons/search.png'
import Navbar from "./navbar";
export default function Feed(){
 
    const searchImg = document.getElementById('search')
   

   function MyCart(){
    const howMany = document.getElementById('howMany')

    alert(howMany.innerHTML)
   }
   var EmojiFeed = document.getElementById('EmojiFeed')
 function EmojiFunc (){
    
 }
    return(
        <>
        <div id='myNavbar'>
            <Navbar />
        </div>
        <div id="head">
            <h1>Feed</h1>
            <div id="head-nav">
           <span onClick={EmojiFunc} id="EmojiFeed">&#128513;</span>
            </div>
        </div>
        </>
    )
}