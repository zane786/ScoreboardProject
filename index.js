let homeScoreDoc = document.getElementById("homeScoreText")
let guestScoreDoc = document.getElementById("guestScoreText")

let homeScore = 0
let guestScore = 0

function oneHome() {
    if(homeScore < 99) {
        homeScore += 1;
        if (homeScore < 10) {
            homeScoreDoc.innerText = "0" + homeScore;
        } else {
            homeScoreDoc.innerText = homeScore;
        }
    }
}

function twoHome() {
    if(homeScore < 98) {
        homeScore += 2;
        if (homeScore < 10) {
            homeScoreDoc.innerText = "0" + homeScore;
        } else {
            homeScoreDoc.innerText = homeScore;
        }
    }
}

function threeHome() {
    if(homeScore < 97) {
        homeScore += 3;
        if (homeScore < 10) {
            homeScoreDoc.innerText = "0" + homeScore;
        } else {
            homeScoreDoc.innerText = homeScore;
        }
    }
}



function oneGuest() {
    if(guestScore < 99) {
        guestScore += 1;
        if (guestScore < 10) {
            guestScoreDoc.innerText = "0" + guestScore;
        } else {
            guestScoreDoc.innerText = guestScore;
        }
    }
}

function twoGuest() {
    if(guestScore < 98) {
        guestScore += 2;
        if (guestScore < 10) {
            guestScoreDoc.innerText = "0" + guestScore;
        } else {
            guestScoreDoc.innerText = guestScore;
        }
    }
}

function threeGuest() {
    if(guestScore < 97) {
        guestScore += 3;
        if (guestScore < 10) {
            guestScoreDoc.innerText = "0" + guestScore;
        } else {
            guestScoreDoc.innerText = guestScore;
        }
    }
}

function resetScores() {
    guestScore = 0
    homeScore = 0
    guestScoreDoc.innerText = "00"
    homeScoreDoc.innerText = "00";
}