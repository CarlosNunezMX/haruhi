export class Vector2{
    public x: number;
    public y: number;
    
    constructor(x: number = 0, y: number = 0){
        this.x = x;
        this.y = y;
    }

    public center(): Vector2{
        return new Vector2(this.x/2, this.y/2);
    }
    public add(other: Vector2): Vector2{
        return new Vector2(this.x + other.x, this.y + other.y);
    }

    public sub(other: Vector2): Vector2{
        return new Vector2(this.x - other.x, this.y - other.y);
    }

    public distance(other: Vector2): number{
        return Math.sqrt((this.x - other.x)**2 + (this.y - other.y)**2);
    }

    public toVector3(vector2?: Vector2): Vector3{
        if(!vector2){
            return new Vector3(this.x, this.y);
        }

        return new Vector3(vector2.x, vector2.y);

   }
}

export class Vector3 extends Vector2{
    z: number;
    constructor(x: number = 0, y: number=0, z: number=0){
        super(x, y);
        this.z = z;
    }
    public center(): Vector3 {
        return new Vector3(this.x / 2, this.y / 2, this.z / 2);    
    }
    public add(other: Vector3): Vector3{
        return new Vector3(this.x + other.x, this.y + other.y, this.z + other.z);
    }

    public sub(other: Vector3): Vector3{
        return new Vector3(this.x - other.x, this.y - other.y, this.z - other.z);
    }

    public distance(other: Vector3): number{
        return Math.sqrt((this.x - other.x)**2 + (this.y - other.y)**2 + (this.z - other.z)**2);
    }

    public toVector2(): Vector2{
        return new Vector2(this.x, this.y);
    }
}