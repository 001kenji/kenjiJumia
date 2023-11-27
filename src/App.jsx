import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './mainpage.css'
import './App.css'
import '../src/CSS/navbar.css'

import cart from '../src/assets/icons/cart.png'
import facebook from './assets/facebook.png'
import tiktok from './assets/tiktok.png'
import instagram from './assets/instagram.png'
import Header from './JS/header'
import CardAnimator from './JS/cardAnimator'
import LastViewed from './JS/lastViewed'
import Variables from './JS/variables'
import LastSearch from './JS/lastSeach'
import frammer from './CSS/universal.module.css'
import Navbar from './JS/navbar'

function App() {
 var name = 'kenji'
return (
<>
<div id='bodyApp'>
  <div id='myNavbar'>
    <Navbar />
  </div>

<Header />

  <CardAnimator />
  <LastViewed />
  <Variables />
  <LastSearch />
</div>


</>
  )
}

export default App
