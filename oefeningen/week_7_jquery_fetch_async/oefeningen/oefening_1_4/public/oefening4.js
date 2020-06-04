'use strict';

let params = new URLSearchParams(window.location.search.substring(1));
console.log(params.get('Gemeente'));

if(params.get('Gemeente')) load('http://localhost:3000/gemeenten?Gemeente='+ params.get('Gemeente'));

// Fetch url
async function load(url) {
    let options = {
        method: 'GET'
    }

    const response = await fetch(url, options);
    if (response.ok) {
        document.querySelector('article > section').textContent = JSON.stringify(await response.json());
    } else {
        document.querySelector('article > section').textContent = response.statusText;
    }
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    let search = document.querySelector('#oefening4').value;
    let url = 'http://localhost:3000/gemeenten?Gemeente='+ search;
    load(url);
})