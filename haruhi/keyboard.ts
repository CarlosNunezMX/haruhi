const Remap = {
    " ": "Space"
}

export class keyboard {
    Holding: string[] = [];
    History: string[] = [];
    readonly MaxKeyHistory = 10;
    
    HoldingOnce: string[] = [];

    constructor(){
        this.DetectPressing.bind(this)();
        this.ReleaseKey.bind(this)()
    }
    private DetectPressing(){
        window.addEventListener('keydown', (ev) => {
            let {key} = ev;
            if(!this.Holding.includes(ev.key)){
                if(key in Remap){
                    // @ts-ignore
                    key = Remap[key];
                }
                this.AddHoldingOnce.bind(this)(key)
                this.Holding.push(key);
                this.DeleteAuto.bind(this)();
                this.History.push(key);
            }
        })
    }
    private AddHoldingOnce(key: string){
        if(this.HoldingOnce.includes(key) || this.Holding.includes(key))
            return;
        this.HoldingOnce.push(key)
        this.AutoDelete.bind(this)();
    }
    private AutoDelete(){
        setTimeout(() => {
            this.HoldingOnce = this.HoldingOnce.slice(1);
        }, haruhi.delta)
    }
    private ReleaseKey(){
        window.addEventListener("keyup", (ev) => {
            let {key} = ev;
            if(key in Remap)
                // @ts-ignore
                key = Remap[key];
            
            // Remaping 
            if(!this.Holding.includes(key))  
                return;
            
            this.Holding = this.Holding.filter(e => e !== key);
            this.DeleteAuto.bind(this)()
        })
    }

    private DeleteAuto(){
        if(this.History.length <= 10)
            return;
        this.History = this.History.slice(-10);
    }
    
}