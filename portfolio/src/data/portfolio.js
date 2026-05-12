// Información del portfolio. Edítala libremente.
// Las imágenes viven en /src/assets y se importan como módulos para que
// Vite las procese y emita con rutas relativas en el build (dist/).
// Esto permite abrir dist/index.html con doble click sin servidor.

import profileImg from '../assets/foto1.png'

export const profile = {
  name: 'Sergio Herrera',
  role: 'Desarrollador de aplicaciones web',
  tagline:
    'Hago aplicaciones web con React, JavaScript y TypeScript. Vengo de atención al cliente, así que pienso primero en quien va a usar lo que construyo.',
  location: 'San Cristóbal de La Laguna, Tenerife',
  email: 'sergioherrerarodriguez7@gmail.com',
  // Foto principal (Hero), importada como módulo
  photo: profileImg,
  socials: {
    github:   'https://github.com/tu-usuario',
    linkedin: 'https://www.linkedin.com/in/tu-usuario',
  },
}

export const stats = [
  { label: 'Stack',     value: 'Full-stack' },
  { label: 'Lenguajes', value: 'JS · TS · Python' },
  { label: 'Ubicación', value: 'Tenerife' },
]

export const aboutText = [
  'Soy desarrollador de aplicaciones web en formación. Trabajo sobre todo con React, JavaScript y TypeScript en frontend, y uso Python cuando toca meterme en backend.',
  'Antes de dedicarme a esto pasé varios años en logística y atención al cliente. De ahí me llevo lo que más se nota cuando entras a un equipo técnico: saber resolver problemas bajo presión, comunicarte con claridad y entender qué necesita la persona que va a usar lo que estás construyendo.',
  'Ahora mismo estoy cerrando mi formación con proyectos reales, como un sistema de inventario para un centro educativo y un chatbot empresarial que genera presupuestos automáticos. Busco mi primera oportunidad como desarrollador para aportar lo que sé y seguir aprendiendo dentro de un buen equipo.',
]

// Skills agrupadas en 4 categorías. Sin niveles (uniformes).
export const skills = {
  Frontend: [
    'React',
    'JavaScript (ES6+)',
    'TypeScript',
    'HTML5',
    'CSS3',
    'Diseño responsive',
  ],
  Backend: [
    'Python',
    'APIs REST',
    'Bases de datos relacionales',
  ],
  'Automatización y herramientas': [
    'n8n',
    'Git',
    'GitHub',
    'VS Code',
  ],
  Otras: [
    'Atención al cliente',
    'Resolución de problemas',
    'Trabajo en equipo',
  ],
}

export const projects = [
  {
    title: 'SmartEconomat',
    subtitle: 'Proyecto Final de Ciclo · Aplicación full-stack',
    description:
      'Aplicación full-stack para la gestión integral del economato del IES La Candelaria. Cubre el ciclo completo de operación: catálogo de productos y proveedores, pedidos de compra, recepción con albaranes, control de inventario multilote con estrategia FEFO, escandallo y producción de recetas, distribución a aulas, facturación y panel de control. Monorepo NestJS + React 19 con más de 120.000 líneas de código, RBAC granular, internacionalización, exportación documental a PDF y Excel, y lectura de códigos de barras integrada con OpenFoodFacts.',
    highlights: [
      '759 commits en 6 meses con flujo Git Flow y Pull Requests',
      '120+ tests automatizados (unitarios, integración y E2E)',
      'Pipeline CI/CD con GitHub Actions, Docker y monitorización con Sentry',
    ],
    tags: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'TypeORM', 'Redis', 'Material-UI', 'Redux Toolkit', 'JWT', 'Docker', 'GitHub Actions', 'Jest', 'Vitest', 'Playwright'],
  },
  {
    title: 'Chatbot empresarial',
    subtitle: 'Automatización con n8n',
    description:
      'Chatbot empresarial montado sobre n8n para automatizar la atención al cliente. Resuelve dudas sobre productos, guía al usuario durante la compra y genera presupuestos automáticos a partir de la conversación. Pensado para integrarse en el flujo de una empresa real, da respuesta inmediata las 24 horas y libera al equipo humano de las tareas repetitivas.',
    tags: ['n8n', 'JavaScript', 'APIs REST', 'Automatización', 'Integración con IA'],
  },
]
