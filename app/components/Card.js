"use client"
import React, { useContext } from "react"
import { CountryDataContext } from "../Context/CountryDataContext"


const Card = ({ countryData }) => {
  const contextData = useContext(CountryDataContext)
  const Detail = (e) => {
    console.log(contextData.allData)
  }
  return (
    <div className="country-card shadow-lg w-fit bg-white dark:bg-[#2b3945] pb-2 rounded-md cursor-pointer hover:scale-[1.1] transition duration-300" onClick={Detail}>
      <div className="image-container overflow-hidden">
        <img
          src={countryData.flags.svg}
          className="border-black border-1 rounded-md w-[330px] object-cover object-center h-[200px]"
        />
      </div>
      <h2 className="font-bold p-5">{countryData.name.common}</h2>
      <div className="short-info pl-5">
        <div>
          <span className="font-semibold">Population: </span>
          {countryData.population}
        </div>
        <div>
          <span className="font-semibold">Region: </span>
          {countryData.region}
        </div>
        <div>
          <span className="font-semibold">Capital: </span>
          {countryData.capital ? countryData.capital[0] : "No Any Capital"}
        </div>
      </div>
    </div>
  )
}

export default Card
