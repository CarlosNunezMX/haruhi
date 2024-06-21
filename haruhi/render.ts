import type { Entity } from "./Entity.ts";

export type RenderContent = {
    id: string;
    element: Entity;
}



export class Render {
    rotation: number = 0;
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
    draw() {
        this.RenderQueeue
            .sort((a, b) => (a.element.zindex || 0) - (b.element.zindex || 0))
            .filter(e => !e.element.hidden)
            .forEach(e => {
                const draw = e.element.draw;
                if (!this.Context)
                    throw "Set the context before start rendering"
                draw.bind(e.element)(this.Context);
            })
    }

    update() {
        if (!this.Context)
            throw "Set the context before start rendering";
        this.Context.clearRect(0, 0, document.body.clientWidth, document.body.clientWidth);
        this.draw.bind(this)()
        this.RenderQueeue.forEach(e => {
            if (!this.Context)
                throw "Set the context before start rendering";
            e.element.update.bind(e.element)(this.Context)
        })
    }

    private static instance: Render;
    public static getInstance() {
        if (!this.instance)
            this.instance = new Render();
        return this.instance;
    }

    public static createInstance() {
        return new Render();
    }
}