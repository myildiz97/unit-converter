let input = ""

const btn = document.getElementById("convert-btn")
btn.addEventListener("click", onClick)

const meterEl = document.getElementById("meter")
const literEl = document.getElementById("liter")
const kiloEl = document.getElementById("kilo")

function onClick() {
    const inputEl = document.getElementById("text")
    input = inputEl.value
    if (isNaN(input)) {
        alert("Enter an integer into input field!")
    } else {
        // 1 meter, 1 liter, 1 kilogram
        const c = [3.2808399, 3.2808399, 0.264172052, 0.264172052, 2.20462262, 2.20462262] 
        const conversions = []
        for (let i = 0; i < c.length; i++) {
            i % 2 === 0 ? conversions.push(input * c[i]) : conversions.push(input / c[i])
        }
        const fixedNumbers = conversions.map(number => number.toFixed(3))
        
        meterEl.textContent = `
        ${input} meters = ${fixedNumbers[0]} feet | ${input} feet = ${fixedNumbers[1]} meters
        `
        literEl.textContent = `
        ${input} liters = ${fixedNumbers[2]} gallons | ${input} gallons = ${fixedNumbers[3]} liters
        `
        kiloEl.textContent = `
        ${input} kilos = ${fixedNumbers[4]} pounds | ${input} pounds = ${fixedNumbers[5]} kilos
        `
    }
}



