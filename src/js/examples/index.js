import cantorsZigZag from "../cantorsZigZag"
import OrderedPair from "../OrderedPair"

let currentCoordinates = undefined;

let selectedSequence = undefined;
let canvas = undefined;
let context = undefined;

export function draw() {
    
    if (selectedSequence === undefined) selectedSequence = cantorsZigZag(2000);
   
    if (canvas === undefined) canvas = document.getElementById("exampleCanvas");
    if (context === undefined) context = canvas.getContext("2d");

    currentCoordinates = selectedSequence.next();

    if (currentCoordinates.done) {
        selectedSequence = undefined;
        currentCoordinates = undefined;
        return;
    }

    context.fillRect(currentCoordinates.value.x, currentCoordinates.value.y, 1, 1);
    
    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
