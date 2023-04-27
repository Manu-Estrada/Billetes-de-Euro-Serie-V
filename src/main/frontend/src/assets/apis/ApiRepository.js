import EventosPublicRepository from "./billetesApi/EventosPublicRepository";

export default class ApiRepository {

    api;

    constructor(apiToCharge) {
        this.api = apiToCharge
        this.chooseApi()
    }

    chooseApi() {
        if(this.api === "eventos") return new EventosPublicRepository;
    

    }
}