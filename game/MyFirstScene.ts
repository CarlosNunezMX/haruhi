import { LoadResource } from "@/haruhi/loadImage.ts";
import { Scene } from "@/haruhi/scenes/renderer.ts";
import { Player } from "./player.ts";
import { TextNode } from "@/haruhi/nodes/TextNode.ts";
import { Vector2 } from "@/haruhi/types/Vector.ts";
import { ImageNode } from "@/haruhi/Nodes/ImageNode.ts";
export class MyScene extends Scene{
    Player?: Player;
    isMain: boolean = true;
    async registerScene(): Promise<void> {
        // Load the player...
        const player_sprite = new ImageNode('/game/sprite.png', 64, 64);
        this.Player = new Player(player_sprite);
        await this.renderer.putElement.bind(this.renderer)(this.Player);
    }
    async attached(): Promise<void> {
        const textVersion = new TextNode(new Vector2(10, 20), `Running test game in haruhi-${haruhi.version}`);
        textVersion.TextColor = 'green';
        await this.renderer.putElement.bind(this.renderer)(textVersion);
        console.log(`Attached ${MyScene.name}`)
    }
    private static instance: MyScene;
    static getInstance(context: CanvasRenderingContext2D){
        if(!this.instance)
            this.instance = new MyScene(context);
        return this.instance;
    }
}