export class Event {
  constructor(
    public idE:number,
    public nom:String,
    public date:Date,
    public img :any,
    public nbrPart:number,
    public nbrPlace:number,
    public disponible:boolean,
    public description:String
  ){}
}
