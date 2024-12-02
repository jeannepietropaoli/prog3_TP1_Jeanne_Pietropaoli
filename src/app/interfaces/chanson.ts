export interface Chanson {
    id: number;
    titre: string;
    artiste: string;
    nomAlbum: string;
    paroles?: string[];
    datePublication: string;
    duree: number;
    nombreLecture: number;
}
