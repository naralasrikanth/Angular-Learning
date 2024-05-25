export class recipe {
    public name:string;
    public description : string;
    public imagepath : string;

    constructor(Name : string,Description : string , Path:string){
        this.name=Name;
        this.description=Description;
        this.imagepath=Path;
    }
}
