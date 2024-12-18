const BASE_URL = `https://swapi.py4e.com/api/starships`

export const show = async (name) => {
  try {
    const url = `${BASE_URL}?search=${name}`
    const res = await fetch(url)
    const data = await res.json()
    console.log('Data:', data)
    return data
  } catch (err) {
    console.log(err)
  }
}
