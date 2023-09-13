import {Engine} from "../../interfaces/Engine";

export class BMWEngine implements Engine {
    getEngineName(): string {
        return "BMW Engine";
    }
}