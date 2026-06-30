import type { Locale } from "./config";

export const siteDictionary = {
  "pt-BR": {
    name: "Fred Vasconcelos",
    fullName: "Carlos Frederico Alves de Vasconcelos Neto",
    shortName: "Fred",
    title: "BI Analyst & Data Engineer",
    description:
      "Portfolio de projetos de Business Intelligence, engenharia de dados, dashboards executivos e soluções analíticas end-to-end.",
    slogan: "Transforme seus dados em produto.",

    hero: {
      eyebrow: "BI Analyst & Data Engineer",
      title: "Transforme seus dados em produto.",
      description:
        "Desenvolvo soluções de Business Intelligence e engenharia de dados que conectam dados complexos, modelagem analítica e visualizações executivas para apoiar decisões de negócio.",
      primaryCta: {
        label: "Ver projetos",
        href: "/#projetos",
      },
      secondaryCta: {
        label: "Sobre mim",
        href: "/#sobre",
      },
      metrics: [
        {
          value: "9+",
          label: "anos em dados",
        },
        {
          value: "BI",
          label: "end-to-end",
        },
        {
          value: "Cloud",
          label: "stack Azure",
        },
      ],
      imageAlt: "Foto profissional de Fred Vasconcelos",
      profileLine:
        "Business Intelligence · Engenharia de Dados · Produtos Analíticos",
    },

    about: {
      eyebrow: "Sobre mim",
      title:
        "Transformo dados complexos em produtos analíticos para o negócio.",
      description:
        "Sou BI Analyst & Data Engineer com experiência em projetos end-to-end, desde ingestão e modelagem de dados até dashboards executivos, KPIs estratégicos e produtos analíticos escaláveis.",
      paragraphs: [
        "Atuo conectando engenharia de dados, modelagem analítica e visualização para criar soluções que ajudam equipes de negócio a tomar decisões melhores, mais rápidas e mais consistentes.",
        "Tenho experiência com Azure Databricks, PySpark, SQL, Power BI, DAX, Power Query, Python e Power Platform, trabalhando com bases de grande volume, pipelines de transformação e modelos otimizados para reporting.",
        "Meu foco é transformar dados dispersos em estruturas claras, confiáveis e acionáveis, sempre equilibrando performance técnica, entendimento do negócio e usabilidade para o usuário final.",
      ],
      highlights: [
        {
          value: "9+",
          label: "anos em projetos de dados",
        },
        {
          value: "200M+",
          label: "linhas processadas em pipelines analíticos",
        },
        {
          value: "BI",
          label: "soluções end-to-end para decisão",
        },
      ],
    },
    technologies: {
      eyebrow: "Tecnologias",
      title: "Stack técnico para construir soluções BI modernas.",
      description:
        "Ferramentas e práticas que utilizo para transformar dados brutos em pipelines, modelos analíticos, dashboards e produtos de decisão.",
      groups: [
        {
          category: "Business Intelligence",
          description:
            "Criação de modelos analíticos, dashboards executivos e KPIs orientados ao negócio.",
          items: [
            "Power BI",
            "DAX",
            "Power Query",
            "Data Modeling",
            "KPI Design",
          ],
        },
        {
          category: "Data Engineering",
          description:
            "Pipelines, transformação de dados, processamento distribuído e arquitetura analítica.",
          items: [
            "Azure Databricks",
            "PySpark",
            "Spark SQL",
            "Delta Lake",
            "ETL/ELT",
          ],
        },
        {
          category: "Programming & Analytics",
          description:
            "Automação, análise de dados, APIs, scripts e soluções analíticas personalizadas.",
          items: ["Python", "SQL", "R", "Pandas", "Flask"],
        },
        {
          category: "Cloud & Workflow",
          description:
            "Ferramentas de colaboração, versionamento, deploy e gestão de projetos de dados.",
          items: ["Azure", "Git", "Azure DevOps", "Docker", "Jira"],
        },
        {
          category: "Power Platform",
          description:
            "Aplicações internas, automações e integração entre processos de negócio.",
          items: [
            "Power Apps",
            "Power Automate",
            "SharePoint",
            "Power Platform",
          ],
        },
        {
          category: "Data Product Mindset",
          description:
            "Transformação de demandas de negócio em produtos analíticos escaláveis e utilizáveis.",
          items: [
            "Discovery",
            "Requirements",
            "UX for BI",
            "Documentation",
            "Stakeholder Management",
          ],
        },
      ],
    },
    experience: {
      eyebrow: "Experiência",
      title: "Uma trajetória conectando dados, tecnologia e negócio.",
      description:
        "Experiência em projetos de BI, engenharia de dados, automação, análise científica e soluções analíticas orientadas à tomada de decisão.",
      items: [
        {
          company: "AXA Spain",
          role: "BI Analyst / Data Engineer",
          period: "Atual",
          location: "Madrid, Espanha",
          description:
            "Desenvolvimento de soluções end-to-end de Business Intelligence no contexto de marketing e seguros, trabalhando com grandes volumes de dados, modelagem analítica e dashboards executivos.",
          highlights: [
            "Pipelines em Azure Databricks com PySpark e Spark SQL.",
            "Modelagem de dados para reporting em Power BI.",
            "Criação de KPIs de retenção, perdas, ganhos e evolução de clientes.",
            "Otimização de tabelas agregadas para melhorar performance de dashboards.",
          ],
          stack: [
            "Azure Databricks",
            "PySpark",
            "Spark SQL",
            "Power BI",
            "DAX",
          ],
        },
        {
          company: "Lilly Spain / LIS Data Solutions",
          role: "Power Platform & BI Consultant",
          period: "Experiência anterior",
          location: "Espanha",
          description:
            "Atuação em projetos de suporte, evolução e desenvolvimento de soluções internas com foco em Power Platform, automação de processos e visualização de dados.",
          highlights: [
            "Desenvolvimento e manutenção de soluções com Power BI.",
            "Criação de aplicações internas com Power Apps.",
            "Automação de fluxos com Power Automate.",
            "Levantamento de requisitos e suporte a usuários de negócio.",
          ],
          stack: [
            "Power BI",
            "Power Apps",
            "Power Automate",
            "SharePoint",
            "Jira",
          ],
        },
        {
          company: "Tragsatec",
          role: "Data Analyst / Data Engineer",
          period: "Experiência anterior",
          location: "Espanha",
          description:
            "Projetos de transformação, integração e disponibilização de dados, incluindo processos ETL, APIs e publicação de dados abertos.",
          highlights: [
            "ETL com Python para grandes volumes de dados.",
            "Desenvolvimento de API com Flask.",
            "Publicação e estruturação de dados em portal CKAN.",
            "Uso de Git, Azure DevOps, Docker e Bash em fluxos de desenvolvimento.",
          ],
          stack: ["Python", "Flask", "CKAN", "Docker", "Azure DevOps"],
        },
        {
          company: "GSA Alimentos / Alimentos SA",
          role: "BI Analyst / Data Scientist",
          period: "Experiência anterior",
          location: "Brasil",
          description:
            "Desenvolvimento de soluções analíticas para contexto industrial, combinando BI, previsão de demanda, análise de riscos e suporte à tomada de decisão.",
          highlights: [
            "Dashboards em Power BI para acompanhamento de indicadores industriais.",
            "Processos ETL com R, Python e SQL.",
            "Modelos de previsão e análises estatísticas aplicadas ao negócio.",
            "Estruturação de pipelines e recomendações de arquitetura analítica.",
          ],
          stack: ["Power BI", "Python", "R", "SQL", "Forecasting"],
        },
        {
          company: "Instituto Mamirauá",
          role: "Researcher / Data Analyst",
          period: "Experiência anterior",
          location: "Amazônia, Brasil",
          description:
            "Atuação em projetos científicos e análise de dados aplicados à pesquisa, biodiversidade e conservação.",
          highlights: [
            "Tratamento e análise de dados científicos.",
            "Organização de bases de dados de campo.",
            "Apoio a estudos ecológicos e bioacústicos.",
            "Produção de análises e materiais técnicos para pesquisa.",
          ],
          stack: ["R", "Python", "Data Analysis", "Research", "Ecology"],
        },
      ],
    },
    projects: {
      eyebrow: "Projetos",
      title: "Projetos em destaque.",
      description:
        "Alguns projetos selecionados de BI, engenharia de dados e analytics, com foco em impacto para o negócio, performance e tomada de decisão.",
      viewAllLabel: "Ver todos",
      viewAllHref: "/projetos",
      emptyMessage: "Nenhum projeto em destaque publicado ainda.",
      readMoreLabel: "Ver projeto",
      imageAltPrefix: "Imagem do projeto",
      fallbackLabel: "BI Project",
      dateLocale: "pt-BR",
    },
    contact: {
      eyebrow: "Contato",
      secondaryBadge: "BI · Engenharia de Dados · Analytics",
      title: "Vamos transformar dados em decisões?",
      description:
        "Se você busca desenvolver dashboards, estruturar pipelines, otimizar modelos analíticos ou transformar dados em produtos de decisão, podemos conversar.",
      availabilityTitle: "Disponível para",
      availabilityItems: [
        "Projetos de Business Intelligence",
        "Dashboards executivos em Power BI",
        "Pipelines com Databricks, PySpark e SQL",
        "Modelagem analítica e otimização de performance",
      ],
      emailLabel: "Enviar email",
      linkedinLabel: "Conectar no LinkedIn",
      githubLabel: "Ver GitHub",
    },
    projectsPage: {
      eyebrow: "Projetos",
      title: "Projetos de BI, dados e analytics.",
      description:
        "Uma seleção de projetos desenvolvidos com foco em Business Intelligence, engenharia de dados, modelagem analítica, performance e tomada de decisão.",
      emptyMessage: "Nenhum projeto publicado ainda.",
      cardReadMoreLabel: "Ver projeto",
      imageAltPrefix: "Imagem do projeto",
      fallbackLabel: "BI Project",
      dateLocale: "pt-BR",
    },
    projectDetail: {
      backLabel: "Voltar para projetos",
      backHref: "/projetos",
      imageAltPrefix: "Imagem do projeto",
      dateLocale: "pt-BR",
    },
    footer: {
      navigationTitle: "Navegação",
      navigationAriaLabel: "Navegação do rodapé",
      contactTitle: "Contato",
      copyrightPrefix: "Todos os direitos reservados.",
      builtWith: "Desenvolvido com Astro, Tailwind CSS e GitHub Pages.",
      homeAriaLabel: "Voltar ao início",
    },
    nav: [
      {
        label: "Início",
        href: "/#inicio",
      },
      {
        label: "Sobre mim",
        href: "/#sobre",
      },
      {
        label: "Tecnologias",
        href: "/#tecnologias",
      },
      {
        label: "Experiência",
        href: "/#experiencia",
      },
      {
        label: "Projetos",
        href: "/#projetos",
      },
      {
        label: "Contato",
        href: "/#contato",
      },
    ],

    links: {
      github: "https://github.com/fredvasconcelos",
      linkedin:
        "https://www.linkedin.com/in/carlos-frederico-alves-de-vasconcelos-neto-858897263",
      email: "mailto:fredvasconcelosnt@gmail.com",
    },

    seo: {
      defaultTitle: "Fred Vasconcelos | BI Analyst & Data Engineer",
      defaultDescription:
        "Portfolio profissional de Fred Vasconcelos com projetos de BI, Power BI, Azure Databricks, PySpark, SQL, Python e engenharia de dados.",
      defaultImage: "/foto_fundo_branco.png",
    },
  },

  es: {
    name: "Fred Vasconcelos",
    fullName: "Carlos Frederico Alves de Vasconcelos Neto",
    shortName: "Fred",
    title: "Analista BI & Data Engineer",
    description:
      "Portfolio de proyectos de Business Intelligence, ingeniería de datos, dashboards ejecutivos y soluciones analíticas end-to-end.",
    slogan: "Transforma tus datos en producto.",

    hero: {
      eyebrow: "Analista BI & Data Engineer",
      title: "Transforma tus datos en producto.",
      description:
        "Desarrollo soluciones de Business Intelligence e ingeniería de datos que conectan datos complejos, modelado analítico y visualizaciones ejecutivas para apoyar decisiones de negocio.",
      primaryCta: {
        label: "Ver proyectos",
        href: "/es/#projetos",
      },
      secondaryCta: {
        label: "Sobre mí",
        href: "/es/#sobre",
      },
      metrics: [
        {
          value: "9+",
          label: "años en datos",
        },
        {
          value: "BI",
          label: "end-to-end",
        },
        {
          value: "Cloud",
          label: "stack Azure",
        },
      ],
      imageAlt: "Foto profesional de Fred Vasconcelos",
      profileLine:
        "Business Intelligence · Ingeniería de Datos · Productos Analíticos",
    },

    about: {
      eyebrow: "Sobre mí",
      title:
        "Transformo datos complejos en productos analíticos para el negocio.",
      description:
        "Soy Analista BI & Data Engineer con experiencia en proyectos end-to-end, desde la ingesta y el modelado de datos hasta dashboards ejecutivos, KPIs estratégicos y productos analíticos escalables.",
      paragraphs: [
        "Trabajo conectando ingeniería de datos, modelado analítico y visualización para crear soluciones que ayudan a los equipos de negocio a tomar decisiones mejores, más rápidas y más consistentes.",
        "Tengo experiencia con Azure Databricks, PySpark, SQL, Power BI, DAX, Power Query, Python y Power Platform, trabajando con bases de gran volumen, pipelines de transformación y modelos optimizados para reporting.",
        "Mi foco es transformar datos dispersos en estructuras claras, fiables y accionables, equilibrando siempre rendimiento técnico, comprensión del negocio y usabilidad para el usuario final.",
      ],
      highlights: [
        {
          value: "9+",
          label: "años en proyectos de datos",
        },
        {
          value: "200M+",
          label: "líneas procesadas en pipelines analíticos",
        },
        {
          value: "BI",
          label: "soluciones end-to-end para decisión",
        },
      ],
    },
    technologies: {
      eyebrow: "Tecnologías",
      title: "Stack técnico para construir soluciones BI modernas.",
      description:
        "Herramientas y prácticas que utilizo para transformar datos brutos en pipelines, modelos analíticos, dashboards y productos de decisión.",
      groups: [
        {
          category: "Business Intelligence",
          description:
            "Creación de modelos analíticos, dashboards ejecutivos y KPIs orientados al negocio.",
          items: [
            "Power BI",
            "DAX",
            "Power Query",
            "Data Modeling",
            "KPI Design",
          ],
        },
        {
          category: "Data Engineering",
          description:
            "Pipelines, transformación de datos, procesamiento distribuido y arquitectura analítica.",
          items: [
            "Azure Databricks",
            "PySpark",
            "Spark SQL",
            "Delta Lake",
            "ETL/ELT",
          ],
        },
        {
          category: "Programming & Analytics",
          description:
            "Automatización, análisis de datos, APIs, scripts y soluciones analíticas personalizadas.",
          items: ["Python", "SQL", "R", "Pandas", "Flask"],
        },
        {
          category: "Cloud & Workflow",
          description:
            "Herramientas de colaboración, versionado, despliegue y gestión de proyectos de datos.",
          items: ["Azure", "Git", "Azure DevOps", "Docker", "Jira"],
        },
        {
          category: "Power Platform",
          description:
            "Aplicaciones internas, automatizaciones e integración entre procesos de negocio.",
          items: [
            "Power Apps",
            "Power Automate",
            "SharePoint",
            "Power Platform",
          ],
        },
        {
          category: "Data Product Mindset",
          description:
            "Transformación de necesidades de negocio en productos analíticos escalables y utilizables.",
          items: [
            "Discovery",
            "Requirements",
            "UX for BI",
            "Documentation",
            "Stakeholder Management",
          ],
        },
      ],
    },

    experience: {
      eyebrow: "Experiencia",
      title: "Una trayectoria conectando datos, tecnología y negocio.",
      description:
        "Experiencia en proyectos de BI, ingeniería de datos, automatización, análisis científico y soluciones analíticas orientadas a la toma de decisiones.",
      items: [
        {
          company: "AXA Spain",
          role: "BI Analyst / Data Engineer",
          period: "Actual",
          location: "Madrid, España",
          description:
            "Desarrollo de soluciones end-to-end de Business Intelligence en el contexto de marketing y seguros, trabajando con grandes volúmenes de datos, modelado analítico y dashboards ejecutivos.",
          highlights: [
            "Pipelines en Azure Databricks con PySpark y Spark SQL.",
            "Modelado de datos para reporting en Power BI.",
            "Creación de KPIs de retención, pérdidas, altas y evolución de clientes.",
            "Optimización de tablas agregadas para mejorar el rendimiento de dashboards.",
          ],
          stack: [
            "Azure Databricks",
            "PySpark",
            "Spark SQL",
            "Power BI",
            "DAX",
          ],
        },
        {
          company: "Lilly Spain / LIS Data Solutions",
          role: "Power Platform & BI Consultant",
          period: "Experiencia anterior",
          location: "España",
          description:
            "Participación en proyectos de soporte, evolución y desarrollo de soluciones internas con foco en Power Platform, automatización de procesos y visualización de datos.",
          highlights: [
            "Desarrollo y mantenimiento de soluciones con Power BI.",
            "Creación de aplicaciones internas con Power Apps.",
            "Automatización de flujos con Power Automate.",
            "Levantamiento de requisitos y soporte a usuarios de negocio.",
          ],
          stack: [
            "Power BI",
            "Power Apps",
            "Power Automate",
            "SharePoint",
            "Jira",
          ],
        },
        {
          company: "Tragsatec",
          role: "Data Analyst / Data Engineer",
          period: "Experiencia anterior",
          location: "España",
          description:
            "Proyectos de transformación, integración y publicación de datos, incluyendo procesos ETL, APIs y publicación de datos abiertos.",
          highlights: [
            "ETL con Python para grandes volúmenes de datos.",
            "Desarrollo de API con Flask.",
            "Publicación y estructuración de datos en portal CKAN.",
            "Uso de Git, Azure DevOps, Docker y Bash en flujos de desarrollo.",
          ],
          stack: ["Python", "Flask", "CKAN", "Docker", "Azure DevOps"],
        },
        {
          company: "GSA Alimentos / Alimentos SA",
          role: "BI Analyst / Data Scientist",
          period: "Experiencia anterior",
          location: "Brasil",
          description:
            "Desarrollo de soluciones analíticas para el contexto industrial, combinando BI, previsión de demanda, análisis de riesgos y soporte a la toma de decisiones.",
          highlights: [
            "Dashboards en Power BI para seguimiento de indicadores industriales.",
            "Procesos ETL con R, Python y SQL.",
            "Modelos de previsión y análisis estadísticos aplicados al negocio.",
            "Estructuración de pipelines y recomendaciones de arquitectura analítica.",
          ],
          stack: ["Power BI", "Python", "R", "SQL", "Forecasting"],
        },
        {
          company: "Instituto Mamirauá",
          role: "Researcher / Data Analyst",
          period: "Experiencia anterior",
          location: "Amazonía, Brasil",
          description:
            "Participación en proyectos científicos y análisis de datos aplicados a investigación, biodiversidad y conservación.",
          highlights: [
            "Tratamiento y análisis de datos científicos.",
            "Organización de bases de datos de campo.",
            "Apoyo a estudios ecológicos y bioacústicos.",
            "Producción de análisis y materiales técnicos para investigación.",
          ],
          stack: ["R", "Python", "Data Analysis", "Research", "Ecology"],
        },
      ],
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Proyectos destacados.",
      description:
        "Algunos proyectos seleccionados de BI, ingeniería de datos y analytics, con foco en impacto para el negocio, rendimiento y toma de decisiones.",
      viewAllLabel: "Ver todos",
      viewAllHref: "/es/proyectos",
      emptyMessage: "Todavía no hay proyectos destacados publicados.",
      readMoreLabel: "Ver proyecto",
      imageAltPrefix: "Imagen del proyecto",
      fallbackLabel: "BI Project",
      dateLocale: "es-ES",
    },
    contact: {
      eyebrow: "Contacto",
      secondaryBadge: "BI · Ingeniería de Datos · Analytics",
      title: "¿Transformamos datos en decisiones?",
      description:
        "Si buscas desarrollar dashboards, estructurar pipelines, optimizar modelos analíticos o transformar datos en productos de decisión, podemos hablar.",
      availabilityTitle: "Disponible para",
      availabilityItems: [
        "Proyectos de Business Intelligence",
        "Dashboards ejecutivos en Power BI",
        "Pipelines con Databricks, PySpark y SQL",
        "Modelado analítico y optimización de rendimiento",
      ],
      emailLabel: "Enviar email",
      linkedinLabel: "Conectar en LinkedIn",
      githubLabel: "Ver GitHub",
    },
    projectsPage: {
      eyebrow: "Proyectos",
      title: "Proyectos de BI, datos y analytics.",
      description:
        "Una selección de proyectos desarrollados con foco en Business Intelligence, ingeniería de datos, modelado analítico, rendimiento y toma de decisiones.",
      emptyMessage: "Todavía no hay proyectos publicados.",
      cardReadMoreLabel: "Ver proyecto",
      imageAltPrefix: "Imagen del proyecto",
      fallbackLabel: "BI Project",
      dateLocale: "es-ES",
    },
    projectDetail: {
      backLabel: "Volver a proyectos",
      backHref: "/es/proyectos",
      imageAltPrefix: "Imagen del proyecto",
      dateLocale: "es-ES",
    },
    footer: {
      navigationTitle: "Navegación",
      navigationAriaLabel: "Navegación del pie de página",
      contactTitle: "Contacto",
      copyrightPrefix: "Todos los derechos reservados.",
      builtWith: "Desarrollado con Astro, Tailwind CSS y GitHub Pages.",
      homeAriaLabel: "Volver al inicio",
    },
    nav: [
      {
        label: "Inicio",
        href: "/es/#inicio",
      },
      {
        label: "Sobre mí",
        href: "/es/#sobre",
      },
      {
        label: "Tecnologías",
        href: "/es/#tecnologias",
      },
      {
        label: "Experiencia",
        href: "/es/#experiencia",
      },
      {
        label: "Proyectos",
        href: "/es/#projetos",
      },
      {
        label: "Contacto",
        href: "/es/#contato",
      },
    ],

    links: {
      github: "https://github.com/fredvasconcelos",
      linkedin:
        "https://www.linkedin.com/in/carlos-frederico-alves-de-vasconcelos-neto-858897263",
      email: "mailto:fredvasconcelosnt@gmail.com",
    },

    seo: {
      defaultTitle: "Fred Vasconcelos | Analista BI & Data Engineer",
      defaultDescription:
        "Portfolio de proyectos de Business Intelligence, ingeniería de datos, dashboards ejecutivos y soluciones analíticas end-to-end.",
      defaultImage: "/foto_fundo_branco.png",
    },
  },

  en: {
    name: "Fred Vasconcelos",
    fullName: "Carlos Frederico Alves de Vasconcelos Neto",
    shortName: "Fred",
    title: "BI Analyst & Data Engineer",
    description:
      "Portfolio of Business Intelligence, data engineering, executive dashboards, and end-to-end analytics solutions.",
    slogan: "Turn your data into a product.",

    hero: {
      eyebrow: "BI Analyst & Data Engineer",
      title: "Turn your data into a product.",
      description:
        "I build Business Intelligence and data engineering solutions that connect complex data, analytical modeling, and executive visualizations to support business decisions.",
      primaryCta: {
        label: "View projects",
        href: "/en/#projetos",
      },
      secondaryCta: {
        label: "About me",
        href: "/en/#sobre",
      },
      metrics: [
        {
          value: "9+",
          label: "years in data",
        },
        {
          value: "BI",
          label: "end-to-end",
        },
        {
          value: "Cloud",
          label: "Azure stack",
        },
      ],
      imageAlt: "Professional photo of Fred Vasconcelos",
      profileLine:
        "Business Intelligence · Data Engineering · Analytics Products",
    },

    about: {
      eyebrow: "About me",
      title: "I turn complex data into analytics products for business teams.",
      description:
        "I am a BI Analyst & Data Engineer with experience in end-to-end projects, from data ingestion and modeling to executive dashboards, strategic KPIs, and scalable analytics products.",
      paragraphs: [
        "I work at the intersection of data engineering, analytical modeling, and visualization to build solutions that help business teams make better, faster, and more consistent decisions.",
        "I have experience with Azure Databricks, PySpark, SQL, Power BI, DAX, Power Query, Python, and Power Platform, working with large-volume datasets, transformation pipelines, and reporting-optimized models.",
        "My focus is turning scattered data into clear, reliable, and actionable structures, balancing technical performance, business understanding, and usability for the final user.",
      ],
      highlights: [
        {
          value: "9+",
          label: "years in data projects",
        },
        {
          value: "200M+",
          label: "rows processed in analytics pipelines",
        },
        {
          value: "BI",
          label: "end-to-end decision solutions",
        },
      ],
    },
    technologies: {
      eyebrow: "Technologies",
      title: "Technical stack for building modern BI solutions.",
      description:
        "Tools and practices I use to transform raw data into pipelines, analytical models, dashboards, and decision products.",
      groups: [
        {
          category: "Business Intelligence",
          description:
            "Building analytical models, executive dashboards, and business-oriented KPIs.",
          items: [
            "Power BI",
            "DAX",
            "Power Query",
            "Data Modeling",
            "KPI Design",
          ],
        },
        {
          category: "Data Engineering",
          description:
            "Pipelines, data transformation, distributed processing, and analytical architecture.",
          items: [
            "Azure Databricks",
            "PySpark",
            "Spark SQL",
            "Delta Lake",
            "ETL/ELT",
          ],
        },
        {
          category: "Programming & Analytics",
          description:
            "Automation, data analysis, APIs, scripts, and custom analytics solutions.",
          items: ["Python", "SQL", "R", "Pandas", "Flask"],
        },
        {
          category: "Cloud & Workflow",
          description:
            "Collaboration, version control, deployment, and data project management tools.",
          items: ["Azure", "Git", "Azure DevOps", "Docker", "Jira"],
        },
        {
          category: "Power Platform",
          description:
            "Internal applications, automations, and integration across business processes.",
          items: [
            "Power Apps",
            "Power Automate",
            "SharePoint",
            "Power Platform",
          ],
        },
        {
          category: "Data Product Mindset",
          description:
            "Turning business needs into scalable, usable, and maintainable analytics products.",
          items: [
            "Discovery",
            "Requirements",
            "UX for BI",
            "Documentation",
            "Stakeholder Management",
          ],
        },
      ],
    },

    experience: {
      eyebrow: "Experience",
      title: "A career path connecting data, technology, and business.",
      description:
        "Experience in BI, data engineering, automation, scientific analysis, and analytics solutions designed to support decision-making.",
      items: [
        {
          company: "AXA Spain",
          role: "BI Analyst / Data Engineer",
          period: "Current",
          location: "Madrid, Spain",
          description:
            "Development of end-to-end Business Intelligence solutions in the marketing and insurance context, working with large data volumes, analytical modeling, and executive dashboards.",
          highlights: [
            "Pipelines in Azure Databricks with PySpark and Spark SQL.",
            "Data modeling for reporting in Power BI.",
            "Creation of customer retention, churn, acquisition, and evolution KPIs.",
            "Optimization of aggregated tables to improve dashboard performance.",
          ],
          stack: [
            "Azure Databricks",
            "PySpark",
            "Spark SQL",
            "Power BI",
            "DAX",
          ],
        },
        {
          company: "Lilly Spain / LIS Data Solutions",
          role: "Power Platform & BI Consultant",
          period: "Previous experience",
          location: "Spain",
          description:
            "Work on support, improvement, and development projects for internal solutions focused on Power Platform, process automation, and data visualization.",
          highlights: [
            "Development and maintenance of Power BI solutions.",
            "Creation of internal applications with Power Apps.",
            "Workflow automation with Power Automate.",
            "Requirements gathering and support for business users.",
          ],
          stack: [
            "Power BI",
            "Power Apps",
            "Power Automate",
            "SharePoint",
            "Jira",
          ],
        },
        {
          company: "Tragsatec",
          role: "Data Analyst / Data Engineer",
          period: "Previous experience",
          location: "Spain",
          description:
            "Data transformation, integration, and publication projects, including ETL processes, APIs, and open data publishing.",
          highlights: [
            "ETL with Python for large data volumes.",
            "API development with Flask.",
            "Publication and structuring of data in a CKAN portal.",
            "Use of Git, Azure DevOps, Docker, and Bash in development workflows.",
          ],
          stack: ["Python", "Flask", "CKAN", "Docker", "Azure DevOps"],
        },
        {
          company: "GSA Alimentos / Alimentos SA",
          role: "BI Analyst / Data Scientist",
          period: "Previous experience",
          location: "Brazil",
          description:
            "Development of analytics solutions for an industrial context, combining BI, demand forecasting, risk analysis, and decision-making support.",
          highlights: [
            "Power BI dashboards for monitoring industrial indicators.",
            "ETL processes with R, Python, and SQL.",
            "Forecasting models and statistical analyses applied to business problems.",
            "Structuring of pipelines and recommendations for analytical architecture.",
          ],
          stack: ["Power BI", "Python", "R", "SQL", "Forecasting"],
        },
        {
          company: "Instituto Mamirauá",
          role: "Researcher / Data Analyst",
          period: "Previous experience",
          location: "Amazon, Brazil",
          description:
            "Work on scientific projects and data analysis applied to research, biodiversity, and conservation.",
          highlights: [
            "Scientific data processing and analysis.",
            "Organization of field databases.",
            "Support for ecological and bioacoustic studies.",
            "Production of analyses and technical materials for research.",
          ],
          stack: ["R", "Python", "Data Analysis", "Research", "Ecology"],
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Featured projects.",
      description:
        "Selected BI, data engineering, and analytics projects focused on business impact, performance, and decision-making.",
      viewAllLabel: "View all",
      viewAllHref: "/en/projects",
      emptyMessage: "No featured projects published yet.",
      readMoreLabel: "View project",
      imageAltPrefix: "Project image",
      fallbackLabel: "BI Project",
      dateLocale: "en",
    },
    projectsPage: {
      eyebrow: "Projects",
      title: "BI, data, and analytics projects.",
      description:
        "A selection of projects focused on Business Intelligence, data engineering, analytical modeling, performance, and decision-making.",
      emptyMessage: "No projects published yet.",
      cardReadMoreLabel: "View project",
      imageAltPrefix: "Project image",
      fallbackLabel: "BI Project",
      dateLocale: "en",
    },
    projectDetail: {
      backLabel: "Back to projects",
      backHref: "/en/projects",
      imageAltPrefix: "Project image",
      dateLocale: "en",
    },
    contact: {
      eyebrow: "Contact",
      secondaryBadge: "BI · Data Engineering · Analytics",
      title: "Shall we turn data into decisions?",
      description:
        "If you are looking to build dashboards, structure pipelines, optimize analytical models, or turn data into decision products, we can talk.",
      availabilityTitle: "Available for",
      availabilityItems: [
        "Business Intelligence projects",
        "Executive dashboards in Power BI",
        "Pipelines with Databricks, PySpark, and SQL",
        "Analytical modeling and performance optimization",
      ],
      emailLabel: "Send email",
      linkedinLabel: "Connect on LinkedIn",
      githubLabel: "View GitHub",
    },

    footer: {
      navigationTitle: "Navigation",
      navigationAriaLabel: "Footer navigation",
      contactTitle: "Contact",
      copyrightPrefix: "All rights reserved.",
      builtWith: "Built with Astro, Tailwind CSS, and GitHub Pages.",
      homeAriaLabel: "Back to home",
    },
    nav: [
      {
        label: "Home",
        href: "/en/#inicio",
      },
      {
        label: "About me",
        href: "/en/#sobre",
      },
      {
        label: "Technologies",
        href: "/en/#tecnologias",
      },
      {
        label: "Experience",
        href: "/en/#experiencia",
      },
      {
        label: "Projects",
        href: "/en/#projetos",
      },
      {
        label: "Contact",
        href: "/en/#contato",
      },
    ],

    links: {
      github: "https://github.com/fredvasconcelos",
      linkedin:
        "https://www.linkedin.com/in/carlos-frederico-alves-de-vasconcelos-neto-858897263",
      email: "mailto:fredvasconcelosnt@gmail.com",
    },

    seo: {
      defaultTitle: "Fred Vasconcelos | BI Analyst & Data Engineer",
      defaultDescription:
        "Portfolio of Business Intelligence, data engineering, executive dashboards, and end-to-end analytics solutions.",
      defaultImage: "/foto_fundo_branco.png",
    },
  },
} as const;

export const getSiteConfig = (locale: Locale) => {
  return siteDictionary[locale] ?? siteDictionary["pt-BR"];
};
