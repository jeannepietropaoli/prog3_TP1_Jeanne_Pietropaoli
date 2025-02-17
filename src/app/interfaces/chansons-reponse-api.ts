import { Chanson } from "./chanson";

export interface ChansonsReponseAPI {
    chansons: Chanson[],
    erreur?: string
}
