"use client"
import React, { useState } from "react"
import Card from "./Card"
import { CountryDataContext } from "../Context/CountryDataContext"
import { IoSearch } from "react-icons/io5"

const CardContainer = ({ data }) => {
  const [allData, setAllData] = useState(data)
  const [search, setSearch] = useState("")

  const GetSearch = (e)=>{
    setSearch(e.target.value)
    setAllData(data.filter((country)=>{
        return country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    }))
    console.log(allData)
  }

  return (
    <div className="bg-[#f3f2f0] p-4 dark:bg-[#202c37]">
      <div className="search-filter flex justify-between max-w-[85%] mx-auto">
        <div className="search dark:bg-[#2b3945] bg-white flex p-4 gap-2 px-6 rounded-sm" onClick={e=>{(e.currentTarget.children[1].focus())}}>
          <IoSearch className="text-2xl cursor-pointer"/>
          <input value={search} onChange={GetSearch} type="text" name="country" id="search" className="dark:bg-inherit outline-none border-none w-[300px]" placeholder="Search for a country..."/>
        </div>
        <div className="filter">
            <select name="region" id="region">
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
      </div>
      <div className="main-container">
        <CountryDataContext.Provider value={{ allData, setAllData }}>
          <div className="country-container max-w-[85%] mx-auto py-16 flex flex-wrap justify-around gap-16">
           {allData.map((country) => {
              return (
                <Card key={country.name.common} countryData={JSON.parse(JSON.stringify(country))} />
              )
            })}
          </div>
        </CountryDataContext.Provider>
      </div>
    </div>
  )
}

export default CardContainer
