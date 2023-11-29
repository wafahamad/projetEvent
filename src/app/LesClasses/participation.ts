import { Event } from "./event";
import { Participant } from "./participant";

export class Participation {
    constructor(
        public id: string,
        public date:Date,
        public nbPrs:number,
        public participant: Participant,
        public evenement: Event
    ){}
}
