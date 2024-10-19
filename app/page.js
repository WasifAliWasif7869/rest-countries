import CardContainer from "./components/CardContainer"
import Navbar from "./components/Navbar"


export default async function Home() {
  const allCounrties = await (await fetch("https://restcountries.com/v3.1/all")).json()
  return (
    <div className="dark:bg-[#202c37] dark:text-white">
        <Navbar />
        <CardContainer data={JSON.parse(JSON.stringify(allCounrties))} />
    </div>
  )
}
