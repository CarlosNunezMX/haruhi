import { Entity, Render } from "../render.ts";

export class Scene extends Entity {
    zindex: number = 0; 
    context: CanvasRenderingContext2D;
    renderer: Render;
    uuid: string = window.haruhi.uuid();
    isMain = false;
    constructor(context: CanvasRenderingContext2D){
        super();
        this.context = context;
        this.renderer = Render.getInstance();
        this.renderer.ctx(context);
    }


    registerScene(): void | Promise<void>{
        
    }

    draw(ctx: CanvasRenderingContext2D): void {
        this.renderer.draw.bind(this.renderer)();
    }

    update(ctx: CanvasRenderingContext2D): void {
        this.renderer.update.bind(this.renderer)();
    }
}