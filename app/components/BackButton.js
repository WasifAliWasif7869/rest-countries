"use client"
import { useRouter } from "next/navigation"
import React from "react"
import { FaArrowLeftLong } from "react-icons/fa6"

const BackButton = () => {
  const router = useRouter()
  const GoBack = ()=>{
    router.back()
  }
  return (
    <div className="BackButton">
      <button
        className="flex items-center justify-center rounded-lg shadow-md gap-2 p-2 px-7 cursor-pointer dark:hover:bg-[#222f3a] shadow-black dark:bg-[#2b3945]"
        onClick={GoBack}
      >
        <FaArrowLeftLong /> Back
      </button>
    </div>
  )
}

export default BackButton
