import GitHub from '@/components/icons/GitHub.astro'
import NextJS from '@/components/icons/NextJS.astro'
import Tailwind from '@/components/icons/Tailwind.astro'
import Astro from '@/components/icons/Astro.astro'
import Java from '@/components/icons/Java.astro'
import WildFly from '@/components/icons/WildFly.astro'
import MongoDb from '@/components/icons/MongoDb.astro'
import Cloudinary from '@/components/icons/Cloudinary.astro'
import Jsp from '@/components/icons/Jsp.astro'
import SqlDeveloper from '@/components/icons/SqlDeveloper.astro'
import Code from '@/components/icons/Code.astro'
import User from '@/components/icons/User.astro'
import type { Info, Proyect } from './types'
import React from '@/components/icons/React.astro'
import LinkedIn from '@/components/icons/LinkedIn.astro'
import Kotlin from '@/components/icons/Kotlin.astro'
import Medal from '@/components/icons/Medal.astro'
import Network from '@/components/icons/Network.astro'
import Database from '@/components/icons/Database.astro'
import Programmer from '@/components/icons/Programmer.astro'
import Bug from '@/components/icons/Bug.astro'
import Talk from '@/components/icons/Talk.astro'
import Teamwork from '@/components/icons/Teamwork.astro'

export const navs = [
  {
    id: 1,
    text: 'Proyectos',
    url: '/#proyectos',
    icon: Code,
  },
  {
    id: 2,
    text: 'Sobre mí',
    url: '/#sobre-mi',
    icon: User,
  },
  {
    id: 3,
    text: 'Logros',
    url: '/#logros',
    icon: Medal,
  },
]

export const contacts: any[] = [
  {
    id: 1,
    icon: GitHub,
    url: 'https://github.com/nicomelendez',
    color: '#24292E',
  },
  {
    id: 2,
    icon: LinkedIn,
    url: 'https://www.linkedin.com/in/nicolas-melendez/',
    color: '#0077B5',
  },
]
export function getInfo(path: string) {
  return informations.find((info) => info.path === path)
}

const TAGS = {
  NEXT: {
    name: 'Next.js',
    class: 'bg-[#24292F] text-white',
    icon: NextJS,
  },
  KOTLIN: {
    name: 'Kotlin',
    class: 'bg-[#5C2D91] text-white',
    icon: Kotlin,
  },
  REACT: {
    name: 'React',
    class: 'bg-[#007ACC] text-white',
    icon: React,
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    class: 'bg-[#265073] text-white',
    icon: Tailwind,
  },
  ASTRO: {
    name: 'Astro',
    class: 'bg-[#79155B]/70 text-white',
    icon: Astro,
  },
  JAVAEE: {
    name: 'Java',
    class: 'bg-[#6499E9]/60 text-white',
    icon: Java,
  },
  WILDFLY: {
    name: 'Wildfly',
    class: 'bg-[#0A3D66]/50 text-white',
    icon: WildFly,
  },
  SQL: {
    name: 'SQL',
    class: 'bg-[#3B3486]/60 text-white',
    icon: SqlDeveloper,
  },
  MONGODB: {
    name: 'MongoDB',
    class: 'bg-[#2B2A4C]/90 text-white',
    icon: MongoDb,
  },
  CLOUDINARY: {
    name: 'Cloudinary',
    class: 'bg-[#3442CD]/50 text-white',
    icon: Cloudinary,
  },
  JSP: {
    name: 'JSP',
    class: 'bg-[#1e184b]/70 text-white',
    icon: Jsp,
  },
  HACKATHON: {
    name: 'Hackathon',
    class: 'bg-[#DAA520]/70 text-white',
    icon: Medal,
  },
  INFRASTRUCTURE: {
    name: 'Infraestructura',
    class: 'bg-[#2E8B57]/70 text-white',
    icon: Network,
  },
  DATABASE: {
    name: 'Base de Datos',
    class: 'bg-[#4682B4]/70 text-white',
    icon: Database,
  },
  PROGRAMMING: {
    name: 'Programación',
    class: 'bg-[#8B0000]/70 text-white',
    icon: Programmer,
  },
  TESTING: {
    name: 'Testing',
    class: 'bg-[#4B0082]/70 text-white',
    icon: Bug,
  },
  COMMUNICATION: {
    name: 'Comunicación',
    class: 'bg-[#4B8B3B]/70 text-white',
    icon: Talk,
  },
  TEAMWORK: {
    name: 'Trabajo en equipo',
    class: 'bg-[#1e90ff]/70 text-white',
    icon: Teamwork,
  },
}

export const proyects: Proyect[] = [
  {
    id: 1,
    title: 'Doc AI',
    description:
      'Proporciona la información sobre un tema y obtén un documento Word para seguir editando.',
    resumen:
      'Analiza un contexto específico, hace preguntas para refinarlo, mejora el contexto con las respuestas. Luego, busca información y genera una plantilla en Word para tareas universitarias o de secundaria.',
    image:
      '/doc-ai.webp',
    url: 'https://doc-ai-free.vercel.app/',
    repository: 'https://github.com/nicomelendez/doc-ai',
    online: true,
    tags: [TAGS.ASTRO, TAGS.REACT, TAGS.TAILWIND],
  },
  {
    id: 2,
    title: 'Buildimage',
    description:
      'Buildimage es un potente editor de imágenes desarrollado con Next.js y aprovechando la potencia de Cloudinary.',
    resumen:
      'Descubre nuevas posibilidades y transforma tus fotos de manera fácil y rápida. ¡Explora las posibilidades creativas con Buildimage ahora mismo!.',
    image:
      '/build-img.webp',
    url: 'https://buildimg.vercel.app/',
    repository: 'https://github.com/nicomelendez/image-app',
    online: true,
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.CLOUDINARY],
  },
  {
    id: 4,
    title: 'Portal académico UTEC - Web',
    description:
      'Portal académico para UTEC que facilita la gestión de diversas actividades y registros.',
    resumen:
      'Portal académico que facilita la gestión de usuarios, eventos, constancias, reclamos y ITRs.',
    image:
      '/portal-utec.webp',
    url: '',
    repository: 'https://github.com/nicomelendez/proyecto-de-tecnicatura',
    online: false,
    tags: [TAGS.JSP, TAGS.JAVAEE, TAGS.SQL, TAGS.WILDFLY],
  },
  {
    id: 3,
    title: 'Portal académico UTEC - Aplicación móvil',
    description:
      'Aplicación móvil en Kotlin para gestionar reclamos en la UTEC.',
    resumen:
      'Solicitud, modificación, listado y eliminado de reclamos del portal académico, diseñada para dispositivos móviles.',
    image:
      '/phone-utec.webp',
    url: '',
    repository:
      'https://github.com/nicomelendez/proyecto-de-tecnicatura-app-movil',
    online: false,
    tags: [TAGS.KOTLIN],
  },
  {
    id: 5,
    title: 'MyBooks',
    description:
      'Aplicación con Nextjs y Tawlind, para la gestión de los libros que estas leyendo y controlar su estado.',
    resumen:
      'Una aplicación ideal para gestionar tus lecturas. Con una interfaz intuitiva, permite organizar tus libros, añadir reseñas y controlar su estado de lectura.',
    image:
      '/my-books.webp',
    url: 'https://mybooks-nu.vercel.app/',
    repository: 'https://github.com/nicomelendez/mybooks',
    online: true,
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.MONGODB],
  },
  {
    id: 6,
    title: 'Gestión de constancias UTEC',
    description:
      'Aplicación con windowsBuilder y Java, aplicación de windows con gestión de usuarios, constancias, eventos y generador de pdf.',
    resumen:
      'Una solución completa para la gestión de usuarios, constancias, eventos y la generación de PDF. Simplifica los procesos administrativos.',
    image:
      '/gestion-constancias.webp',
    url: '',
    repository:
      'https://github.com/nicomelendez/Gestion-de-constancias-UTEC-cliente',
    online: false,
    tags: [TAGS.JAVAEE, TAGS.SQL, TAGS.WILDFLY],
  },
]

export const informations: Info[] = [
  {
    id: 1,
    title: 'Proyecto Final de Tecnicatura',
    resumen:
      'Desarrollo e implementación de un producto completo que incluye una aplicación web y móvil, bases de datos operativa y corporativa, infraestructura de red simulada en GNS3, y un proceso de testing con herramientas como TestLink y Mantis.',
    fecha: '2024',
    image: '/proyecto-tec.webp',
    descripcion:
      'Este proyecto final abarcó el desarrollo de una aplicación web cliente/servidor donde la API y el cliente se ejecutaban en el mismo proyecto. La aplicación móvil, desarrollada en Kotlin, consumía la API de la aplicación web. La base de datos operativa fue creada con SQL Developer, y Power BI se utilizó para visualizar los datos en la base de datos corporativa. La infraestructura de red se simuló en GNS3, configurando una topología que interconectaba dos sedes universitarias mediante VPN y utilizando dos firewalls pfSense para establecer una DMZ en la sede central. El proceso de testing incluyó seis ciclos de pruebas, gestionando casos de prueba con TestLink y registrando incidentes en Mantis para su resolución.',
    path: 'proyecto-final-tecnicatura',
    github: 'https://github.com/nicomelendez/proyecto-de-tecnicatura',
    aprendisaje:
      'A lo largo del desarrollo del proyecto final, adquirí habilidades en el diseño y configuración de infraestructuras de red, la implementación de aplicaciones cliente/servidor con tecnologías como JSP y JavaEE, y la integración de bases de datos con SQL Developer y Power BI. Además, me familiaricé con el ciclo completo de pruebas de software, desde la creación de casos de prueba hasta la gestión de incidencias con herramientas como TestLink y Mantis, lo que me proporcionó una visión integral del desarrollo y la implementación de soluciones tecnológicas completas.',
    tags: [
      TAGS.INFRASTRUCTURE,
      TAGS.PROGRAMMING,
      TAGS.DATABASE,
      TAGS.TESTING,
      TAGS.TEAMWORK,
      TAGS.COMMUNICATION,
    ],
  },
  {
    id: 2,
    title: 'Proyecto 3er semestre',
    resumen:
      'Diseño e implementación de infraestructura interconectando sedes universitarias a través de ISP, configuraciones como VLAN, ChannelGroup, Accesslist, etc. Junto a una aplicación de gestión de usuarios con JSP y JavaEE.',
    fecha: '2023',
    image: '/pinfra.webp',
    descripcion:
      'Para este proyecto del tercer semestre, nos enfrentamos a un desafío doble: primero, diseñar y configurar la infraestructura de red de la Universidad Tecnológica y sus sedes utilizando herramientas como GNS3 para simular y planificar la conectividad. Esta etapa implicó abordar problemas como la distancia entre las sedes, la variedad de dispositivos y usuarios, y la necesidad de escalabilidad y eficiencia. Luego, nos sumergimos en la creación de una aplicación de gestión de usuarios, utilizando tecnologías como Server Pages, JavaEE y Oracle SQL Developer. Esta fase del proyecto nos permitió integrar las habilidades aprendidas en desarrollo y arquitectura de software, culminando en una solución integral que mejora la infraestructura y la gestión de la Universidad.',
    path: 'proyecto-final-3er-semestre',
    aprendisaje:
      'Durante el transcurso del tercer semestre y la ejecución del proyecto final, adquirí conocimientos en los fundamentos de infraestructura, incluyendo la conectividad de dispositivos y sus comunicaciones, así como la implementación de conceptos clave como el protocolo OSPF, access-lists, VLANs, channel groups y DHCP. Además, exploré tecnologías como JSP, Oracle y JWT, lo que amplió mi comprensión en el desarrollo de aplicaciones web y la gestión de bases de datos, brindándome una base para enfrentar desafíos futuros.',
    tags: [
      TAGS.INFRASTRUCTURE,
      TAGS.PROGRAMMING,
      TAGS.DATABASE,
      TAGS.TESTING,
      TAGS.TEAMWORK,
      TAGS.COMMUNICATION,
    ],
  },
  {
    id: 3,
    title: 'Proyecto 2do semestre',
    fecha: '2023',
    resumen:
      'Desarrollo de una aplicación para gestionar constancias, creada con Java, SQL developer y WindowsBuilder. Este proyecto abarcaba lo que aprendimos en Programación, Base de datos y Testing.',
    image: '/pdt.webp',
    github:
      'https://github.com/nicomelendez/Gestion-de-constancias-UTEC-cliente',
    descripcion:
      'Entrega del proyecto final del segundo semestre: una aplicación de gestión de constancias desarrollada para abordar la creciente necesidad de centralizar y organizar las solicitudes de constancias emitidas por la secretaría de la Licenciatura en Tecnologías de la Información (LTI). Este proyecto se enfocó en desarrollar un sistema que permitiera la gestión centralizada de las solicitudes, la generación de informes y la asignación de tutores a eventos específicos, cumpliendo con los requerimientos funcionales establecidos para los módulos de gestión de usuarios, constancias y análisis de reportes.',
    path: 'proyecto-final-2do-semestre',
    aprendisaje:
      'Durante el segundo semestre, este proyecto me brindó experiencia en los fundamentos de programación, base de datos y testing. Las materias cursadas junto con el desarrollo del proyecto me permitieron comprender y vivir todo el ciclo de desarrollo de una aplicación. Desde la generación de casos de uso hasta la creación de casos de prueba, abordamos todos los aspectos necesarios para desarrollar una aplicación completa. Diseñamos la base de datos, desarrollamos tanto el cliente como el servidor, y realizamos pruebas que fueron registradas en TestLink y reportadas en Mantis. Esta experiencia práctica consolidó mi comprensión de los principios fundamentales y me preparó para futuros desafíos.',
    tags: [TAGS.PROGRAMMING, TAGS.DATABASE, TAGS.TESTING, TAGS.TEAMWORK, TAGS.COMMUNICATION,],
  },
  {
    id: 4,
    fecha: '2023',
    image: '/cloudinary.webp',
    resumen:
      'Desarrollé un editor de fotos que fue seleccionado como uno de los diez mejores proyectos en el hackathon organizado por MiduDev y Cloudinary, utilizando sus servicios para manipular imágenes.',
    drive:
      'https://drive.google.com/drive/folders/1eFYMjZ7Y69OsxracrwwUnUg7bRtNNsW1?usp=sharing',
    link: 'https://buildimage.vercel.app/',
    github: 'https://github.com/nicomelendez/image-app',
    title: 'Hackathon Midudev - Cloudinary',
    descripcion:
      'Participé en la hackathon de una semana organizada por MiduDev, un streamer de Twitch, y Cloudinary, una empresa de servicios de imágenes en la nube. Durante este evento, tuve que utilizar los servicios de Cloudinary para crear una aplicación. Esta experiencia mejoró mi capacidad para crear soluciones innovadoras y eficientes en el desarrollo web.',
    path: 'hackathon-midudev-cloudinary',
    aprendisaje:
      'Durante la emocionante semana del hackathon, adquirí una valiosa experiencia que abarcó desde la comprensión de los servicios de Cloudinary hasta la implementación práctica de una aplicación web funcional. Aprendí a utilizar de manera efectiva las herramientas de Cloudinary para manipular imágenes en mi aplicación, lo que amplió significativamente mi conocimiento en el desarrollo web. Además, el desafío de diseñar un estado global y un hook personalizado para integrar los servicios y estados de la aplicación me permitió fortalecer mis habilidades en la creación de soluciones eficientes y escalables. Esta experiencia me enseñó la importancia de la creatividad, la adaptabilidad y el trabajo bajo presión en el desarrollo de software.',
    tags: [TAGS.HACKATHON, TAGS.PROGRAMMING],
  },
  {
    id: 5,
    title: 'Reto Hornex - Impulsa Industria (CIU)',
    fecha: '2022',
    resumen:
      'Aplicación de la metodología de Innovación Abierta para resolver un reto propuesto por la empresa Hornex, en el marco del programa Impulsa Industria organizado por la Cámara de Industrias del Uruguay (CIU).',
    image: '/hornex.webp',
    drive:
      'https://drive.google.com/file/d/1AbVWgJw6vo-cWhRUH3h-P5ReG9A5_J_W/view?usp=sharing',
    descripcion:
      'Participé en el Reto Hornex, donde nos enfrentamos al desafío de crear una sugerencia para que la empresa Hornex. Utilizamos la metodología de Innovación Abierta para identificar y resolver este problema, lo que nos permitió fortalecer nuestras habilidades blandas y contribuir al desarrollo de propuestas innovadoras que beneficiaron tanto a la empresa como a nosotros como participantes.',
    path: 'reto-hornex',
    aprendisaje:
      'Durante mi participación, adquirí experiencia en el desarrollo de habilidades blandas, especialmente en la comunicación efectiva y la negociación al tratar directamente con el cliente. Presentar y defender nuestras propuestas ante el dueño de la empresa requirió habilidades de comunicación claras. Además, el proceso de colaboración y trabajo en equipo me permitió mejorar mis habilidades de liderazgo, tolerancia a la frustración y capacidad para negociar. Esta experiencia no solo me brindó una perspectiva práctica sobre cómo trabajar con clientes en entornos profesionales, sino que también fortaleció mi confianza y habilidades interpersonales, preparándome mejor para futuras colaboraciones y desafíos en el mundo laboral.',
    tags: [TAGS.COMMUNICATION, TAGS.TEAMWORK],
  },
  {
    id: 6,
    title: 'NASA Space Apps Challenge',
    resumen:
      'Participé en el NASA Space Apps Challenge junto a un grupo de amigos, desarrollando una demo de un juego educativo que nos permitió clasificar a la fase global del hackathon.',
    fecha: '2021',
    link: 'https://2021.spaceappschallenge.org/challenges/statements/space-quest-the-game/teams/ctrl-y-1/project',
    image: '/nasa.webp',
    drive: 'https://photos.app.goo.gl/qH8uRyVM8Hx7DNTz6',
    descripcion:
      "Durante tres días, trabaje junto a cuatro amigos en la creación de una demo de un juego educativo para el desafío 'Space Quest: The Game' del NASA Space Apps Challenge. Abordamos temas del espacio, diseñando una idea de juego interactivo que enseñara a los jugadores sobre el espacio. Esta experiencia nos permitió fortalecer nuestras habilidades blandas al colaborar en equipo y defender una idea.",
    path: 'hackathon-nasa-space-challenge',
    aprendisaje:
      'Participar en el desafío de la NASA Space Apps Challenge fue una oportunidad única para desarrollar habilidades blandas clave. Trabajar en equipo me enseñó la importancia de la comunicación efectiva, la colaboración y la capacidad de defender nuestras ideas. Aprendimos a escuchar, a comprometernos con las opiniones de los demás y a resolver conflictos de manera constructiva.',
    tags: [TAGS.HACKATHON, TAGS.COMMUNICATION, TAGS.TEAMWORK],
  },
]
