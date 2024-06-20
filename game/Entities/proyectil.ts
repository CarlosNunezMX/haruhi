import { Entity } from "@/haruhi/render.ts";

export class Proyectil extends Entity {
    x: number;
    y: number;
    
    

    constructor(x: number, y: number){
        super();
        this.x = x;
        this.y = y;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        super.draw(ctx);
    }
    update(ctx: CanvasRenderingContext2D): void {
        this.x += 1;
    }
}