console.log('js linked')

let starWarsCharacters
let starWarsSpecies

let container = document.createElement('div')
document.querySelector('body').appendChild(container)
container.classList.add('container')

const custImage = 'https://tr.rbxcdn.com/a757cbe408c3684b00c9a8588444daaa/420/420/Decal/Png'
const imageNode = document.createElement('img')
imageNode.classList.add('profile-photo')
imageNode.src = custImage
container.appendChild(imageNode)


fetch('https://swapi.co/api/people/?page=3')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)
    starWarsCharacters = data
    let character = starWarsCharacters.results[9]
    let characterHeading = document.createElement('h1')
    characterHeading.innerText = character.name
    container.appendChild(characterHeading)
    characterHeading.classList.add('name-heading')
    let speciesKey = document.createElement('h2')
    speciesKey.innerText = 'species'
    container.appendChild(speciesKey)
    speciesKey.classList.add('key')

    return data.results[9].species[0]
  })
  .then(url => fetch(url))
  .then(response => response.json())
  .then(function(data) {
    console.log(data)
    starWarsSpecies = data
    let species = document.createElement('h3')
    species.innerText = data.name
    container.appendChild(species)
    species.classList.add('detail')

    return data.people
  })
  .then(url => fetch(url))
  .then(response => response.json())
  .then(function(data) {
    console.log(data)
    return data.homeworld
  })
  .then(url => fetch(url))
  .then(response => response.json())
  .then(function(data) {
    console.log(data)
    let homeKey = document.createElement('h2')
    homeKey.innerText = 'homeworld'
    container.appendChild(homeKey)
    homeKey.classList.add('key')
    let homeWorld = document.createElement('h3')
    homeWorld.innerText = data.name
    container.appendChild(homeWorld)
    homeWorld.classList.add('detail')
    return data.residents
  })
  .then(url => fetch(url))
  .then(response => response.json())
  .then(function(data) {
    console.log(data)
    let birthKey = document.createElement('h2')
    birthKey.innerText = 'birth Year'
    container.appendChild(birthKey)
    birthKey.classList.add('key')
    let birthYear = document.createElement('h3')
    birthYear.innerText = data.birth_year
    container.appendChild(birthYear)
    birthYear.classList.add('detail')

    let heightKey = document.createElement('h2')
    heightKey.innerText = 'height'
    container.appendChild(heightKey)
    heightKey.classList.add('key')
    let height= document.createElement('h3')
    height.innerText = data.height
    container.appendChild(height)
    height.classList.add('detail')
    return data.starships
  })
  .then(url => fetch(url))
  .then(response => response.json())
  .then(function(data) {
    console.log(data)
    let shipKey = document.createElement('h2')
    shipKey.innerText = 'Starship'
    container.appendChild(shipKey)
    shipKey.classList.add('key')
    let ship= document.createElement('h3')
    ship.innerText = data.name
    container.appendChild(ship)
    ship.classList.add('detail')
  })
  .then (


  )