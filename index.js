let hScore = 0
let hScoreEl = document.getElementById("home-scorecard-digit")

function hAdd1() {
    hScoreEl.textContent = hScore += 1
}

function hAdd2() {
    hScoreEl.textContent = hScore += 2
}

function hAdd3() {
    hScoreEl.textContent = hScore += 3
}

let gScore = 0
let gScoreEl = document.getElementById("guest-scorecard-digit")

function gAdd1() {
    gScoreEl.textContent = gScore += 1
}

function gAdd2() {
    gScoreEl.textContent = gScore += 2
}

function gAdd3() {
    gScoreEl.textContent = gScore += 3
}

function reset() {
    hScore = hScoreEl.textContent = 0
    gScore = gScoreEl.textContent = 0   
}