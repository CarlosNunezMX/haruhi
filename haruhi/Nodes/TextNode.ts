import { Entity } from "../Entity.ts";
import type { Vector2 } from "../types/Vector.ts";

export class TextNode extends Entity {
    Text: string;
    TextSize: number = 20;
    TextFont: string = "Arial";
    TextColor: string = "black";

    constructor(pos: Vector2, text: string){
        super();
        this.Position = pos;
        this.Text = text;
    }
    
    draw(ctx: CanvasRenderingContext2D){
        ctx.font = `${this.TextSize}px ${this.TextFont}`;
        ctx.fillStyle = this.TextColor;
        ctx.fillText(this.Text, this.Position.x, this.Position.y);
    }
}