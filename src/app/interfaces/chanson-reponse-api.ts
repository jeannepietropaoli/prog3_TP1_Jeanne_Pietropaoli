import { Chanson } from "./chanson";

export interface ChansonReponseAPI {
    chanson: Chanson,
    erreur?: string
}
