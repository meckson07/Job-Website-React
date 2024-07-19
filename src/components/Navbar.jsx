import react, { useState } from'react'
import logo from '../assets/react.svg'
import { Link } from 'react-router-dom'

const Navbar=()=>{
    const [currentPage,setCurrentPage]=useState("homepage")

    const handleTogglePage=(currentPage)=>{
        setCurrentPage(currentPage)
    }
    return(
       <nav className='navbar'>
            <div className='navbat-details'>
                <img src={logo} className='navbar-logo'></img>
                <h3 className='navbar-heading'>React Jobs</h3>
            </div>
            <div>
                <ul className='navbar-menu'> 
                    <li className='menu-items' style={{backgroundColor:currentPage =="homepage"?"black":"blue"}}>
                        <Link className='link'  onClick={()=>{handleTogglePage("homepage")}} to={"/"}>Home</Link>
                    </li>
                    <li className='menu-items' style={{backgroundColor:currentPage =="viewpage"?"black":"blue"}}>
                        <Link className='link'  onClick={()=>{handleTogglePage("viewpage")}} to={"/viewjobs"}>Jobs</Link>
                    </li>
                    <li className='menu-items' style={{backgroundColor:currentPage =="addpage"?"black":"blue"}}>
                        <Link className='link' onClick={()=>{handleTogglePage("addpage")}} to={"/addjob"}>Add Job</Link>
                    </li>
                </ul>
            </div>
       </nav>
    )
}

export default Navbar