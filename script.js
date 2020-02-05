console.log('js linked')

let starWarsCharacters

let container = document.createElement('div')
document.querySelector('body').appendChild(container)


fetch('https://swapi.co/api/people/?page=3')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    starWarsCharacters = data
    console.log(starWarsCharacters)
    let character = starWarsCharacters.results[9]
    let speciesHeading = document.createElement('h1')
    speciesHeading.innerText = character.name
    container.appendChild(speciesHeading)
    // IMAGE
    const custImage = 'https://tr.rbxcdn.com/a757cbe408c3684b00c9a8588444daaa/420/420/Decal/Png'
    const imageNode = document.createElement('img')
    imageNode.classList.add('profile-photo')
    imageNode.src = custImage
    container.appendChild(imageNode)
  
  })