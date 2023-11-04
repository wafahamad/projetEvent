import { Event } from "./event";
import { Paricipant } from "./paricipant";

export class Participation {
    constructor(
        public idP: number,
        public datePar:Date,
        public nbPrs:number,
        public Paricipatn: Paricipant,
        public event: Event
    ){}
}
