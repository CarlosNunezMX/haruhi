import { EngineWindow } from "./haruhi/gameWindow.ts";
import { resolve } from "node:path"; 
new EngineWindow({
    initFile: resolve(process.cwd(), "index.html")
});