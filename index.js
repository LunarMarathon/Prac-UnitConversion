/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("btn")
const clearBtn = document.getElementById("btnClr")
const lengthEl = document.getElementById("lengthL")
const volumeEl = document.getElementById("volumeL")
const massEl = document.getElementById("massL")
inputEl.value = ""

convertBtn.addEventListener("click", function(){
    let inputVal = Number(inputEl.value)
    lengthEl.innerHTML = `${inputVal} meters = ${(inputVal*3.281).toFixed(3)} feet | ${inputVal} feet = ${(inputVal/3.281).toFixed(3)} meters`
    volumeEl.innerHTML = `${inputVal} liters = ${(inputVal*0.264).toFixed(3)} gallons | ${inputVal} gallons = ${(inputVal/0.264).toFixed(3)} liters`
    massEl.innerHTML = `${inputVal} kilos = ${(inputVal*2.204).toFixed(3)} pounds | ${inputVal} pounds = ${(inputVal/2.204).toFixed(3)} kilos`
})

clearBtn.addEventListener("click", function(){
    inputEl.value = ""
    inputEl.focus()
})