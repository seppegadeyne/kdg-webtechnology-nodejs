'use-strict';

// Fetch in async function
// Oefening 1
async function load(url) {
    document.querySelector('textarea').value = 'Loading...';

    let options = {
        method: 'GET'
    }

    const response = await fetch(url, options);
    if (response.ok) {
        document.querySelector('textarea').value = JSON.stringify(await response.json());
    } else {
        document.querySelector('textarea').value = response.statusText;
    }
}

load('http://jsonplaceholder.typicode.com/users/1');

// Oefening 2
document.querySelector('#oefening1').addEventListener('blur', event => {
    if(!isNaN(event.target.value)) {
        let url = 'http://jsonplaceholder.typicode.com/users/'+ event.target.value;
        load(url);
    } else {
        console.error('Geen geldige invoer (enkel nummers)');
    }
});

document.querySelector('#oefening1').addEventListener('focus', event => {
    event.target.value = '';
})

// Oefening 3

async function oefening3(url) {
    let options = {
        method: 'GET'
    }

    const response = await fetch(url, options);
    if (await response.ok) {
        let data = await response.json();
        data.forEach(user => {
            //console.log(user.id, user.name);
            let option = document.createElement('option');
            option.value = user.id;
            option.text = user.name;
            document.querySelector('#oefening3').add(option);
        })

    } else {
        console.log(await response.statusText);
    }
    //console.log(await response);
}

oefening3('http://jsonplaceholder.typicode.com/users');
