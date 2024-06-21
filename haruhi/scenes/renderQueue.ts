import type { Entity } from "../Entity.ts";
import type {  RenderContent } from "../render.ts";


export class RenderQueue{
    RenderQueeue: RenderContent[] = []
    private Context?: CanvasRenderingContext2D;
    ctx(ctx: CanvasRenderingContext2D) {
        this.Context = ctx;
    }
    async putElement(element: Entity) {
        const uuid = window.haruhi.uuid();
        await element.attached()
        this.RenderQueeue.push({
            id: uuid,
            element
        })
    }
    
    getRenderQueue(){
        return this.RenderQueeue
            .filter(e => !e.element.hidden)
            .sort((a, b) => (a.element.zindex || 0) - (b.element.zindex || 0));
    }

    static MasterQueue: RenderQueue = new RenderQueue();
}