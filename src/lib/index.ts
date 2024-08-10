/* import type { Info, Proyect, Study, Contact } from '@/interfaces'
import GitHubIcon from '@/components/icon/Github.astro'
import LinkedinIcon from '@/components/icon/LinkedIn.astro'
import NextJS from '@/components/icon/NextJS.astro'
import Tailwind from '@/components/icon/Tailwind.astro'
import Astro from '@/components/icon/Astro.astro'
import Java from '@/components/icon/Java.astro'
import WildFly from '@/components/icon/WildFly.astro'
import MongoDb from '@/components/icon/MongoDb.astro'
import Cloudinary from '@/components/icon/Cloudinary.astro'
import Jsp from '@/components/icon/Jsp.astro'
import SqlDeveloper from '@/components/icon/SqlDeveloper.astro'
import Code from '@/components/icon/Code.astro'
import User from '@/components/icon/User.astro'
import ContactIcon from '@/components/icon/Contact.astro'

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
    text: 'Contacto',
    url: '/#contacto',
    icon: ContactIcon,
  },
]

export const contacts: Contact[] = [
  {
    id: 1,
    icon: GitHubIcon,
    url: 'https://github.com/nicomelendez',
  },
  {
    id: 2,
    icon: LinkedinIcon,
    url: 'https://www.linkedin.com/in/nicolas-melendez/',
  },
]
export function getInfo(path: string) {
  return informations.find((info) => info.path === path)
}
export function getProyect(path: string) {
  return proyects.find((project) => project.path === path)
}

const TAGS = {
  NEXT: {
    name: 'Next.js',
    class: 'bg-[#3D3B40] text-white',
    icon: NextJS,
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
    class: 'bg-[#072541]/50 text-white',
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
}

export const proyects: Proyect[] = [
  {
    id: 1,
    title: 'Cuanti',
    description:
      'Cuanti es una plataforma revolucionaria diseñada para agilizar los procesos relacionados con cálculos y pedidos de materiales de construcción. Con una interfaz intuitiva y moderna, Cuanti se destaca en la optimización de la gestión de proyectos de construcción.',
    resumen:
      'Plataforma para realizar cálculos y gestionar pedidos de materiales de construcción. ¡Descubre una nueva forma de simplificar tus procesos de construcción!.',
    image:
      'https://res.cloudinary.com/djslvlh8h/image/upload/f_auto,q_auto/v1/portafolio/pages/v3/uq1rmfwb1hpnnudxdr49',
    url: 'https://cuanti-uy.vercel.app/',
    repository: '-',
    online: true,
    technologies: [TAGS.NEXT, TAGS.TAILWIND],
    path: 'cuanti',
    frontend:
      'Utiliza Next.js y se ha implementado con el poderoso diseño de Tailwind CSS para ofrecer una experiencia visualmente atractiva y altamente optimizada.',
    backend:
      'La plataforma cuenta con una robusta API construida con Node.js y Express, permitiendo la generación eficiente de cálculos y la gestión de usuarios de manera efectiva.',
    database:
      'Para el almacenamiento de datos, Cuanti utiliza MongoDB, una base de datos NoSQL que proporciona flexibilidad y rendimiento en la gestión de información.',
  },
  {
    id: 2,
    title: 'BuildImg',
    description:
      'BuildImg es un potente editor de imágenes desarrollado con Next.js y aprovechando la potencia de Cloudinary.',
    resumen:
      'Descubre nuevas posibilidades y transforma tus fotos de manera fácil y rápida. ¡Explora las posibilidades creativas con BuildImg ahora mismo!.',
    image:
      'https://res.cloudinary.com/djslvlh8h/image/upload/f_auto,q_auto/v1/portafolio/pages/v3/c1zqdhmwhj78vxjlotxy',
    url: 'https://buildimg.vercel.app/',
    repository: 'https://github.com/nicomelendez/image-app',
    online: true,
    technologies: [TAGS.NEXT, TAGS.TAILWIND, TAGS.CLOUDINARY],
    path: 'buildimg',
  },
  {
    id: 3,
    title: 'Gestión de usuarios',
    description: 'xd',
    resumen:
      'Diseñada para facilitar la administración de usuarios en entornos universitarios. Solicitudes de registro, confirmacion y gestión de usuario.',
    image:
      'https://res.cloudinary.com/djslvlh8h/image/upload/f_auto,q_auto/v1/portafolio/pages/v3/jxrpfmgbyuv3jcbsvxvf',
    url: '',
    repository:
      'https://git.utec.edu.uy/valentina.hernandez/pinfra-error404-minas-2023',
    online: false,
    technologies: [TAGS.JSP, TAGS.JAVAEE, TAGS.SQL, TAGS.WILDFLY],
    path: 'gestion-de-usuarios',
  },
  {
    id: 4,
    title: 'MyBooks',
    description:
      'Aplicación con Nextjs y Tawlind, para la gestión de los libros que estas leyendo y controlar su estado.',
    resumen:
      'Una aplicación ideal para gestionar tus lecturas. Con una interfaz intuitiva, permite organizar tus libros, añadir reseñas y controlar su estado de lectura.',
    image:
      'https://res.cloudinary.com/djslvlh8h/image/upload/f_auto,q_auto/v1/portafolio/pages/v3/wl8hfiiigjbrcgllo5vp',
    url: 'https://mybooks-nu.vercel.app/',
    repository: 'https://github.com/nicomelendez/mybooks',
    online: true,
    technologies: [TAGS.NEXT, TAGS.TAILWIND, TAGS.MONGODB],
    path: 'mybooks',
  },
  {
    id: 5,
    title: 'Gestión de constancias UTEC',
    description:
      'Aplicación con windowsBuilder y Java, aplicación de windows con gestión de usuarios, constancias, eventos y generador de pdf.',
    resumen:
      'Una solución completa para la gestión de usuarios, constancias, eventos y la generación de PDF. Simplifica los procesos administrativos.',
    image:
      'https://res.cloudinary.com/djslvlh8h/image/upload/f_auto,q_auto/v1/portafolio/pages/v3/worhap3a0iaz7ifxlnvb',
    url: '',
    repository:
      'https://github.com/nicomelendez/Gestion-de-constancias-UTEC-cliente',
    online: false,
    technologies: [TAGS.JAVAEE, TAGS.SQL, TAGS.WILDFLY],
    path: 'gestion-de-constancias-utec',
  },
  {
    id: 6,
    title: 'Books',
    description: 'Aplicación con Astro para probar View Transitions API.',
    resumen:
      ' Este proyecto, inspirado en el trabajo de MiduDev, proporciona un ejemplo guiado para entender y experimentar con las capacidades de View Transitions API.',
    image:
      'https://res.cloudinary.com/djslvlh8h/image/upload/f_auto,q_auto/v1/portafolio/pages/v3/qkcisq6hz1elzyeo9f2m',
    url: '',
    repository: 'https://github.com/nicomelendez/books',
    online: true,
    technologies: [TAGS.ASTRO, TAGS.TAILWIND],
    path: 'books',
  },
]

export const informations: Info[] = [
  {
    id: 1,
    titulo: 'Proyecto Infraestructura 3er semestre',
    resumen:
      'Diseño e implementación de infraestructura interconectando sedes universitarias a través de ISP, configuraciones como VLAN, ChannelGroup, Accesslist, etc. Junto a una aplicación de gestión de usuarios con JSP y JavaEE.',
    fecha: '2023',
    img: 'https://res.cloudinary.com/djslvlh8h/image/upload/f_auto,q_auto/v1/portafolio/info/a7jiaectulhuoamondsk',
    descripcion:
      'Para este proyecto del tercer semestre, nos enfrentamos a un desafío doble: primero, diseñar y configurar la infraestructura de red de la Universidad Tecnológica y sus sedes utilizando herramientas como GNS3 para simular y planificar la conectividad. Esta etapa implicó abordar problemas como la distancia entre las sedes, la variedad de dispositivos y usuarios, y la necesidad de escalabilidad y eficiencia. Luego, nos sumergimos en la creación de una aplicación de gestión de usuarios, utilizando tecnologías como Server Pages, JavaEE y Oracle SQL Developer. Esta fase del proyecto nos permitió integrar las habilidades aprendidas en desarrollo y arquitectura de software, culminando en una solución integral que mejora la infraestructura y la gestión de la Universidad.',
    path: 'proyecto-final-3er-semestre',
    drive:
      'https://drive.google.com/drive/folders/1Rc8eOX2XjpnrqmaQE2r1YUlIrAye1EnV?usp=sharing',
    github:
      'https://git.utec.edu.uy/valentina.hernandez/pinfra-error404-minas-2023',
    aprendisaje:
      'Durante el transcurso del tercer semestre y la ejecución del proyecto final, adquirí conocimientos en los fundamentos de infraestructura, incluyendo la conectividad de dispositivos y sus comunicaciones, así como la implementación de conceptos clave como el protocolo OSPF, access-lists, VLANs, channel groups y DHCP. Además, exploré tecnologías como JSP, Oracle y JWT, lo que amplió mi comprensión en el desarrollo de aplicaciones web y la gestión de bases de datos, brindándome una base para enfrentar desafíos futuros.',
  },
  {
    id: 2,
    titulo: 'Proyecto PDT 2do semestre',
    fecha: '2023',
    resumen:
      'Desarrollo de una aplicación para gestionar constancias, creada con Java, SQL developer y WindowsBuilder. Este proyecto abarcaba lo que aprendimos en Programación, Base de datos y Testing.',
    img: 'https://res.cloudinary.com/djslvlh8h/image/upload/f_auto,q_auto/v1/portafolio/info/oztuemf3tdc3he2r1nn2',
    drive:
      'https://drive.google.com/drive/folders/1GYNmdPLqm-lzOqLl-VZO5xdQ3CK-V3rc?usp=sharing',
    github:
      'https://github.com/nicomelendez/Gestion-de-constancias-UTEC-cliente',
    descripcion:
      'Entrega del proyecto final del segundo semestre: una aplicación de gestión de constancias desarrollada para abordar la creciente necesidad de centralizar y organizar las solicitudes de constancias emitidas por la secretaría de la Licenciatura en Tecnologías de la Información (LTI). Este proyecto se enfocó en desarrollar un sistema que permitiera la gestión centralizada de las solicitudes, la generación de informes y la asignación de tutores a eventos específicos, cumpliendo con los requerimientos funcionales establecidos para los módulos de gestión de usuarios, constancias y análisis de reportes.',
    path: 'proyecto-final-2do-semestre',
    aprendisaje:
      'Durante el segundo semestre, este proyecto me brindó experiencia en los fundamentos de programación, base de datos y testing. Las materias cursadas junto con el desarrollo del proyecto me permitieron comprender y vivir todo el ciclo de desarrollo de una aplicación. Desde la generación de casos de uso hasta la creación de casos de prueba, abordamos todos los aspectos necesarios para desarrollar una aplicación completa. Diseñamos la base de datos, desarrollamos tanto el cliente como el servidor, y realizamos pruebas que fueron registradas en TestLink y reportadas en Mantis. Esta experiencia práctica consolidó mi comprensión de los principios fundamentales y me preparó para futuros desafíos.',
  },
  {
    id: 3,
    fecha: '2023',
    img: 'https://res.cloudinary.com/djslvlh8h/image/upload/f_auto,q_auto/v1/portafolio/info/zkimsh5iyyvdr28y95so',
    resumen:
      'Desarrollé un editor de fotos que fue seleccionada como una de las diez mejores en el hackathon organizado por MiduDev y Cloudinary.',
    drive:
      'https://drive.google.com/drive/folders/1eFYMjZ7Y69OsxracrwwUnUg7bRtNNsW1?usp=sharing',
    link: 'https://buildimg.vercel.app/',
    github: 'https://github.com/nicomelendez/image-app',
    titulo: 'Hackathon Midudev - Cloudinary',
    descripcion:
      'Participé en la hackathon de una semana organizada por MiduDev, un streamer de Twitch, y Cloudinary, una empresa de servicios de imágenes en la nube. Durante este evento, tuve que utilizar los servicios de Cloudinary para crear una aplicación. Esta experiencia mejoró mi capacidad para crear soluciones innovadoras y eficientes en el desarrollo web.',
    path: 'hackathon-midudev-cloudinary',
    aprendisaje:
      'Durante la emocionante semana del hackathon, adquirí una valiosa experiencia que abarcó desde la comprensión de los servicios de Cloudinary hasta la implementación práctica de una aplicación web funcional. Aprendí a utilizar de manera efectiva las herramientas de Cloudinary para manipular imágenes en mi aplicación, lo que amplió significativamente mi conocimiento en el desarrollo web. Además, el desafío de diseñar un estado global y un hook personalizado para integrar los servicios y estados de la aplicación me permitió fortalecer mis habilidades en la creación de soluciones eficientes y escalables. Esta experiencia me enseñó la importancia de la creatividad, la adaptabilidad y el trabajo bajo presión en el desarrollo de software.',
  },
  {
    id: 4,
    titulo: 'Reto Hornex - Impulsa Industria (CIU)',
    fecha: '2022',
    resumen:
      'Manejo de metodología de Innovación Abierta, aplicada a la resolución de un reto de la empresa Hornex a través de la convocatoria realizada por Impulsa Industria (CIU).',
    img: 'https://res.cloudinary.com/djslvlh8h/image/upload/f_auto,q_auto/v1/portafolio/info/iybt1szvewvyu9yfbnrk',
    drive:
      'https://drive.google.com/file/d/1AbVWgJw6vo-cWhRUH3h-P5ReG9A5_J_W/view?usp=sharing',
    descripcion:
      'Participé en el Reto Hornex, donde nos enfrentamos al desafío de crear una sugerencia para que la empresa Hornex. Utilizamos la metodología de Innovación Abierta para identificar y resolver este problema, lo que nos permitió fortalecer nuestras habilidades blandas y contribuir al desarrollo de propuestas innovadoras que beneficiaron tanto a la empresa como a nosotros como participantes.',
    path: 'reto-hornex',
    aprendisaje:
      'Durante mi participación, adquirí experiencia en el desarrollo de habilidades blandas, especialmente en la comunicación efectiva y la negociación al tratar directamente con el cliente. Presentar y defender nuestras propuestas ante el dueño de la empresa requirió habilidades de comunicación claras. Además, el proceso de colaboración y trabajo en equipo me permitió mejorar mis habilidades de liderazgo, tolerancia a la frustración y capacidad para negociar. Esta experiencia no solo me brindó una perspectiva práctica sobre cómo trabajar con clientes en entornos profesionales, sino que también fortaleció mi confianza y habilidades interpersonales, preparándome mejor para futuras colaboraciones y desafíos en el mundo laboral.',
  },
  {
    id: 5,
    titulo: 'NASA Space Apps Challenge',
    resumen:
      'Participé en el concurso NASA Space Apps Challenge, donde ganamos con un gurpo de amigos a nivel nacional clasificando a la fase global.',
    fecha: '2021',
    link: 'https://2021.spaceappschallenge.org/challenges/statements/space-quest-the-game/teams/ctrl-y-1/project',
    img: 'https://res.cloudinary.com/djslvlh8h/image/upload/f_auto,q_auto/v1/portafolio/info/e0ohbru0kexku9phwobb',
    drive: 'https://photos.app.goo.gl/qH8uRyVM8Hx7DNTz6',
    descripcion:
      "Durante tres días, trabaje junto a cuatro amigos en la creación de una demo de un juego educativo para el desafío 'Space Quest: The Game' del NASA Space Apps Challenge. Abordamos temas del espacio, diseñando una idea de juego interactivo que enseñara a los jugadores sobre el espacio. Esta experiencia nos permitió no solo fortalecer nuestras habilidades blandas al colaborar en equipo y defender una idea.",
    path: 'hackathon-nasa-space-challenge',
    aprendisaje:
      'Participar en el desafío de la NASA Space Apps Challenge fue una oportunidad única para desarrollar habilidades blandas clave. Trabajar en equipo me enseñó la importancia de la comunicación efectiva, la colaboración y la capacidad de defender nuestras ideas. Aprendimos a escuchar, a comprometernos con las opiniones de los demás y a resolver conflictos de manera constructiva.',
  },
]
 */