let input = ""

const btn = document.getElementById("convert-btn")
btn.addEventListener("click", onClick)

const meterEl = document.getElementById("meter")
const literEl = document.getElementById("liter")
const kiloEl = document.getElementById("kilo")

meterEl.textContent = "1 meter = 3.281 feet | 1 feet = 0.305 meters"
literEl.textContent = "1 liter = 0.264 gallons | 1 gallon = 3.785 liters"
kiloEl.textContent = "1 kilo = 2.205 pounds | 1 pound = 0.454 kilos"

function onClick() {
    const inputEl = document.getElementById("text")
    input = inputEl.value
    if (isNaN(input) || input === "") {
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
        ${input} meter${input > 1 ? "s" : ""} = ${fixedNumbers[0]} feet | ${input} feet = ${fixedNumbers[1]} meters
        `
        literEl.textContent = `
        ${input} liter${input > 1 ? "s" : ""} = ${fixedNumbers[2]} gallon${fixedNumbers[2] > 1 ? "s" : ""} | ${input} gallon${input > 1 ? "s" : ""} = ${fixedNumbers[3]} liter${fixedNumbers[3] > 1 ? "s" : ""}
        `
        kiloEl.textContent = `
        ${input} kilo${input > 1 ? "s" : ""} = ${fixedNumbers[4]} pounds | ${input} pound${input > 1 ? "s" : ""} = ${fixedNumbers[5]} kilo${fixedNumbers[5] > 1 ? "s" : ""}
        `
    }
}



