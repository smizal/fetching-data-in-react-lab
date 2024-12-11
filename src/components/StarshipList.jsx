import StarshipCard from './StarshipCard'

const StarshipList = ({ starships }) => {
  return (
    <>
      <section>
        <h2>Starships</h2>
        <p>Number of results: {starships.count}</p>
        <ul>
          {starships.results
            ? starships.results.map((starship, index) => (
                <li key={index}>
                  <h4>{starship.name}</h4>
                  <h5>Class: {starship.starship_class}</h5>
                  <h5>Manufacturer: {starship.manufacturer}</h5>
                  <h5>Model: {starship.model}</h5>
                </li>
              ))
            : '... Loading'}
        </ul>
      </section>
    </>
  )
}

export default StarshipList
