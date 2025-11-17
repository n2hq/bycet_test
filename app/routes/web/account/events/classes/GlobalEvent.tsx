import { GlobalEventType } from "../types"

export class GlobalEvent {

    constructor(
        public globalEventType: GlobalEventType
    ) {

    }

    private addEvent = () => { }

    private updateEvent = () => { }

    private deleteEvent = () => { }
}