import "@/haruhi/haruhi.ts"

import { MyScene } from "./game/MyFirstScene.ts";
import { Engine } from "./haruhi/engine.ts";

const $Canvas = document.querySelector<HTMLCanvasElement>('canvas#game');
const context = $Canvas?.getContext("2d");
if (!$Canvas || !context) {
    throw "Can not find canvas or the context for game drawning";
}

const GameEngine = Engine.getInstance();
const SceneMain = MyScene.getInstance(context);

await GameEngine.registerScene(SceneMain);

GameEngine.setCanvas($Canvas);
GameEngine.setSize(document.body.clientWidth, window.innerHeight);

console.log("Before start:", GameEngine);
GameEngine.start();