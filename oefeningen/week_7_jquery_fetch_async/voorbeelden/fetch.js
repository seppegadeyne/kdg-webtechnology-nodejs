// Fetch with promise and POST
// Wordt gepost als multipart/form-data
// Extra data toevoegen met .append(name, value)

url = 'https://my/url/';
options = {
    body: new FormData(document.querySelector('#myForm')),
    method: 'POST'
}

fetch(url, options)
    .then(() => console.log('Form submitted'))
    .catch(() => console.log('Connection failed'));

// Form data omzetten naar JSON
let formData = new FormData();
formData.append('key1', 'value1');
formData.append('key2', 'value2');
let object = {};

formData.forEach(((value, key) => {object[key] = value}));
let json = JSON.stringify(object);

console.log(object, json);

// URL encoded posten
let searchParams = new URLSearchParams(formData);
console.log(searchParams.toString());


// Fetch with promises style

url = 'https://randomuser.me/api/';
options = {
    //body: JSON.stringify(data),
    headers: {"content-type": "application/json"},
    method: 'GET'
}

fetch(url, options)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.warn(error);
    });


// Fetch in async function
async function load(url) {
    options = {
        //body: JSON.stringify(data),
        headers: {"content-type": "application/json"},
        method: 'GET'
    }

    const response = await fetch(url, options);
    if (response.ok) {
        console.log(JSON.stringify(await response.json()));
    } else {
        console.log('Error: ', response.statusText);
    }
}

load('https://randomuser.me/api/');