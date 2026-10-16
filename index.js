const input = 24

// program tanpa built-in method

function cToF(c) {
    return c * 9 / 5 + 32
}

function cToR(c) {
    return c * 4 / 5
}

function cToK(c) {
    return c + 273
}

console.log(`\nTanpda Built-In Method`)

console.log(`${input} derajat Celcius = ${cToF(input)} derajat Fahrenheit`)
console.log(`${input} derajat Celcius = ${cToR(input)} derajat Reamur`)
console.log(`${input} derajat Celcius = ${cToK(input)} derajat Kelvin`)

// program dengan built-in method

function fBuiltIn(c) {
    let f = c * 9 / 5 + 32
    f = Math.round(f)
    return f
}

function rBuiltIn(c) {
    let r = c * 4 / 5
    r = Math.round(r)
    return r
}

function kBuiltIn(c) {
    let k = c + 273
    k = Math.round(k)
    return k
}

console.log(`\nDengan Built-In Method (Math.round())`)

console.log(`${input} derajat Celcius = ${fBuiltIn(input)} derajat Fahrenheit`)
console.log(`${input} derajat Celcius = ${rBuiltIn(input)} derajat Reamur`)
console.log(`${input} derajat Celcius = ${kBuiltIn(input)} derajat Kelvin`)