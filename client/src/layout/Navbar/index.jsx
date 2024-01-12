import React, { useState } from 'react'
import './navbar.scss'
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Navbar() {
const [openNavbar, setOpenNavbar] = useState(false)

function handleOpenNavbar() {
  setOpenNavbar(!openNavbar)
}
  return (
    <nav>
<Link className='link' to={"/"}>Nitro.</Link>

<ul>
  <li> <Link className='link' to={"/"}>Home</Link></li>
  <li> <Link className='link' to={"/about"}>About us</Link></li>
  <li> <Link className='link' to={"/portfolio"}>Portfolio</Link></li>
  <li> <Link className='link' to={"/services"}>Services</Link></li>
  <li> <Link className='link' to={"/testimonials"}>Testimoniols</Link></li>
  <li> <Link className='link' to={"/blog"}>Blog</Link></li>
  <li> <Link className='link' to={"/contact"}>Contact</Link></li>
  <li> <Link className='link' to={"/add"}>Add</Link></li>
</ul>
<div className="menuBox" onClick={handleOpenNavbar}>
{openNavbar ? <IoMdClose />  : <IoMenu />}
</div>
<div className={`navbarResp ${openNavbar ? "isOpen" : ""}`}>
<ul>
  <li> <Link className='link' to={"/"}>Home</Link></li>
  <li> <Link className='link' to={"/about"}>About us</Link></li>
  <li> <Link className='link' to={"/portfolio"}>Portfolio</Link></li>
  <li> <Link className='link' to={"/services"}>Services</Link></li>
  <li> <Link className='link' to={"/testimonials"}>Testimoniols</Link></li>
  <li> <Link className='link' to={"/blog"}>Blog</Link></li>
  <li> <Link className='link' to={"/contact"}>Contact</Link></li>
  <li> <Link className='link' to={"/add"}>Add</Link></li>
</ul>
</div>
    </nav>
  )
}

export default Navbar