export interface Contact {
  id: number;
  icon: any;
  url: string;
}

export interface Proyect {
  id: number;
  title: string;
  description: string;
  resumen: string;
  image: string;
  url: string;
  repository: string;
  online: boolean;
  technologies: any;
}

export interface Technology {
  id: number;
  img: string;
  class: string;
  span: string;
}

export interface TechnologiesProyect {
  idProyecto: number;
  techonolohy: Technology[];
}

export interface Study {
  id: number;
  title: string;
  descripcion: string;
  initialDate: string;
  finalyDate: string;
  finally: boolean;
}

export interface Info {
  id: number;
  titulo: string;
  resumen: string;
  fecha: string;
  img: string;
  descripcion: string;
  path:string;
  drive:string;
  link?: string;
  github?:string;
  aprendisaje:string;
}
