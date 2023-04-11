"use strict";

fetch (' https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.results.forEach(function(element) {
            document.getElementById('cards').append(`<h3>${element.name}</h3>`)
        })
    })
