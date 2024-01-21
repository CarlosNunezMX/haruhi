import { DataBase } from "./storage.ts";

type Level = "LOG" | "ERROR" | "WARNING"
type LoggerInfo = { log: string, date: string }[];
const logger_message = (level: Level, ...Messages: any[]) => `[Haruhi] [${level}] [${new Date(Date.now()).toUTCString()}] - ${Messages}`

class Logger {
    SessionID = Math.random().toString(32).slice(-2);
    CurrentLogs = new DataBase<LoggerInfo>(this.SessionID, { parseAs: 'array' });
    AllLogs = new DataBase<{ date: string; name: string }[]>('allLogs', { parseAs: 'array' });
    constructor() {
        this.AllLogs.Data?.push.bind(this.AllLogs.Data)({
             date: new Date(Date.now()).toUTCString(), 
             name: this.SessionID 
        });
        console.log(this.AllLogs);

        this.AllLogs.save.bind(this.AllLogs)()
    }

    getDataBase(log: string) {
        return new DataBase<LoggerInfo>(log, { parseAs: 'array' });
    }
    log(...message: any[]) {
        const log = logger_message('LOG', ...message);
        const date = new Date(Date.now())
            .toUTCString();
        this.CurrentLogs.Data?.push({ date, log });
        console.log(log);
        this.CurrentLogs.save.bind(this.CurrentLogs)();
    }
}

export var logger = new Logger();