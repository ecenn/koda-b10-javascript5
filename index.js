const input = 20

// program dengan function

function celciusConverter(c) {
    const f = c * 9 / 5 + 32
    const r = c * 4 / 5
    const k = c + 273
    console.log(`${c} derajat Celcius = ${f} derajat Fahrenheit`)
    console.log(`${c} derajat Celcius = ${r} derajat Reamur`)
    console.log(`${c} derajat Celcius = ${k} derajat Kelvin`)
}

console.log(`Tanpa Built-In Method`)
celciusConverter(input)

// program dengan built-in function

function cToF(c) {
    return c * 9 / 5 + 32
}

function cToR(c) {
    return c * 4 / 5
}

function cToK(c) {
    return c + 273
}

console.log(`\nDengan Built-In Method`)

const f = cToF(input)
const r = cToR(input)
const k = cToK(input)

console.log(`${input} derajat Celcius = ${f} derajat Fahrenheit`)
console.log(`${input} derajat Celcius = ${r} derajat Reamur`)
console.log(`${input} derajat Celcius = ${k} derajat Kelvin`)