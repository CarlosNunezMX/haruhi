import { logger } from "./logger.ts";

const Remap = {
    " ": "Space"
}

export class keyboard {
    Holding: string[] = [];
    History: string[] = [];
    MaxKeyHistory = 10;

    constructor(){
        this.DetectPressing.bind(this)();
        this.ReleaseKey.bind(this)()
    }
    DetectPressing(){
        window.addEventListener('keydown', (ev) => {
            let {key} = ev;
            if(!this.Holding.includes(ev.key)){
                if(key in Remap){
                    // @ts-ignore
                    key = Remap[key];
                }
                this.Holding.push(key);
                this.DeleteAuto.bind(this)();
            }
        })
    }
    ReleaseKey(){
        window.addEventListener("keyup", (ev) => {
            let {key} = ev;
            if(key in Remap)
                // @ts-ignore
                key = Remap[key];
            console.log(key);
            
            // Remaping 
            if(!this.Holding.includes(key))  
                return;
            
            this.Holding = this.Holding.filter(e => e !== key);
            this.DeleteAuto.bind(this)()
            console.log(this.Holding);
        })
    }

    DeleteAuto(){
        if(this.History.length <= 10)
            return;
        this.History = this.History.slice(-10);
        logger.log('Removed key from history');
    }
    
}