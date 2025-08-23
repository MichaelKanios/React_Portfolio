import { useState } from "react";
import{NavLink} from "react-router"
import { FaLaptopCode,FaTimes,FaBars } from "react-icons/fa";

const Navbar = () => {

    const base="transition hove:text-blue-400"
    const active="text-blue-400 font-semibold"
    const[menuOpen,setMenuOpen]=useState(false);


    return ( 
    <nav className="bg-gray-800 norder-b border-gray-700 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between item-center">
            <NavLink to="/" className="flex items-center gap-2 text-lg font-bold text-blue-300">
                <FaLaptopCode className="text-blue-400 text-xl"/>
                <span>The Friendy Developer</span>
            </NavLink>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
                <div className="space-x-4 text-sm text-gray-300">
                    <NavLink className={({isActive})=> isActive ? active:base}to="/">Home</NavLink>
                    <NavLink className={({isActive})=> isActive ? active:base}to="/projects">Projects</NavLink>
                    <NavLink className={({isActive})=> isActive ? active:base}to="/blog">Blog</NavLink>
                    <NavLink className={({isActive})=> isActive ? active:base}to="/about">About</NavLink>
                    <NavLink className={({isActive})=> isActive ? active:base}to="/contact">Contact</NavLink>
                </div>
            </div>

            {/* Hamburger Menu*/}
            <div className="md:hidden flex items-center gap-4">
                <button onClick={()=>setMenuOpen(!menuOpen)}className="text-blue-400 text-xl cursor-pointer" title="Menu">
                    {menuOpen?<FaTimes/>:<FaBars/>}
                </button>

            </div>
        </div>

        {/* Mobile Nav */}
        {
            menuOpen &&(
                <div className="md:hidden bg-gray-800 border-t
                 border-gray-700 px-6 py-4 space-y-2 space-x-4 
                 text-center">
                    <NavLink className={({isActive})=> isActive ? active:base}to="/"
                        onClick={()=>setMenuOpen(false)} //Οταν πατας τα link κλεινει το menu
                        >Home</NavLink>
                    <NavLink className={({isActive})=> isActive ? active:base}to="/projects"onClick={()=>setMenuOpen(false)}>Projects</NavLink>
                    <NavLink className={({isActive})=> isActive ? active:base}to="/blog"onClick={()=>setMenuOpen(false)}>Blog</NavLink>
                    <NavLink className={({isActive})=> isActive ? active:base}to="/about"onClick={()=>setMenuOpen(false)}>About</NavLink>
                    <NavLink className={({isActive})=> isActive ? active:base}to="/contact"onClick={()=>setMenuOpen(false)}>Contact</NavLink>
                </div>
               
            )
        }
    </nav> );
}


export default Navbar;