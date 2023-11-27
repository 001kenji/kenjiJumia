import React from "react";
import Cater from "./JS/leftwingCategories";
import '../src/App.css'
import Navbar from "./JS/navbar";
function CategoriesWeb () {
    return(
        <>
        <div id='myNavbar'>
    <Navbar />
  </div>
        <div id="leftWeingCategories">
        <Cater />
        </div>
        </>
    )
}

export default CategoriesWeb