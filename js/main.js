//Example fetch using DnD5eAPI - place subclasses in ul

let select = document.querySelector('select')

document.DOM_Content_Loaded = loadSelections()

function loadSelections() {
    const url = 'https://www.dnd5eapi.co/api/spells'

    fetch(url) // fetch all spells
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            const spells = data.results.map(spell => spell.index) // get all spell names
            let options = select.querySelectorAll('option')
            options = spells.map(spell => `<option value="${spell}">${spell}</option>`).join('\n')
            select.innerHTML = options
         })
        .catch(err => {
            console.log(`error ${err}`)
        })
}


document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    selectSpell = document.querySelector('#spell-list');
    choice = selectSpell.value;
     
    const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('h2').innerHTML = `NAME OF THE SPELL:     <span>${data.name}</span>`
        document.querySelector('h3').innerHTML = `CLASS:     <span>${data.classes[0].name}</span>`
        
        const ul = document.querySelector('ul')
        ul.innerHTML = ''
        data.subclasses.forEach(subclass => {
          const li = document.createElement('li')
          li.textContent = `${subclass.name}`
          ul.appendChild(li)
            })
        })
      .catch(err => {
          console.log(`error ${err}`)
      })
}
