import React, { useContext, useEffect, useMemo, useReducer, useRef, useState } from "react";

import { ReactDOM } from "react";
import '../CSS/choices.css'
import file1 from '../Files/itemjson.txt'
import phones from '../Files/phones.json'
import TVs from '../Files/tvs & audio.json'
import appliances from '../Files/appliances.json'
import health from '../Files/health.json'
import home from '../Files/home.json'
import fashion from '../Files/fashion.json'
import computing from '../Files/computing.json'
import supermarket from '../Files/supermarket.json'
import sporting from '../Files/sporting.json'
import baby from '../Files/baby.json'
import gaming from '../Files/gaming.json'
import garden from '../Files/garden.json'
import { data } from "autoprefixer";
import { createContext } from "react";

function Cater() {
const [category, setcategory] = useState([])    
const myChoiceButton = useRef();
const [choiceUrl, setChoiceUrl] = useState()
const dispChoice1 = document.getElementById('dispChoice1')
const dispChoice2 = document.getElementById('dispChoice2')
const dispChoice3 = document.getElementById('dispChoice3')
const product = category
var my = [{name : 'kenji'}]
const [determiner, setDet] = useState(true)
useEffect(() =>{
    
},[determiner])
var set1;
var set2;
var set3;
function FeetchContent(props) {
    setDet((e) => !e)
   dispChoice1.innerHTML =  props.map((items) => 
    //    <p id="lastdiscout">${items.discount}</p>
 `  <div id="lastCardContainer">
  
       <img id="lastViewedImg" src=${items.imagePath} ></img>
       <p id="lastViewedTitle">${items.productName}</p>
       <textarea id="lastViewedDetails" disabled>${items.description}</textarea>
   </div>`
   )
//    dispChoice2.innerHTML =  props.map((items) => 
// //    <p id="lastdiscout">${items.discount}</p>
//    `<div id="lastCardContainer">
         
//          <img id="lastViewedImg" src=${items.imagePath} ></img>
//          <p id="lastViewedTitle">${items.productName}</p>
//          <textarea id="lastViewedDetails" disabled>${items.description}</textarea>
//      </div>`
//      )
//      dispChoice3.innerHTML =  props.map((items) => 
//     //  <p id="lastdiscout">${items.discount}</p>
//      `  <div id="lastCardContainer">
          
//            <img id="lastViewedImg" src=${items.imagePath} ></img>
//            <p id="lastViewedTitle">${items.productName}</p>
//            <textarea id="lastViewedDetails" disabled>${items.description}</textarea>
//        </div>`
//        )
   
}


    return(
    <>
    <div id="cater">
        <div id="alpha">
            <div id="choicesContainer">
            <div id="choices">
                
                <button onClick={() => FeetchContent(phones)}  ref={myChoiceButton}>Phones & Tables</button>
                <button onClick={() => FeetchContent(TVs)} ref={myChoiceButton}>TVs & Audio</button>
                <button onClick={() => FeetchContent(appliances)} ref={myChoiceButton}>Appliances</button>
                <button onClick={() => FeetchContent(health)} ref={myChoiceButton}>Health & Beuty</button>
                <button onClick={() => FeetchContent(home)} ref={myChoiceButton}>Home & Office</button>
                <button onClick={() => FeetchContent(fashion)} ref={myChoiceButton}>Fashion</button>
                <button onClick={() => FeetchContent(computing)} ref={myChoiceButton}>Computing</button>
                <button onClick={() => FeetchContent(supermarket)} ref={myChoiceButton}>Supermarket</button>
                <button onClick={() => FeetchContent(sporting)} ref={myChoiceButton}>Sporting Goods</button>
                <button onClick={() => FeetchContent(baby)} ref={myChoiceButton}>Baby Products</button>
                <button onClick={() => FeetchContent(gaming)} ref={myChoiceButton}>Gaming</button>
                <button onClick={() => FeetchContent(garden)} ref={myChoiceButton}>Garden & Outdoors</button>
                
            </div>
            <hr id="hr1" />
            </div>
        </div>
        <div id="omegaChoiceContainer">
            <div id="dispCardsContainer">
                <div id="dispChoice1"></div>
                <div id="dispChoice2"></div>
                <div id="dispChoice3"></div>
            </div>
        </div>
    </div>
    </>
    
    )
}

export default Cater 