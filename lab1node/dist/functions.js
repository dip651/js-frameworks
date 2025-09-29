"use strict";
function printMessage(text, times = 1) {
    for (let i = 0; i < times; i++) {
        console.log(text);
    }
}
printMessage("my text");
printMessage("repeated msg", 3);
