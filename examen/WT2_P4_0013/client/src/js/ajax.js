// TODO Opdracht 3: voeg de naam van je entiteit toe aan onderstaande Url
//       voorbeeld: const Url = 'http://localhost:3000/persons/'
const Url = 'http://localhost:3000/devlopers/'

document.getElementById("xl-1222").style.maxWidth="1222px"

// TODO Opdracht 3: Voeg event listeners toe
// Event Listeners
document.querySelector('form').addEventListener('submit', event => event.preventDefault());
document.querySelector('#toon').addEventListener('click', event => {
    let id = document.querySelector('#id').value;
    if(id) toonentiteit(id);
})
document.querySelector('#pasAan').addEventListener('click', event => {
    let id = document.querySelector('#id').value;
    if(id) pasAan(id);
})

// Functies
// Get info from api
async function toonentiteit(id) {
    const url = 'http://localhost:3000/developers/'+ id;
    const options = {
        headers: {"content-type": "application/json"},
        method: 'GET'
    }

    const response = await fetch(url, options);
    if (response.ok) {
        let result = await response.json();
        document.querySelector('#name').value = result.name;
        document.querySelector('#founding_date').value = result.founding_date;
        // Alle images in de db zijn webpagina's :-(
        document.querySelector('.image').src = 'https://via.placeholder.com/200x80.png?text=' + encodeURIComponent(result.name);
    } else {
        console.log('Error: ', response.statusText);
    }
}

// Patch into api
function pasAan(id) {
    const url = 'http://localhost:3000/developers/'+ id;

    let object = {
        "name": document.querySelector('#name').value,
        "founding_date": document.querySelector('#founding_date').value
    }

    const options = {
        body: JSON.stringify(object),
        headers: {"content-type": "application/json"},
        method: 'PATCH'
    }

    fetch(url, options)
        .then(response => {
            if (response.ok) {
                let result = response.json();
                toonentiteit(result.id);
                return result;
            }
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}

