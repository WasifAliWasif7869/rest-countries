"use client"
import React, { useState } from "react"
import Card from "./Card"
import { CountryDataContext } from "../Context/CountryDataContext"
import { IoSearch } from "react-icons/io5"
import { IoIosArrowDown } from "react-icons/io"
import Link from "next/link"
import { FaArrowUp } from "react-icons/fa6"

const CardContainer = ({ data }) => {
  const [allData, setAllData] = useState(data)
  const [search, setSearch] = useState("")

  const GetSearch = (e) => {
    setSearch(e.target.value)
    setAllData(
      data.filter((country) => {
        return (
          country.name.common.toLowerCase().includes(e.target.value.toLowerCase()) ||
          country.region.toLowerCase().includes(e.target.value.toLowerCase()) ||
          (country.capital
            ? country.capital[0].toLowerCase().includes(e.target.value.toLowerCase())
            : "")
        )
      })
    )
  }

  const toggleDropDown = (e) => {
    document.querySelector("#black").classList.remove("hidden")
    document.querySelector(".all-other-options").classList.toggle("hidden")
  }

  const SearchFilter = (e) => {
    e.stopPropagation()
    if (
      e.target.innerText !== "No Filter" &&
      !Array.from(e.target.classList).join(" ").includes("all-other-options")
    ) {
      setAllData(
        data.filter((country) => {
          return country.region.toLowerCase().includes(e.target.innerText.toLowerCase())
        })
      )
      const showText = document.querySelector("#first-to-show")
      const previousText = showText.innerText
      showText.innerText = e.target.innerText
      e.target.innerText = previousText
      e.currentTarget.classList.add("hidden")
      document.querySelector("#black").classList.add("hidden")
    } else if (e.target.innerText == "No Filter") {
      setAllData(data)
      const showText = document.querySelector("#first-to-show")
      const previousText = showText.innerText
      showText.innerText = e.target.innerText
      e.target.innerText = previousText
      document.querySelector("#black").classList.add("hidden")
      e.currentTarget.classList.add("hidden")
    }
  }

  const dismissFilter = (e) => {
    document.querySelector(".all-other-options").classList.add("hidden")
    e.target.classList.add("hidden")
  }

  return (
    <>
      <div className="bg-[#f3f2f0] p-4 pt-14 dark:bg-[#202c37]">
        <div className="search-filter flex justify-between items-center max-w-[85%] mx-auto">
          <div
            className="search dark:bg-[#2b3945] bg-white flex p-4 gap-2 px-6 rounded-sm"
            onClick={(e) => {
              e.currentTarget.children[1].focus()
            }}
          >
            <IoSearch className="text-2xl cursor-pointer" />
            <input
              value={search}
              onChange={GetSearch}
              type="text"
              name="country"
              id="search"
              className="dark:bg-inherit outline-none border-none w-[300px]"
              placeholder="Search for a country..."
            />
          </div>
          <div className="filter relative z-10">
            <div
              className="dark:bg-[#2b3945] bg-white p-3 px-12 flex gap-1 justify-center items-center rounded-lg cursor-pointer"
              onClick={toggleDropDown}
            >
              <p id="first-to-show">No Filter</p>
              <IoIosArrowDown />
            </div>
            <div
              className="all-other-options hidden absolute z-10 dark:bg-[#2b3945] bg-white top-14 rounded-lg cursor-pointer"
              onClick={SearchFilter}
            >
              <p className="dark:hover:bg-slate-800 hover:bg-slate-200 px-12 m-2 py-1 rounded-lg">
                Africa
              </p>
              <p className="dark:hover:bg-slate-800 hover:bg-slate-200 px-12 m-2 py-1 rounded-lg">
                America
              </p>
              <p className="dark:hover:bg-slate-800 hover:bg-slate-200 px-12 m-2 py-1 rounded-lg">
                Asia
              </p>
              <p className="dark:hover:bg-slate-800 hover:bg-slate-200 px-12 m-2 py-1 rounded-lg">
                Europe
              </p>
              <p className="dark:hover:bg-slate-800 hover:bg-slate-200 px-12 m-2 py-1 rounded-lg">
                Oceania
              </p>
            </div>
          </div>
        </div>
        <div className="main-container">
          <CountryDataContext.Provider value={{ allData, setAllData }}>
            <div className="country-container max-w-[85%] mx-auto py-16 flex flex-wrap justify-around gap-16">
              {allData.map((country, index) => {
                return (
                  <Link href={`/country/${country.name.common}`} key={index}>
                    <Card countryData={JSON.parse(JSON.stringify(country))} />
                  </Link>
                )
              })}
            </div>
          </CountryDataContext.Provider>
        </div>
      </div>
      <div
        id="black"
        onClick={dismissFilter}
        className="bg-black opacity-50 fixed top-0 z-0 hidden w-[100vw] h-[100vh]"
      ></div>
      <a href="#" title="Go to Top" className="fixed bottom-16 right-12 rounded-full p-5 dark:bg-[#2b3945] cursor-pointer shadow-md hover:animate-bounce shadow-black"><FaArrowUp /></a>
    </>
  )
}

export default CardContainer
