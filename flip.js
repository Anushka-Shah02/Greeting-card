const card = document.querySelector("#card");

const card1 = document.querySelector("#c1");
const card2 = document.querySelector("#c2");

// Event Listener
card.addEventListener("click",goAhead);

let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openCard() {
    card.style.transform = "translateX(100%)";
}

function goAhead() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openCard();
                card1.classList.add("flipped");
                card1.style.zIndex = 1;
                break;
            case 2:
                card2.classList.add("flipped");
                card2.style.zIndex = 2;
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}
