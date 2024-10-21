import BackButton from "@/app/components/BackButton"
import Navbar from "@/app/components/Navbar"
import Script from "next/script"
import React from "react"



const page = async ({ params }) => {
  const countryData = await (await fetch(`https://restcountries.com/v3.1/name/${params.name}?fullText=true`)).json()
  return (
    <div>
      <Navbar />

      <div className="mt-16 mx-auto w-[85%]">
        <BackButton />
        <div className="details mt-20 flex gap-x-16">
          <div className="image-container overflow-hidden">
            <img src={countryData[0].flags.svg} className="w-[500px] h-[300px] object-cover" />
          </div>
          <div className="other-details">
            <div className="font-medium text-3xl">{countryData[0].name.common}</div>
            <div className="upper-details pt-5 flex justify-between w-[500px]">
              <div className="left-details">
                <div className="mt-5 text-sm font-light">
                  <span className="mr-1 font-bold">Native Name:</span> {Object.values(countryData[0].name.nativeName)[0].common}
                </div>
                <div className="mt-5 text-sm font-light">
                  <span className="mr-1 font-bold">Population:</span> {Number(countryData[0].population).toLocaleString("en-PK")}
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
              {countryData[0].borders?.map(async (border, index) => {
                const BorderName = (await (await fetch(`https://restcountries.com/v3.1/alpha?codes=${border}`)).json())[0].name.common
                return <a href={`/country/${BorderName}`} key={index} className="border-name rounded-lg dark:bg-[#2b3945] shadow-sm p-1 px-3 cursor-pointer shadow-black">{BorderName}</a>
              })}
            </div>
          </div>
        </div>
      </div>
      <Script id="titleSetter">
        document.title = `{countryData[0].name.common} - Countries REST API JS Project`
      </Script>
    </div>

  )
}

export default page
