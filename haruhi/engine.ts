import { Render, type Entity } from "./render.ts";
import type { Scene } from "./scenes/renderer.ts";

export class Engine {
    private Canvas?: HTMLCanvasElement;
    private Context?: CanvasRenderingContext2D;
    private RenderingContext?: Render;
    private run: boolean = true;

    setSize(w: number, h: number): void{
        if(!this.Canvas)
            throw "Set a canvas to use this method";
        this.Canvas.width = w;
        this.Canvas.height = h;
    }

    private scenes: Scene[] = [];
    private currentScene?: string;
    registerScene(scene: Scene){
        if(scene.isMain)
            this.currentScene = scene.uuid;
        const res = scene.registerScene.bind(scene)();
        if(res instanceof Promise)
            return res.then(() => this.scenes.push(scene));
        console.log("Register:", this.scenes);
        
        this.scenes.push.bind(scene);
    }
    changeScene(scene: Scene){
        const hasSceneRegistered = this.scenes.find(s => s.uuid === scene.uuid);
        if(!hasSceneRegistered)
            throw "This scene is not registered!";
        this.currentScene = scene.uuid;
    }
    private getCurrentScene(){
        const r = this.scenes.find(e => e.uuid === this.currentScene);
        
        if(!r)
            throw "Could not find the current scene!";
        return r;
    }

    getCurrentSceneUUID(){
        return this.currentScene;
    }
    setCanvas(canvas: HTMLCanvasElement){
        this.Canvas = canvas;
        // @ts-ignore
        this.Context = canvas.getContext('2d');
    }

    start(){
        if (!this.Context || !this.Canvas)
            throw "Canvas and Context hasn't setted!";
        this.RenderingContext = Render.getInstance();
        this.RenderingContext.ctx.bind(this.RenderingContext)(this.Context);
        console.log("START: SCENES", this.scenes);
        const scene = this.getCurrentScene.bind(this)()
        
        scene.renderer.draw.bind(scene.renderer)();
        this.Loop.bind(this)()
    }
    private constructor() {};


    stopRender(){
        this.run = false;
    }
    private lastFrame: number = 0;
    private Loop() {
        if(!this.RenderingContext)
            throw "Set an rendering context before use this method!"
        setInterval(() => {
            window.haruhi.delta = Date.now() - this.lastFrame;
            haruhi.delta = Date.now() - this.lastFrame;
            if(!this.run) return;
            const scene = this.getCurrentScene.bind(this)();
            this.lastFrame = Date.now();
            scene.renderer.update.bind(scene.renderer)();
        }, 1000 / 60)
    }

    private static Instance?: Engine;
    static getInstance(){
        if(!this.Instance)
            this.Instance = new Engine();

        return this.Instance;
    }
}