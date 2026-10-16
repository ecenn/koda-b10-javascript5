// callback

function hitungLingkaran(r, cb0, cb1, cb2) {
    let pi = cb0(r)
    cb1(r, pi)
    cb2(r, pi)
}

function cekPi(x) {
    if (x % 7 === 0) {
        return 22/7
    } else {
        return 3.14
    }
}

function luas(a, pi1) {
    const luas = pi1 * a * a
    console.log(luas)
}

function keliling(b, pi2) {
    const keliling = 2 * pi2 * b
    console.log(keliling)
}

hitungLingkaran(10, cekPi, luas, keliling)