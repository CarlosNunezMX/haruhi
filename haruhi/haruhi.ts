
import { keyboard } from "./keyboard.ts";
import { Mouse } from "./mouse.ts";
window.haruhi = {
    uuid() {
        return Math.random().toString(36).slice(2);
    },
    mouse: new Mouse(),
    keyboard: new keyboard(),
    delta: 0,
    version: "0.3b"

}


var haruhi = window.haruhi;