// overwrite window namespace

import type { keyboard } from "./haruhi/keyboard.ts";
import type { Mouse } from "./haruhi/mouse.ts";

export interface Haruhi{
    uuid: () => string;
    mouse: Mouse;
    keyboard: keyboard
    delta: number;
    version: string;
}

declare global{
    const haruhi: Haruhi;
    interface Window {
        haruhi: Haruhi;
    }
}

declare const haruhi: Haruhi;