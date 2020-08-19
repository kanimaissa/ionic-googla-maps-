import { Service } from './service';

export class Agence {
  adresse_ip: string;
  chef: string;
  email: string;
  encombrement: number;
  statut:number;
  fax: string;
  governerat: string;
  gps_x: number;
  gps_y: number;
  heure_fermeture: string;
  horaire_ouverture: string;
  id: number;
  ip_server: string;
  last_sync: string;
  lieu: string;
  logo: string;
  nbattente: number;
  nom_agence: string;
  num_agence: string;
  tel: string;
  services : Service[] 

  }