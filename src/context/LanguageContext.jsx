import { createContext, useContext, useState, useEffect } from 'react';
import scriptProjectImg from '../assets/images/script_project.png';
import tilProjectImg from '../assets/images/til_project.png';
import kairosViewImg from '../assets/images/kairos_view.jpeg';
import kairosView2Img from '../assets/images/kairos_view_2.jpeg';
import kairosView3Img from '../assets/images/kairos_view_3.jpeg';

export const LanguageContext = createContext();

export const translations = {
    pt: {
        nav: { about: "Sobre", stacks: "Stacks", experience: "Carreira", projects: "Projetos" },
        hero: { badge: "Desenvolvedor Full Stack", title1: "boing.", title2: "boing.", desc: "Desenvolvedor Full Stack com foco em Node.js, TypeScript, Angular e Java, transformando regras de negócio em soluções ponta a ponta com integrações de ERPs e desenvolvimento assistido por IA.", btnProjects: "Ver Projetos", btnResume: "Currículo" },
        about: { label: "Sobre mim", title: "Desenvolvimento Full Stack moderno e robusto.", p1: "Sou Desenvolvedor Full Stack formado em Análise e Desenvolvimento de Sistemas pela Universidade Positivo (12/2025), com experiência em Node.js, TypeScript, Angular, JavaScript e Java, transformando regras de negócio de vários módulos em soluções funcionais.", p2: "No dia a dia, construo features ponta a ponta, integro sistemas com ERPs (SAP, TOTVS RM, TOTVS Protheus, Pirâmide), implemento filas assíncronas com BullMQ, gerencio dados em MySQL, MongoDB e Redis e utilizo IA como ferramenta central de desenvolvimento (geração, revisão e depuração de código), aliado a Docker, CI/CD e code review.", stat1v: "Full", stat1l: "Stack", stat2v: "ERPs &", stat2l: "Integrações", stat3v: "Dev + IA &", stat3l: "Clean Code", available: "Disponível para projetos", role: "Desenvolvedor Full Stack | Node.js, TypeScript & IA" },
        stacks: { label: "Habilidades", title: "Tecnologias.", desc: "Competências técnicas, ferramentas e integrações que utilizo no dia a dia para entregar soluções completas e testáveis." },
        experience: { label: "Carreira", title: "Experiência.", desc: "Minha trajetória profissional e formação em Análise e Desenvolvimento de Sistemas." },
        projects: { label: "Trabalhos em Destaque", title: "Projetos.", viewCase: "Ver Case" },
        footer: { desc: "Construindo software de alta performance.", rights: "Todos os direitos reservados." },
        details: { back: "Voltar ao Portfólio", code: "Ver Código", demo: "Ver Demo", about: "Sobre o Projeto", tech: "Tecnologias Usadas", timeline: "Linha do tempo", notFound: "Projeto não encontrado", return: "Voltar ao Início" }
    },
    en: {
        nav: { about: "About", stacks: "Stacks", experience: "Career", projects: "Projects" },
        hero: { badge: "Full Stack Developer", title1: "boing.", title2: "boing.", desc: "Full Stack Developer focused on Node.js, TypeScript, Angular, and Java, turning complex business rules into end-to-end solutions with ERP integrations and AI-assisted development.", btnProjects: "Explore Work", btnResume: "Resume" },
        about: { label: "About me", title: "Modern and robust Full Stack development.", p1: "I am a Full Stack Developer with a degree in Systems Analysis and Development from Universidade Positivo (12/2025) and experience in Node.js, TypeScript, Angular, JavaScript, and Java, turning multi-module business rules into functional solutions.", p2: "Day to day, I build end-to-end features, integrate systems with major ERPs (SAP, TOTVS RM, TOTVS Protheus, Pirâmide), implement asynchronous queues with BullMQ, work with MySQL, MongoDB, and Redis, and leverage AI as a core development tool (code generation, review, and debugging) alongside Docker, CI/CD, and code reviews.", stat1v: "Full", stat1l: "Stack", stat2v: "ERPs &", stat2l: "Integrations", stat3v: "AI Dev &", stat3l: "Clean Code", available: "Available for work", role: "Full Stack Developer | Node.js, TypeScript & AI" },
        stacks: { label: "Capabilities", title: "Technology Stack.", desc: "Technical skills, tools, and integrations I use daily to deliver complete and testable solutions." },
        experience: { label: "Career", title: "Experience.", desc: "My professional journey and background in Systems Analysis and Development." },
        projects: { label: "Selected Work", title: "Projects.", viewCase: "View Case" },
        footer: { desc: "Building high-performance software.", rights: "All rights reserved." },
        details: { back: "Back to Portfolio", code: "View Code", demo: "Live Demo", about: "About the Project", tech: "Technologies Used", timeline: "Timeline", notFound: "Project not found", return: "Return Home" }
    }
};

export const getExperienceData = (lang) => [
    {
        id: 1,
        role: lang === 'pt' ? "Desenvolvedor Full Stack" : "Full Stack Developer",
        company: "blueEz (Monditech)",
        period: lang === 'pt' ? "fev. 2026 — atual" : "Feb 2026 — Present",
        description: lang === 'pt'
            ? "Conversão de regras de negócio de diversos módulos em features ponta a ponta com Node.js e Java no back-end e TypeScript, Angular e JavaScript componentizado no front-end (HTML, CSS, Bootstrap, jQuery), escrevendo código pensado para ser testável. Revisão contínua do workflow de desenvolvimento com apoio de IA (geração, revisão e depuração de código). Construção e manutenção de integrações com ERPs (SAP, TOTVS RM, TOTVS Protheus e Pirâmide) e filas assíncronas com BullMQ. Modelagem e consulta de dados em MySQL, MongoDB e Redis, padronização de ambientes com Docker Compose, validação de APIs com Postman, CI/CD (Jenkins e GitHub Actions), deploy com Docker em VMs, code review e análise/resolução de chamados técnicos."
            : "Translating multi-module business rules into end-to-end features using Node.js and Java on the back-end and TypeScript, Angular, and componentized JavaScript on the front-end (HTML, CSS, Bootstrap, jQuery) with testable code design. Enhancing delivery speed by refining the development workflow with AI assistance (code generation, review, and debugging). Building and maintaining integrations with enterprise ERPs (SAP, TOTVS RM, TOTVS Protheus, and Pirâmide) and asynchronous queues with BullMQ. Modeling and querying data in MySQL, MongoDB, and Redis, standardizing environments with Docker Compose, validating APIs with Postman, working with CI/CD (Jenkins, GitHub Actions), Docker deployments on VMs, code reviews, and technical incident resolution.",
    },
    {
        id: 2,
        role: lang === 'pt' ? "Suporte Técnico Júnior" : "Junior Technical Support",
        company: "Monditech",
        period: lang === 'pt' ? "ago. 2025 — fev. 2026" : "Aug 2025 — Feb 2026",
        description: lang === 'pt'
            ? "Atendimento e diagnóstico de chamados técnicos, replicando cenários de erro e escalando correções junto ao time de desenvolvimento. Essa vivência direta com o sistema em produção impulsionou a transição para a área de desenvolvimento."
            : "Handled and diagnosed technical tickets, reproducing error scenarios and escalating fixes to the engineering team. This hands-on experience with the production system led directly to transitioning into software development.",
    },
    {
        id: 3,
        role: lang === 'pt' ? "Estagiário de QA" : "QA Intern",
        company: "Monditech",
        period: lang === 'pt' ? "mar. 2025 — jul. 2025" : "Mar 2025 — Jul 2025",
        description: lang === 'pt'
            ? "Testes e validação de funcionalidades do sistema, acompanhando demandas e defeitos no Azure DevOps e prestando atendimento a clientes."
            : "Tested and validated system features, tracking tasks and defects in Azure DevOps while assisting customers.",
    },
    {
        id: 4,
        role: lang === 'pt' ? "Aprendiz" : "Apprentice",
        company: "CGN Brasil Energia",
        period: lang === 'pt' ? "jun. 2023 — fev. 2025" : "Jun 2023 — Feb 2025",
        description: lang === 'pt'
            ? "Criação de um sistema web interno para cadastro, visualização em tabela e edição de equipamentos, utilizando PHP, JavaScript, MySQL, HTML e CSS."
            : "Created an internal web system for registering, viewing in tables, and editing equipment using PHP, JavaScript, MySQL, HTML, and CSS.",
    }
];

export const getProjectsData = (lang) => [
    {
        id: "kairos",
        title: "Kairos App",
        description: lang === 'pt'
            ? "PWA mobile-first para acompanhamento de hábitos diários, mapa de consistência anual e gestão de tarefas integrada ao Telegram."
            : "A mobile-first PWA for daily habit tracking, annual consistency heatmaps, and task management integrated with Telegram.",
        image: kairosViewImg,
        images: [kairosViewImg, kairosView2Img, kairosView3Img],
        tags: ["React", "Node.js", "TypeScript", "SQLite", "Clean Architecture", "PWA"],
        githubUrl: "https://github.com/DionathanDevs/kairos",
        demoUrl: "#",
        longDescription: lang === 'pt'
            ? "O Kairos (do grego, 'o momento oportuno') nasceu da ideia de unir a construção de disciplina diária e a organização de tarefas pessoais e do trabalho em uma experiência única, rápida e sem fricção, funcionando como um aplicativo nativo (PWA) tanto no celular quanto no desktop. No módulo de Hábitos, o usuário acompanha suas metas diárias com atualização otimista instantânea, alternando entre o modo foco no dia atual ('Hoje') e a matriz semanal completa de 7 dias, além de visualizar sua sequência perfeita (Streak), estatísticas semanais e um histórico de consistência anual estilo GitHub. No módulo de Tarefas, as pendências são organizadas por contexto (Pessoais e Trabalho) e classificadas por prioridade (Alta, Média e Baixa) com ordenação automática e ações em lote. O projeto conta ainda com integração via Bot do Telegram (Polling/Webhook com segurança Zero-Trust) para criar e consultar tarefas por mensagens com tags (#work, !alta), backend estruturado em Clean Architecture com Node.js, Express e SQLite nativo, e suíte de Quality Gates automatizados para desenvolvimento assistido por IA."
            : "Kairos (from the Greek for 'the opportune moment') was built from the idea of unifying daily habit discipline and personal/work task organization into a single, fast, friction-free experience that feels like a native mobile and desktop app (PWA). In the Habits module, users track daily goals with instant optimistic UI updates, switching between a focused 'Today' view and a full 7-day weekly matrix while monitoring their perfect streak, weekly performance charts, and a GitHub-inspired consistency heatmap. In the Tasks module, action items are organized by context (Personal and Work) and priority tags (High, Medium, Low) with smart sorting and batch actions. The platform also features a Zero-Trust Telegram Bot integration (Polling/Webhook) to create and list tasks directly from chat messages using tags (#work, !high), a Clean Architecture backend powered by Node.js, Express, and native SQLite, and automated AI Quality Gates."
    },
    {
        id: "scriptvault",
        title: "ScriptVault App",
        description: lang === 'pt' ? "Aplicação full-stack para salvar e executar scripts, trechos de código e links, com interface inspirada em terminal." : "A full-stack application for saving and running scripts, code snippets and links, with a terminal-themed UI.",
        image: scriptProjectImg,
        tags: ["React", "Node.js", "SQLite"],
        githubUrl: "https://github.com/DionathanDevs/scriptvault",
        demoUrl: "#",
        longDescription: lang === 'pt'
            ? "ScriptVault App é uma solução abrangente para desenvolvedores gerenciarem e executarem scripts, trechos de código, links importantes e documentação em uma interface altamente customizável com o tema Dark/Terminal. O foco principal é o armazenamento e execução de scripts shell e de automação. Possui um backend Node.js robusto usando módulos ESM e banco de dados SQLite."
            : "ScriptVault App is a comprehensive solution for developers to manage and run scripts, code snippets, important links, and documentation in a highly customizable, terminal-themed interface. The main focus is storing and executing shell and automation scripts. Features a robust Node.js backend using ESM modules and a SQLite database."
    },
    {
        id: "til-platform",
        title: "TIL Tracker",
        description: lang === 'pt' ? "Um rastreador pessoal de aprendizado focado em guardar reflexões diárias limpas." : "A clean personal learning tracker showcasing daily insights and reflections.",
        image: tilProjectImg,
        tags: ["React", "Context API"],
        githubUrl: "https://github.com/DionathanDevs/til",
        demoUrl: "#",
        longDescription: lang === 'pt'
            ? "A plataforma 'Today I Learned' (Hoje eu aprendi) permite que os usuários documentem suas reflexões diárias. Inclui funcionalidade para categorização, análise da abordagem ('o que eu faria diferente') e view de leitura limpa modular."
            : "The 'Today I Learned' platform allows users to document their daily learning journey with categorization, alternative approach reflections, and a unified reading view."
    }
];

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(() => {
        const savedLang = localStorage.getItem('portfolio-lang');
        if (savedLang) return savedLang;

        const systemLang = navigator.language || navigator.userLanguage;
        if (systemLang && systemLang.toLowerCase().includes('pt')) {
            return 'pt';
        }
        return 'en';
    });

    useEffect(() => {
        // initial load is handled by useState initialization
    }, []);

    const toggleLanguage = () => {
        const newLang = lang === 'pt' ? 'en' : 'pt';
        setLang(newLang);
        localStorage.setItem('portfolio-lang', newLang);
    };

    const t = translations[lang];

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage, t, experienceData: getExperienceData(lang), projectsData: getProjectsData(lang) }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
