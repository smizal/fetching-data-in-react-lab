import { useState } from 'react'

const StarshipSearch = ({ fetchData }) => {
  const [spaceshipName, setSpaceshipName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData(spaceshipName)
    setSpaceshipName('')
  }

  return (
    <>
      <section>
        <h2>Search</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="spaceshipName">Search Term</label>
          <input
            id="spaceshipName"
            type="text"
            value={spaceshipName}
            onChange={(e) => setSpaceshipName(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </section>
    </>
  )
}

export default StarshipSearch
