import { Liste } from "../interfaces/liste";
import { CHANSONS } from "./chansons";

export const LISTES: Liste[] = [{
    id: 0,
    titre: "FEQ 2024 Playlist",
    sousTitre: "Grandes scènes",
    image: "assets/logo-musique-defaut-orange.png",
    description: "Pour revivre les moments du FEQ 2024.",
    type: "Liste de lecture",
    verifie: true,
    datePublication: "2023-05-12",
    visibilite: true,
    nombreSauvegardes: 1500,
    chansons: [
      CHANSONS[4], CHANSONS[1], CHANSONS[7], CHANSONS[8]
    ]
  }, 
  {
    id: 1,
    titre: "Café Chill",
    sousTitre: "Pour des matins relaxants",
    image: "assets/logo-musique-defaut-orange.png",
    description: "Une sélection douce pour accompagner votre café.",
    type: "Liste de lecture",
    verifie: true,
    datePublication: "2023-05-12",
    visibilite: true,
    nombreSauvegardes: 1500,
    chansons: [
      CHANSONS[0], CHANSONS[1]
    ]
  },
  {
    id: 2,
    titre: "Workout Energy",
    sousTitre: "Boostez votre séance",
    image: "assets/logo-musique-defaut-bleu.png",
    description: "Des beats énergiques pour une motivation maximale.",
    type: "Liste de lecture",
    verifie: true,
    datePublication: "2024-01-10",
    visibilite: true,
    nombreSauvegardes: 2000,
    chansons: [
        CHANSONS[2], CHANSONS[3]
    ]
  },
  {
    id: 3,
    titre: "Relax & Unwind",
    sousTitre: "Détente après une longue journée",
    image: "assets/logo-musique-defaut-jaune.png",
    description: "Des sons apaisants pour relâcher la tension.",
    type: "Album",
    verifie: false,
    datePublication: "2022-07-21",
    visibilite: false,
    nombreSauvegardes: 780,
    chansons: [
        CHANSONS[4], CHANSONS[5]
    ]
  },
  {
    id: 4,
    titre: "Road Trip Vibes",
    image: "assets/logo-musique-defaut-rose.png",
    description: "Les hits parfaits pour prendre la route.",
    type: "Liste de lecture",
    verifie: true,
    datePublication: "2023-11-02",
    visibilite: true,
    nombreSauvegardes: 4500,
    chansons: [
        CHANSONS[6], CHANSONS[7]
    ]
  },
  {
    id: 5,
    titre: "Party Hits",
    sousTitre: "Ambiance garantie",
    image: "assets/logo-musique-defaut-vert.png",
    description: "Tous les morceaux pour animer votre soirée.",
    type: "Artiste",
    verifie: true,
    datePublication: "2024-06-15",
    visibilite: true,
    nombreSauvegardes: 3200,
    chansons: [
        CHANSONS[8], CHANSONS[9]
    ]
  },
  {
    id: 6,
    titre: "Focus & Study",
    image: "assets/logo-musique-defaut.png",
    description: "Une playlist pour vous aider à rester concentré.",
    type: "Liste de lecture",
    verifie: false,
    datePublication: "2023-03-08",
    visibilite: true,
    nombreSauvegardes: 2400,
    chansons: [
        CHANSONS[10], CHANSONS[11]
    ]
  },
  {
    id: 7,
    titre: "Throwback Classics",
    sousTitre: "Retour vers les années 90",
    image: "assets/logo-musique-defaut-orange.png",
    description: "Les meilleurs hits des années passées.",
    type: "Liste de lecture",
    verifie: false,
    datePublication: "2021-12-01",
    visibilite: false,
    nombreSauvegardes: 520,
    chansons: [
        CHANSONS[12], CHANSONS[13]
    ]
  },
  {
    id: 8,
    titre: "Indie Discoveries",
    image: "assets/logo-musique-defaut-bleu.png",
    description: "Explorez les artistes indépendants émergents.",
    type: "Liste de lecture",
    verifie: true,
    datePublication: "2024-02-05",
    visibilite: true,
    nombreSauvegardes: 1200,
    chansons: [
        CHANSONS[14], CHANSONS[15]
    ]
  },
  {
    id: 9,
    titre: "Rock Legends",
    sousTitre: "Les grands classiques du rock",
    image: "assets/logo-musique-defaut-jaune.png",
    description: "Revivez les meilleurs moments du rock.",
    type: "Album",
    verifie: false,
    datePublication: "2022-08-16",
    visibilite: true,
    nombreSauvegardes: 3500,
    chansons: [
        CHANSONS[16], CHANSONS[17]
    ]
  },
  {
    id: 10,
    titre: "Jazz Classics",
    sousTitre: "Les standards du jazz",
    image: "assets/logo-musique-defaut-rose.png",
    description: "Les incontournables pour les amateurs de jazz.",
    type: "Artiste",
    verifie: true,
    datePublication: "2023-10-01",
    visibilite: true,
    nombreSauvegardes: 2750,
    chansons: [
        CHANSONS[18], CHANSONS[19]
    ]
  }
]