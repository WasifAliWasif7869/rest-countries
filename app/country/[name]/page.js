import Navbar from "@/app/components/Navbar"
import React from "react"
import { FaArrowLeftLong } from "react-icons/fa6"


const page = async ({ params }) => {
  const countryData = await (await fetch(`https://restcountries.com/v3.1/name/${params.name}`)).json()
  console.log(countryData[0])

  return (
    <div>
      <Navbar />
      <div className="mt-16 mx-auto w-[85%]">
        <div className="BackButton">
          <button className="flex items-center justify-center rounded-lg shadow-md gap-2 p-2 px-7 cursor-pointer dark:hover:bg-[#222f3a] shadow-black dark:bg-[#2b3945]">
            <FaArrowLeftLong /> Back
          </button>
        </div>
        <div className="details mt-20 flex gap-x-16">
          <div className="image-container overflow-hidden">
            <img src={countryData[0].flags.svg} className="w-[500px] h-[300px] object-cover" />
          </div>
          <div className="other-details">
            <div className="font-medium text-3xl">{countryData[0].name.common}</div>
            <div className="upper-details pt-5 flex justify-between w-[500px]">
              <div className="left-details">
                <div className="mt-5 text-sm font-light">
                  <span className="mr-1 font-bold">Native Name:</span> Pakistan
                </div>
                <div className="mt-5 text-sm font-light">
                  <span className="mr-1 font-bold">Population:</span> {countryData[0].population}
                </div>
                <div className="mt-5 text-sm font-light">
                  <span className="mr-1 font-bold">Region:</span> {countryData[0].region}
                </div>
                <div className="mt-5 text-sm font-light">
                  <span className="mr-1 font-bold">Sub Region:</span> {countryData[0].subregion}
                </div>
                <div className="mt-5 text-sm font-light">
                  <span className="mr-1 font-bold">Capital:</span> {countryData[0].capital ? countryData[0].capital : "Not Specified"}
                </div>
              </div>
              <div className="right-details">
                <div className="mt-5 text-sm font-light">
                  <span className="mr-1 font-bold">Top Level Domain:</span> {countryData[0].tld.join(", ")}
                </div>
                <div className="mt-5 text-sm font-light">
                  <span className="mr-1 font-bold">Currencies:</span> {Object.keys(countryData[0].currencies).join(", ")}
                </div>
                <div className="mt-5 text-sm font-light">
                  <span className="mr-1 font-bold">Languages:</span> {Object.values(countryData[0].languages).join(", ")}
                </div>
              </div>
            </div>
            <div className="border-detials mt-6 flex gap-4 w-[500px] flex-wrap">
              <div className=" rounded-lg dark:bg-[#2b3945] shadow-sm p-1 px-3 shadow-black">Borders : </div>
              {countryData[0].borders?.map((border, index)=>{
              return <div key={index} className="border-name rounded-lg dark:bg-[#2b3945] shadow-sm p-1 px-3 cursor-pointer shadow-black">{border}</div>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export const metadata = {
  title: `Country Details - JS Project`,
}

export default page
