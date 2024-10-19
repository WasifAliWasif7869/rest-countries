import Navbar from '@/app/components/Navbar'
import React from 'react'

const page = async ({params}) => {
    const countryData = await (await fetch(`https://restcountries.com/v3.1/name/${params.name}`)).json()
  return (
    <div>
        <Navbar/>
        <div>data of country: <b className='text-blue-300'>{countryData[0].name.common}</b> fetched successfully</div>
    </div>
  )
}

export default page