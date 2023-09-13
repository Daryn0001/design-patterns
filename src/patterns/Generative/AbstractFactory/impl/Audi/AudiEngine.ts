import {Engine} from "../../interfaces/Engine";

export class AudiEngine implements Engine {
    getEngineName(): string {
        return "Audi Engine V8";
    }

}