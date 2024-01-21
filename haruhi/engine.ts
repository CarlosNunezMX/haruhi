import type { Player } from "./player.ts";
import { Render, type Entity } from "./render.ts";

export class Engine{
    private Player: Entity;
    private CanvasWidth: number;
    private CanvasHeight: number;
    private Canvas: HTMLCanvasElement;
    private Context: CanvasRenderingContext2D;
    private LoopNumber: NodeJS.Timer;
    private RenderingContext: Render;
    constructor(Player: Entity, Width: number, height: number, canvas: HTMLCanvasElement){
        this.Player = Player;
        this.CanvasWidth = Width;
        this.CanvasHeight = height;
        this.Canvas = canvas;
        // @ts-ignore
        this.Context = canvas.getContext('2d');
        this.RenderingContext = new Render(this.Context);
        this.RenderingContext.RenderQueeue.push.bind(this.RenderingContext.RenderQueeue)({element: this.Player, id: 'player-1'});
        if(!this.Context)
            throw "Canvas does not has a rendering context!";
        this.RenderingContext.draw.bind(this.RenderingContext)()
        this.LoopNumber = this.Loop.bind(this)()
        this.Canvas.height = height;
        this.Canvas.width = Width;
    }

    private Loop(){
        return setInterval(() => {
            this.RenderingContext.update.bind(this.RenderingContext)()
        }, 1000/60)
    }
}