import { Vector2 } from "./types/Vector.ts";
export type Click = {
    Position: Vector2
    time: number;
}

export enum MouseButton{
    Left,
    Middle,
    Right
}
export class Mouse {
    Position: Vector2 = new Vector2();
    Click?: Click;
    isClicking: boolean = false;
    mouseButton?: MouseButton;
    constructor(){
        this.DetectMouse.bind(this)();
    }
    
    private DetectMouse(){
        window.addEventListener('mousemove', (ev) => {
            this.Position = new Vector2(ev.clientX, ev.clientY);
        })

        window.addEventListener('click', (ev) => {
            // @ts-ignore
            this.Click = {}
            
            this.Click!.Position = new Vector2(ev.clientX, ev.clientY);
            this.Click!.time = Date.now();
            this.mouseButton = ev.button as MouseButton;
            setTimeout(() => {
                this.Click = undefined;
            }, haruhi.delta)
        })

        window.addEventListener('mousedown', (ev) => {
            this.isClicking = true;
            this.mouseButton = ev.button as MouseButton;
        })

        window.addEventListener('mouseup', () => {
            this.isClicking = false;
            this.mouseButton = undefined;
        })
    }
}