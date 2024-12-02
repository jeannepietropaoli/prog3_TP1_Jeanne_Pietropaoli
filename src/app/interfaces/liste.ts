import { Chanson } from "./chanson";

export interface Liste {
    id: number;
    titre: string;
    sousTitre?: string;
    image?: string;
    description?: string;
    type: string;
    verifie?: boolean;
    datePublication: string;
    visibilite: boolean; // 0 si privé, 1 si publique
    nombreSauvegardes: number;
    chansons: Chanson[]
}
