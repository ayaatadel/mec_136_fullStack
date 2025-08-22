import React, { use } from 'react'
import './NavBar.css'
import { useSelector } from 'react-redux';
export default function NavBar() {
  const counter = useSelector(state=>state.counter.value);
  return (
    <>
 
<nav>
    <ul >
      <li>
        Home
    </li>
    <li>
        About
    </li>
    <li>
        Contact
    </li>
    <li>
        Counter :{counter}
    </li>
   </ul>
</nav>
    </>
  )
}
