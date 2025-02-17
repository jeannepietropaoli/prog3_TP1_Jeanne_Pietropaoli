import { Liste } from "./liste";

export interface ListesReponseAPI {
    listes: Liste[],
    erreur: string
}
