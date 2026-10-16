const input = 24

console.log(`Suhu: ${input} derajat Celsius`)

// program tanpa built-in method

function cToF(c) {
    if (typeof c == 'number') {
        return `${c * 9 / 5 + 32} derajat Fahrenheit`
    } else {
        return "Error Input: Suhu bukan number"
    }
}

function cToR(c) {
    if (typeof c == 'number') {
        return `${c * 4 / 5} derajat Reamur`
    } else {
        return "Error Input: Suhu bukan number"
    }
}

function cToK(c) {
    if (typeof c == 'number') {
        return `${c + 273} derajat Kelvin`
    } else {
        return "Error Input: Suhu bukan number"
    }
}

console.log(`\nTanpa Built-In Method`)

console.log(cToF(input))
console.log(cToR(input))
console.log(cToK(input))

// program dengan built-in method

function fBuiltIn(c) {
    const cek = Number.isFinite(c)
    if (cek) {
        return `${c * 9 / 5 + 32} derajat Fahrenheit`
    } else {
        return "Error Input: Suhu bukan number"   
    }
}

function rBuiltIn(c) {
    const cek = Number.isFinite(c)
    if (cek) {
        return `${c * 4 / 5} derajat Reamur`
    } else {
        return "Error Input: Suhu bukan number"   
    }
}

function kBuiltIn(c) {
    const cek = Number.isFinite(c)
    if (cek) {
        return `${c + 273} derajat Kelvin`
    } else {
        return "Error Input: Suhu bukan number"   
    }
}

console.log(`\nDengan Built-In Method`)

console.log(fBuiltIn(input))
console.log(rBuiltIn(input))
console.log(kBuiltIn(input))