import React from "react";
import { NavLink }  from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default  function Navbar() {
    return (


     <header className="bg-red-600">

      <div className="container mx-auto flex justify-between">

      <nav className="flex">

     <NavLink to="/" exact  activeClassName="text-white" className="inflex-flex  items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold  cursive  tracking-widest">Harshill</NavLink>

     <NavLink to="/post"  activeClassName="text-red-100 bg-red-700"  className="inline-flex items-center py-3  px-3  my-6 text-red-200 hover:text-green-800">Blog Posts</NavLink>

     <NavLink to="/about" activeClassName="text-red-100 bg-red-700" className="inline-flex items-center py-3  px-3  my-6 text-red-200 hover:text-green-800">About Me</NavLink>

     <NavLink to="/project" activeClassName="text-red-100 bg-red-700"  className="inline-flex items-center py-3  px-3  my-6 text-red-200 hover:text-green-800">Projects</NavLink>

     

     </nav>

     <div className="inline-flex py-3 px-3 my-6">

     <SocialIcon url="https://www.instagram.com/artmystic81/" className="mr-4" target="_blank"  fgColor="#fff" style={{height:35 ,width:35}} />

     <SocialIcon url="https://www.facebook.com/sheetu.tyagi.9/" className="mr-4" target="_blank"  fgColor="#fff" style={{height:35 ,width:35}} />

     <SocialIcon url="https://www.linkedin.com/in/harshill-tyagi-88524bb7/n" className="mr-4" target="_blank"  fgColor="#fff" style={{height:35 ,width:35}} /> 

     </div>

     </div>

     </header>

    )

           
}