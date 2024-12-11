import { useState, useEffect } from 'react'
import './App.css'
import * as starshipService from './services/starshipService'
import StarshipSearch from './components/StarshipSearch'
import StarshipList from './components/StarshipList'

function App() {
  const [starships, setStarships] = useState({})

  const fetchData = async (ship) => {
    const data = await starshipService.show(ship)
    setStarships(data)
  }

  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await starshipService.show('')
      setStarships(data)
    }
    fetchDefaultData()
  }, [])

  return (
    <>
      <main>
        <h1>Star Wars API</h1>
        <StarshipSearch fetchData={fetchData} />
        <StarshipList starships={starships} />
      </main>
    </>
  )
}

export default App
