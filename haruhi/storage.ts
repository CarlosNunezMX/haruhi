
type AdvancedOptions = {
    parseAs: "string" | "json" | "array"
}

export class DataBase<Model>{
    Data?: Model;
    Name: string;
    Options: Partial<AdvancedOptions> = {};

    constructor(databaseName: string, options: Partial<AdvancedOptions>) {
        this.Name = databaseName;
        this.Options = options;
        // @ts-ignore
        this.Data = this.get.bind(this)() ?? this.Options.parseAs === "array" ? [] : this.Options.parseAs === "json" ? {} : this.Options.parseAs === "string" ? "" : {};
    }
    get(): Model | void {
        const data = localStorage.getItem(this.Name);
        if (!data) {
            if (this.Options.parseAs === "string")
                return localStorage.setItem(this.Name, '');
            if (this.Options.parseAs === "array")
                return localStorage.setItem(this.Name, '[]');
            if (this.Options.parseAs === "json")
                return localStorage.setItem(this.Name, '{}');
            return localStorage.setItem(this.Name, '{}');
        };
        return JSON.parse(data);
    }
    save(): Model {
        if(!this.Data)
            throw "First set data before exit!";
        console.log(this.Name);
        
        localStorage.setItem(this.Name, JSON.stringify(this.Data));
        return this.Data;
    }
}