import type { Locale } from "./config";

const fr = {
  // META
  "meta.title": "Victor Deleau · Ingénieur Backend .NET Senior",
  "meta.description":
    "Ingénieur backend .NET senior. Je modernise des applications métier en production, sans gel des fonctionnalités : Clean Architecture, DDD, CQRS, OAuth2/OIDC.",
  // NAVIGATION
  "nav.expertise": "Expertise",
  "nav.projects": "Projets",
  "nav.writing": "Articles",
  "nav.about": "Parcours",
  "nav.work-with-me": "Missions",
  "nav.contact": "Contact",
  // HERO
  "hero.identity.role": "Ingénieur Backend .NET Senior",
  "hero.identity.line":
    "Je modernise des applications .NET sans arrêter la production, et je les redresse quand elles cassent. J’apprends le métier avant d’écrire le code.",
  "hero.identity.proof":
    "Aujourd’hui responsable d’une quinzaine d’applications métier pour un réseau de cabinets d’expertise comptable, dont une que je modernise en profondeur.",
  "hero.identity.availability": "Ouvert aux postes en télétravail, y compris sur les fuseaux horaires américains.",
  "hero.contact": "Me contacter",
  "hero.cv": "Télécharger mon CV",
  "hero.cvLang": "Choisir la langue du CV",
  // Expertise
  "expertise.intro": "Ma façon de travailler, dans mon poste comme dans mes projets personnels.",
  "expertise.1.title": "Ownership produit",
  "expertise.1.line": "Je porte des applications métier de bout en bout, côté technique comme côté métier.",
  "expertise.1.content":
    "Exploitation et maintenance (MCO), priorisation des tickets avec le responsable métier, planification des mises en production, communication avec les utilisateurs en cas d’incident.|Quand une demande traite un symptôme, je la remets en question : je cherche d’abord pourquoi les utilisateurs en ont besoin.",
  "expertise.2.title": "Modernisation legacy",
  "expertise.2.line": "Je modernise des applications legacy en production, sans gel des fonctionnalités.",
  "expertise.2.content":
    "Je rétro-analyse les modèles de données non documentés avant de toucher au code.|Strangler Fig plutôt que réécriture : l’ancien et le nouveau code coexistent, et chaque refactoring s’adosse à un ticket métier financé.|Des fondations dans le code : pattern Result, cas d’usage CQRS, agrégats DDD, inversion de dépendances.|Des conventions garanties par des tests d’architecture, et des suites de tests reconstruites autour du comportement, avec des tests d’intégration sur de vraies bases de données via Testcontainers.",
  "expertise.3.title": "Incidents de production",
  "expertise.3.line":
    "Quand la production casse, j’interviens vite et avec méthode, pour corriger la cause et non le symptôme.",
  "expertise.3.content":
    "Diagnostiquer avant de toucher quoi que ce soit : mesurer, reproduire, isoler la cause.|Des corrections chirurgicales : le plus petit changement qui règle le problème, sans réécriture dans l’urgence.|Puis un post-mortem et un garde-fou pour que l’incident ne se reproduise pas : un test, ou une règle documentée pour l’équipe.|Domaines fréquents : performance, concurrence, mémoire.",
  "expertise.4.title": "Architecture",
  "expertise.4.line":
    "Je conçois des systèmes à partir de leurs contraintes réelles, et je rends mes choix explicites.",
  "expertise.4.content":
    "Partir des contraintes : besoins métier, volumes, existant, et équipe qui maintiendra le système.|Les standards avant le sur-mesure. Ma doctrine : faire en sorte qu’à terme, l’équipe puisse maintenir les applications sans moi.|Des décisions écrites : schémas de séquence, documents de stratégie, règles pour l’équipe.|Domaines fréquents : authentification et identité (OAuth2/OIDC), multi-tenant, systèmes distribués, observabilité.",
  "expertise.5.title": "Ingénierie assistée par IA",
  "expertise.5.line": "J’utilise l’IA pour aller plus vite, avec les mêmes exigences que pour le reste du code.",
  "expertise.5.content":
    "L’humain garde l’intention : les règles métier et les cas de test sont écrits par l’équipe, l’IA implémente.|Une IA ne valide pas son propre travail : tests écrits par l’humain, tests d’architecture et revue s’appliquent au code généré comme au reste.|Mesurer avant de faire confiance : des jeux d’évaluation plutôt que des impressions.|Domaines fréquents : adoption d’assistants de code en équipe, RAG, modèles locaux, guardrails, evals (voir Projets).",
  // PORJECTS
  "projects.intro": "Projets open source et personnels.",
  "projects.1.title": "Nuggy",
  "projects.1.content":
    "Une extension VS Code pour gérer les packages NuGet dans des bases de code .NET professionnelles : Central Package Management natif, matrice de compatibilité par target framework, et modification de vos fichiers projet sans reformatage, pour des diffs propres. Multiplateforme, disponible en 4 langues (anglais, français, espagnol, allemand).",
  "projects.1.tags": "TypeScript|VS Code|NuGet",
  "projects.1.links":
    "[Marketplace ↗](https://marketplace.visualstudio.com/items?itemName=coresync.nuggy)|[Dépôt ↗](https://github.com/CoreSyncHub/Nuggy)",
  "projects.2.title": "DotnetCleanAspire",
  "projects.2.content":
    "Un boilerplate .NET pour la Clean Architecture, le DDD et le CQRS, avec des frontières entre couches garanties par des tests d’architecture et un pattern Result pour les erreurs.",
  "projects.2.tags": ".NET|Clean Architecture|DDD|CQRS|Testcontainers",
  "projects.2.links": "[Dépôt ↗](https://github.com/CoreSyncHub/DotnetCleanAspire)",
  "projects.3.title": "Pipeline RAG .NET",
  "projects.3.content":
    "Un pipeline RAG sur les textes du RGPD, développé en .NET. Il tourne sur un modèle local, pour que les données ne quittent pas l’infrastructure, avec des guardrails et des jeux de données d’évaluation pour mesurer la qualité des réponses.",
  "projects.3.tags": ".NET|RAG|Local LLM|Evals",
  "projects.3.links": "",
  "projects.4.title": "Moteur de self-transfer aérien",
  "projects.4.content":
    "Un moteur qui trouve des itinéraires multi-compagnies bon marché qu’aucune compagnie ne vend seule. Il s’appuie sur ma connaissance du revenue management aérien et sur les mécanismes du marché, comme les tarifs bas que certaines compagnies confient aux Online Travel Agencies (OTA) pour remplir leurs avions, sans les afficher sur leurs propres canaux. Une API .NET reçoit les critères du voyageur et lance un worker Python, qui agrège les données de vols, construit un graphe de routes avec des heuristiques de correspondance et classe les résultats selon ces critères.",
  "projects.4.tags": ".NET|Python|React|TypeScript",
  "projects.4.links": "",
  "projects.5.title": "Homelab",
  "projects.5.status": "En production",
  "projects.5.content":
    "Un cluster k3s que j’exploite pour mes usages personnels et des expérimentations de plateforme : identité OIDC, gestion des secrets, bus de messages, observabilité complète et réseau en refus par défaut.",
  "projects.5.tags": "k3s|Authentik|Vault|RabbitMQ|Grafana|Tailscale",
  "projects.5.links": "",
  // ABOUT
  "about.intro.1":
    "Je suis autodidacte. Après une année d’études comptables, j’ai appris seul le développement web à partir de 19 ans, sans diplôme, et j’ai atteint un poste senior en trois ans et demi environ.",
  "about.intro.2":
    "J’ai commencé dans une petite agence web, où je suis devenu le référent technique de l’équipe. En ESN, ma première mission a conduit le client à me proposer un poste de responsable d’application : le GIE Artic, qui développe et exploite les logiciels d’un réseau de cabinets d’expertise comptable.",
  "about.intro.3":
    "Le métier compte autant que le code. Mes études comptables m’ont appris comment fonctionnent réellement les domaines financier et juridique : je lis un modèle de données comme le métier le lit.",
  "about.intro.4":
    "L’aviation me passionne depuis l’enfance, pour sa dimension technique. Un stage en agence de voyages d’affaires m’a ensuite fait découvrir l’autre côté du secteur, notamment les GDS comme Amadeus et Sabre. J’ai travaillé sur Sabre en mode cryptique, uniquement par commandes, et j’étais opérationnel en moins d’une journée. C’est là qu’a germé mon intérêt pour la travel tech, puis pour le revenue management aérien.",
  "about.experience": "Expérience",
  "about.experience.1.date": "mars 2026 – aujourd’hui",
  "about.experience.1.org": "GIE Artic",
  "about.experience.1.role": "Ingénieur Backend .NET Senior / Responsable d’application",
  "about.experience.1.desc":
    "Une quinzaine d’applications métier à ma charge : architecture, modernisation, MCO et mises en production.",
  "about.experience.2.date": "févr. 2025 – févr. 2026",
  "about.experience.2.org": "Devolis",
  "about.experience.2.role": "Consultant .NET",
  "about.experience.2.desc":
    "Missions de développement .NET chez des clients, puis trois mois comme responsable d’application avant mon embauche par l’un des clients.",
  "about.experience.3.date": "oct. 2024 – aujourd’hui",
  "about.experience.3.org": "CoreSync",
  "about.experience.3.role": "",
  "about.experience.3.desc":
    "Mon entreprise individuelle, sur laquelle je m’appuie également pour publier mes projets open source.",
  "about.experience.4.date": "févr. 2023 – nov. 2024",
  "about.experience.4.org": "Dadev",
  "about.experience.4.role": "Développeur Fullstack",
  "about.experience.4.desc": "Devenu référent technique de l’équipe : infrastructure, CI/CD, migration vers .NET.",
  "about.stack": "Stack principale",
  "about.approach": "Approche : Clean Architecture, DDD, CQRS, systèmes distribués, observabilité.",
  "about.langs": "Langues",
  "about.langs.en": "Anglais",
  "about.langs.en.level": "Professionnel",
  "about.langs.fr": "Français",
  "about.langs.fr.level": "Langue maternelle",
  "about.langs.es": "Espagnol",
  "about.langs.es.level": "Conversationnel",
  // Contact
  "contact.copy": "Copier",
  "contact.copied": "Copié",
  // MISC
  "ui.lang": "Langue",
  "ui.theme": "Basculer entre thème clair et sombre",
  // NOT FOUND
  "notFound.title": "Page introuvable",
  "notFound.text": "Cette page n’existe pas ou a été déplacée.",
  "notFound.back": "Retour à l’accueil",
  "notFound.code": "Erreur 404",
  "notFound.path": "Adresse demandée",
  "notFound.more": "Ou aller vers :",
} as const;

const en = {
  // META
  "meta.title": "Victor Deleau · Senior .NET Backend Engineer",
  "meta.description":
    "Senior .NET backend engineer. I modernize business applications in production without a feature freeze: Clean Architecture, DDD, CQRS, OAuth2/OIDC.",
  // NAVIGATION
  "nav.expertise": "Expertise",
  "nav.projects": "Projects",
  "nav.writing": "Writing",
  "nav.about": "About",
  "nav.work-with-me": "Work with me",
  "nav.contact": "Contact",
  // HERO
  "hero.identity.role": "Senior .NET Backend Engineer",
  "hero.identity.line":
    "I modernize .NET applications without stopping production, and I fix them when they break. I learn the business before I write the code.",
  "hero.identity.proof":
    "Currently responsible for about fifteen business applications for a network of accounting firms, one of which I’m modernizing in depth.",
  "hero.identity.availability": "Open to remote roles, including US time zones.",
  "hero.contact": "Contact me",
  "hero.cv": "Download my résumé",
  "hero.cvLang": "Choose the résumé language",
  // EXPERTISE
  "expertise.intro": "How I work, in my job and in my own projects.",
  "expertise.1.title": "Product ownership",
  "expertise.1.line": "I own business applications end to end, on the technical side and with the business.",
  "expertise.1.content":
    "Run and maintenance, ticket prioritization with the business owner, release planning, and communication with users during incidents.|When a request treats a symptom, I question it: I start by finding out why users need it.",
  "expertise.2.title": "Legacy modernization",
  "expertise.2.line": "I modernize legacy applications in production, without a feature freeze.",
  "expertise.2.content":
    "I reverse-engineer undocumented data models before touching the code.|Strangler Fig over rewrites: legacy and new code coexist, and each refactoring rides on a funded business ticket.|Foundations in the code: Result pattern, CQRS use cases, DDD aggregates, dependency inversion.|Conventions enforced by architecture tests, and test suites rebuilt around behavior, with integration tests on real databases through Testcontainers.",
  "expertise.3.title": "Production incidents",
  "expertise.3.line":
    "When production breaks, I step in fast and methodically, to fix the cause rather than the symptom.",
  "expertise.3.content":
    "Diagnose before touching anything: measure, reproduce, isolate the cause.|Surgical fixes: the smallest change that solves the problem, no rewrite under pressure.|Then a post-mortem and a guardrail, so the incident doesn’t happen again: a test, or a rule documented for the team.|Typical areas: performance, concurrency, memory.",
  "expertise.4.title": "Architecture",
  "expertise.4.line": "I design systems from their real constraints, and I make my choices explicit.",
  "expertise.4.content":
    "Start from the constraints: business needs, volumes, the existing system, and the team that will maintain it.|Standards before custom solutions. My guiding principle: in time, the team should be able to maintain the applications without me.|Written decisions: sequence diagrams, strategy documents, rules for the team.|Typical areas: authentication and identity (OAuth2/OIDC), multi-tenancy, distributed systems, observability.",
  "expertise.5.title": "AI-assisted engineering",
  "expertise.5.line": "I use AI to move faster, with the same standards as for any other code.",
  "expertise.5.content":
    "Humans own the intent: business rules and test cases are written by the team, and AI implements.|AI doesn’t sign off on its own work: human-written tests, architecture tests and review apply to generated code like any other.|Measure before trusting: evaluation datasets, not impressions.|Typical areas: rolling out coding assistants to a team, RAG, local models, guardrails, evals (see Projects).",
  // PROJECTS
  "projects.intro": "Open source and personal projects.",
  "projects.1.title": "Nuggy",
  "projects.1.content":
    "A VS Code extension for managing NuGet packages in professional .NET codebases: native Central Package Management, a compatibility matrix per target framework, and edits to your project files without reformatting, for clean diffs. Cross-platform, available in 4 languages (English, French, Spanish, German).",
  "projects.1.tags": "TypeScript|VS Code|NuGet",
  "projects.1.links":
    "[Marketplace ↗](https://marketplace.visualstudio.com/items?itemName=coresync.nuggy)|[Repository ↗](https://github.com/CoreSyncHub/Nuggy)",
  "projects.2.title": "DotnetCleanAspire",
  "projects.2.content":
    "A .NET boilerplate for Clean Architecture, DDD and CQRS, with layer boundaries enforced by architecture tests and a Result pattern for errors.",
  "projects.2.tags": ".NET|Clean Architecture|DDD|CQRS|Testcontainers",
  "projects.2.links": "[Repository ↗](https://github.com/CoreSyncHub/DotnetCleanAspire)",
  "projects.3.title": ".NET RAG pipeline",
  "projects.3.content":
    "A RAG pipeline over GDPR texts, built in .NET. It runs on a local model, so data never leaves the infrastructure, with guardrails and evaluation datasets to measure answer quality.",
  "projects.3.tags": ".NET|RAG|Local LLM|Evals",
  "projects.3.links": "",
  "projects.4.title": "Self-transfer flight engine",
  "projects.4.content":
    "An engine that finds cheap multi-airline itineraries that no single airline sells. It draws on my knowledge of airline revenue management and on market mechanics, such as the low fares some airlines hand to online travel agencies (OTAs) to fill their planes, without showing those prices on their own channels. A .NET API takes the traveler’s requirements and starts a Python worker, which aggregates flight data, builds a route graph with connection heuristics and ranks the results against those requirements.",
  "projects.4.tags": ".NET|Python|React|TypeScript",
  "projects.4.links": "",
  "projects.5.title": "Homelab",
  "projects.5.status": "Running",
  "projects.5.content":
    "A k3s cluster I run for personal workloads and platform experiments: OIDC identity, secrets management, a message bus, full observability and default-deny networking.",
  "projects.5.tags": "k3s|Authentik|Vault|RabbitMQ|Grafana|Tailscale",
  "projects.5.links": "",
  // ABOUT
  "about.intro.1":
    "I’m self-taught. After a year of accounting studies, I taught myself web development at 19, without a degree, and reached a senior role in about three and a half years.",
  "about.intro.2":
    "I started at a small web agency, where I became the team’s technical reference. Then, at a consultancy, my first client mission led the client to offer me an application owner role: GIE Artic, which builds and runs the software for a network of French accounting firms.",
  "about.intro.3":
    "Business matters as much as code. My accounting studies taught me how finance and legal domains actually work, so I read a data model the way the business does.",
  "about.intro.4":
    "I’ve loved aviation since I was a kid, for how technical it is. An internship at a business travel agency later showed me the other side of the industry, including GDSs like Amadeus and Sabre. I worked on Sabre in cryptic mode, entirely by commands, and was operational in less than a day. That’s where my interest in travel tech, and later airline revenue management, took root.",
  "about.experience": "Experience",
  "about.experience.1.date": "Mar 2026 – present",
  "about.experience.1.org": "GIE Artic",
  "about.experience.1.role": "Senior .NET Backend Engineer / Technical Application Owner",
  "about.experience.1.desc":
    "About fifteen business applications in my care: architecture, modernization, run and releases.",
  "about.experience.2.date": "Feb 2025 – Feb 2026",
  "about.experience.2.org": "Devolis",
  "about.experience.2.role": ".NET Consultant",
  "about.experience.2.desc":
    ".NET development missions for clients, then three months as application owner before one of the clients hired me.",
  "about.experience.3.date": "Oct 2024 – present",
  "about.experience.3.org": "CoreSync",
  "about.experience.3.role": "",
  "about.experience.3.desc": "My sole proprietorship, which I also use to publish my open-source projects.",
  "about.experience.4.date": "Feb 2023 – Nov 2024",
  "about.experience.4.org": "Dadev",
  "about.experience.4.role": "Fullstack Developer",
  "about.experience.4.desc": "Became the team’s technical reference: infrastructure, CI/CD, migration to .NET.",
  "about.stack": "Core stack",
  "about.approach": "Approach: Clean Architecture, DDD, CQRS, distributed systems, observability.",
  "about.langs": "Languages",
  "about.langs.en": "English",
  "about.langs.en.level": "Professional",
  "about.langs.fr": "French",
  "about.langs.fr.level": "Native",
  "about.langs.es": "Spanish",
  "about.langs.es.level": "Conversational",
  // CONTACT
  "contact.copy": "Copy",
  "contact.copied": "Copied",
  // MISC
  "ui.lang": "Language",
  "ui.theme": "Toggle light and dark theme",
  // NOT FOUND
  "notFound.title": "Page not found",
  "notFound.text": "This page doesn’t exist or has been moved.",
  "notFound.back": "Back to home",
  "notFound.code": "Error 404",
  "notFound.path": "Requested URL",
  "notFound.more": "Or go to:",
} as const;

const es = {
  // META
  "meta.title": "Victor Deleau · Ingeniero Backend .NET Senior",
  "meta.description":
    "Ingeniero backend .NET senior. Modernizo aplicaciones de negocio en producción sin congelar funcionalidades: Clean Architecture, DDD, CQRS, OAuth2/OIDC.",
  // NAVIGATION
  "nav.expertise": "Competencias",
  "nav.projects": "Proyectos",
  "nav.writing": "Artículos",
  "nav.about": "Trayectoria",
  "nav.work-with-me": "Trabaja conmigo",
  "nav.contact": "Contacto",
  // HERO
  "hero.identity.role": "Ingeniero Backend .NET Senior",
  "hero.identity.line":
    "Modernizo aplicaciones .NET sin detener la producción, y las arreglo cuando fallan. Aprendo el negocio antes de escribir el código.",
  "hero.identity.proof":
    "Actualmente soy responsable de unas quince aplicaciones de negocio para una red de firmas contables, y estoy modernizando una de ellas a fondo.",
  "hero.identity.availability": "Abierto a puestos remotos, incluso en zonas horarias de EE. UU.",
  "hero.contact": "Contáctame",
  "hero.cv": "Descargar mi CV",
  "hero.cvLang": "Elegir el idioma del CV",
  // EXPERTISE
  "expertise.intro": "Cómo trabajo, en mi empleo y en mis propios proyectos.",
  "expertise.1.title": "Ownership de producto",
  "expertise.1.line": "Me hago cargo de aplicaciones de negocio de principio a fin, en lo técnico y junto al negocio.",
  "expertise.1.content":
    "Operación y mantenimiento, priorización de tickets con el responsable de negocio, planificación de las puestas en producción y comunicación con los usuarios durante los incidentes.|Cuando una solicitud trata un síntoma, la cuestiono: primero busco entender por qué los usuarios la necesitan.",
  "expertise.2.title": "Modernización de legacy",
  "expertise.2.line": "Modernizo aplicaciones legacy en producción, sin congelar funcionalidades.",
  "expertise.2.content":
    "Hago ingeniería inversa de los modelos de datos no documentados antes de tocar el código.|Strangler Fig en lugar de reescritura: el código antiguo y el nuevo conviven, y cada refactorización se apoya en un ticket de negocio financiado.|Cimientos en el código: patrón Result, casos de uso CQRS, agregados DDD, inversión de dependencias.|Convenciones garantizadas por pruebas de arquitectura, y suites de pruebas reconstruidas en torno al comportamiento, con pruebas de integración sobre bases de datos reales mediante Testcontainers.",
  "expertise.3.title": "Incidentes en producción",
  "expertise.3.line":
    "Cuando la producción falla, intervengo rápido y con método, para corregir la causa y no el síntoma.",
  "expertise.3.content":
    "Diagnosticar antes de tocar nada: medir, reproducir, aislar la causa.|Correcciones quirúrgicas: el cambio más pequeño que resuelve el problema, sin reescrituras en plena urgencia.|Después, un post-mortem y una salvaguarda para que el incidente no se repita: una prueba, o una regla documentada para el equipo.|Áreas habituales: rendimiento, concurrencia, memoria.",
  "expertise.4.title": "Arquitectura",
  "expertise.4.line": "Diseño sistemas a partir de sus restricciones reales, y hago explícitas mis decisiones.",
  "expertise.4.content":
    "Partir de las restricciones: necesidades del negocio, volúmenes, el sistema existente y el equipo que lo mantendrá.|Los estándares antes que lo hecho a medida. Mi principio rector: que, con el tiempo, el equipo pueda mantener las aplicaciones sin mí.|Decisiones por escrito: diagramas de secuencia, documentos de estrategia, reglas para el equipo.|Áreas habituales: autenticación e identidad (OAuth2/OIDC), multi-tenant, sistemas distribuidos, observabilidad.",
  "expertise.5.title": "Ingeniería asistida por IA",
  "expertise.5.line": "Uso la IA para avanzar más rápido, con la misma exigencia que para el resto del código.",
  "expertise.5.content":
    "El humano conserva la intención: las reglas de negocio y los casos de prueba los escribe el equipo, y la IA implementa.|Una IA no valida su propio trabajo: pruebas escritas por humanos, pruebas de arquitectura y revisión se aplican al código generado como a cualquier otro.|Medir antes de confiar: conjuntos de evaluación, no impresiones.|Áreas habituales: adopción de asistentes de código en equipo, RAG, modelos locales, guardrails, evals (ver Proyectos).",
  // PROJECTS
  "projects.intro": "Proyectos de código abierto y personales.",
  "projects.1.title": "Nuggy",
  "projects.1.content":
    "Una extensión de VS Code para gestionar paquetes NuGet en bases de código .NET profesionales: Central Package Management nativo, matriz de compatibilidad por target framework y edición de tus archivos de proyecto sin reformatearlos, para diffs limpios. Multiplataforma, disponible en 4 idiomas (inglés, francés, español y alemán).",
  "projects.1.tags": "TypeScript|VS Code|NuGet",
  "projects.1.links":
    "[Marketplace ↗](https://marketplace.visualstudio.com/items?itemName=coresync.nuggy)|[Repositorio ↗](https://github.com/CoreSyncHub/Nuggy)",
  "projects.2.title": "DotnetCleanAspire",
  "projects.2.content":
    "Un boilerplate .NET para Clean Architecture, DDD y CQRS, con límites entre capas garantizados por pruebas de arquitectura y un patrón Result para los errores.",
  "projects.2.tags": ".NET|Clean Architecture|DDD|CQRS|Testcontainers",
  "projects.2.links": "[Repositorio ↗](https://github.com/CoreSyncHub/DotnetCleanAspire)",
  "projects.3.title": "Pipeline RAG en .NET",
  "projects.3.content":
    "Un pipeline RAG sobre los textos del RGPD, desarrollado en .NET. Funciona con un modelo local, para que los datos no salgan de la infraestructura, con guardrails y conjuntos de evaluación para medir la calidad de las respuestas.",
  "projects.3.tags": ".NET|RAG|LLM local|Evals",
  "projects.3.links": "",
  "projects.4.title": "Motor de self-transfer aéreo",
  "projects.4.content":
    "Un motor que encuentra itinerarios multiaerolínea baratos que ninguna aerolínea vende por sí sola. Se apoya en mi conocimiento del revenue management aéreo y en los mecanismos del mercado, como las tarifas bajas que algunas aerolíneas ceden a las agencias de viajes en línea (OTA) para llenar sus aviones, sin mostrarlas en sus propios canales. Una API .NET recibe los criterios del viajero y lanza un worker en Python, que agrega los datos de vuelos, construye un grafo de rutas con heurísticas de conexión y ordena los resultados según esos criterios.",
  "projects.4.tags": ".NET|Python|React|TypeScript",
  "projects.4.links": "",
  "projects.5.title": "Homelab",
  "projects.5.status": "En funcionamiento",
  "projects.5.content":
    "Un clúster k3s que opero para uso personal y experimentos de plataforma: identidad OIDC, gestión de secretos, bus de mensajes, observabilidad completa y red con denegación por defecto.",
  "projects.5.tags": "k3s|Authentik|Vault|RabbitMQ|Grafana|Tailscale",
  "projects.5.links": "",
  // ABOUT
  "about.intro.1":
    "Soy autodidacta. Tras un año de estudios de contabilidad, aprendí desarrollo web por mi cuenta a los 19 años, sin título, y llegué a un puesto senior en unos tres años y medio.",
  "about.intro.2":
    "Empecé en una pequeña agencia web, donde me convertí en el referente técnico del equipo. Luego, en una consultora, mi primer proyecto con un cliente hizo que este me ofreciera un puesto de responsable de aplicación: el GIE Artic, que desarrolla y opera el software de una red de firmas contables francesas.",
  "about.intro.3":
    "El negocio importa tanto como el código. Mis estudios de contabilidad me enseñaron cómo funcionan realmente los ámbitos financiero y jurídico: leo un modelo de datos como lo lee el negocio.",
  "about.intro.4":
    "La aviación me apasiona desde niño, por su dimensión técnica. Unas prácticas en una agencia de viajes corporativos me mostraron después el otro lado del sector, en particular los GDS como Amadeus y Sabre. Trabajé en Sabre en modo críptico, solo con comandos, y en menos de un día ya era operativo. Ahí nació mi interés por la travel tech y, más tarde, por el revenue management aéreo.",
  "about.experience": "Experiencia",
  "about.experience.1.date": "mar. 2026 – actualidad",
  "about.experience.1.org": "GIE Artic",
  "about.experience.1.role": "Ingeniero Backend .NET Senior / Responsable de aplicación",
  "about.experience.1.desc":
    "Unas quince aplicaciones de negocio a mi cargo: arquitectura, modernización, operación y puestas en producción.",
  "about.experience.2.date": "feb. 2025 – feb. 2026",
  "about.experience.2.org": "Devolis",
  "about.experience.2.role": "Consultor .NET",
  "about.experience.2.desc":
    "Proyectos de desarrollo .NET en clientes y, después, tres meses como responsable de aplicación antes de que uno de los clientes me contratara.",
  "about.experience.3.date": "oct. 2024 – actualidad",
  "about.experience.3.org": "CoreSync",
  "about.experience.3.role": "",
  "about.experience.3.desc": "Mi empresa individual, que también uso para publicar mis proyectos de código abierto.",
  "about.experience.4.date": "feb. 2023 – nov. 2024",
  "about.experience.4.org": "Dadev",
  "about.experience.4.role": "Desarrollador Fullstack",
  "about.experience.4.desc":
    "Me convertí en el referente técnico del equipo: infraestructura, CI/CD, migración a .NET.",
  "about.stack": "Stack principal",
  "about.approach": "Enfoque: Clean Architecture, DDD, CQRS, sistemas distribuidos, observabilidad.",
  "about.langs": "Idiomas",
  "about.langs.en": "Inglés",
  "about.langs.en.level": "Profesional",
  "about.langs.fr": "Francés",
  "about.langs.fr.level": "Nativo",
  "about.langs.es": "Español",
  "about.langs.es.level": "Conversacional",
  // CONTACT
  "contact.copy": "Copiar",
  "contact.copied": "Copiado",
  // MISC
  "ui.lang": "Idioma",
  "ui.theme": "Cambiar entre tema claro y oscuro",
  // NOT FOUND
  "notFound.title": "Página no encontrada",
  "notFound.text": "Esta página no existe o ha sido movida.",
  "notFound.back": "Volver al inicio",
  "notFound.code": "Error 404",
  "notFound.path": "Dirección solicitada",
  "notFound.more": "O ir a:",
} as const;

type UiKey = keyof typeof fr;
type Dictionary = Record<UiKey, string>;
const ui: Record<Locale, Dictionary> = { fr, en, es };

export { ui };
export type { UiKey };
