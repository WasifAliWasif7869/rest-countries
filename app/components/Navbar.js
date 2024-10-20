"use client"
import React, { useEffect } from "react";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const toogleDarkMode = (e)=>{
    const current = localStorage.getItem("dark")
    if(current == "true"){
      document.body.parentElement.classList.remove("dark")
      document.querySelector(".color-text").innerText = "Dark Mode"
      localStorage.setItem("dark", false)
    } else{
      document.body.parentElement.classList.add("dark")
      document.querySelector(".color-text").innerText = "Light Mode"
      localStorage.setItem("dark", true)
    }
  }

  useEffect(() => {
    const current = localStorage.getItem("dark")
    if(current == "true"){
      document.querySelector(".color-text").innerText = "Light Mode"
      document.body.parentElement.classList.add("dark")
    }
    document.addEventListener("keypress", (e)=>{
      if(e.key === "/")
        document.querySelector("#search").focus()
    })
  }, [])
  



  return (
    <div className="navbar-container py-4 shadow-md dark:bg-[#2b3945]">
      <div className="navbar flex justify-between max-w-[85%] mx-auto">
        <a href="/" className="content font-semibold text-2xl">Where in the world?</a>
        <div className="dark-mode flex items-center text-lg cursor-pointer gap-1" onClick={toogleDarkMode}>
          <MdOutlineDarkMode />
          <span className="color-text">Dark Mode</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
