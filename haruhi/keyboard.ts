import { logger } from "./logger.ts";

export class keyboard {
    Holding: string | undefined;
    History: string[] = [];
    MaxKeyHistory = 10;

    constructor(){
        this.DetectPressing.bind(this)();
        this.ReleaseKey.bind(this)()
    }
    DetectPressing(){
        window.addEventListener('keydown', (ev) => {
            this.Holding = ev.key;
            this.DeleteAuto.bind(this)()
        })
    }

    ReleaseKey(){
        window.addEventListener("keyup", (ev) => {
            this.Holding = undefined;
            this.DeleteAuto.bind(this)();
        })
    }

    DeleteAuto(){
        if(this.History.length <= 10)
            return;

        this.History = this.History.slice(-10);
        logger.log('Removed key from history');
    }
    
}

export const Keyboard = new keyboard();