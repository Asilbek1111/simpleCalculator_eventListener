'use strict'

var btn = document.querySelector(".btn");
var first = document.querySelector(".first");
var second = document.querySelector(".second");
var result = document.querySelector(".result");
var minus = document.querySelector(".minus");
var multiply = document.querySelector(".multiply");
var fraction = document.querySelector(".fraction");


btn.addEventListener("click", function(e){
result.textContent = ((first.value*1) + (second.value*1));
})

minus.addEventListener("click", function(e){
    result.textContent = ((first.value) - (second.value));
})

multiply.addEventListener("click", function(e){
    result.textContent = ((first.value*1) * (second.value*1));
    })

fraction.addEventListener("click", function(e){
        result.textContent = ((first.value*1) / (second.value*1)).toFixed(3);
        })