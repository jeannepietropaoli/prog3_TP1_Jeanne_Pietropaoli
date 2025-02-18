import { Chanson } from "./chanson";

export interface Liste {
    id?: number; // doit etre optionnel 
    titre: string;
    sousTitre?: string;
    image?: string;
    description?: string;
    type: string;
    verifie?: boolean;
    datePublication: string;
    visibilite: boolean; // 0 (false) si privé, 1(true) si publique
    nombreSauvegardes: number;
    chansons: Chanson[]
}
