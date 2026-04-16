import { createContext, useContext, useState, useEffect } from 'react';
import scriptProjectImg from '../assets/images/script_project.png';
import tilProjectImg from '../assets/images/til_project.png';

export const LanguageContext = createContext();

export const translations = {
    pt: {
        nav: { about: "Sobre", stacks: "Stacks", experience: "Carreira", projects: "Projetos" },
        hero: { badge: "Desenvolvedor Full Stack", title1: "boing.", title2: "boing.", desc: "Desenvolvedor Full Stack focado em criar e manter aplicações robustas, garantindo integrações de sistemas fluidas e excelentes experiências de usuário.", btnProjects: "Ver Projetos", btnResume: "Currículo" },
        about: { label: "Sobre mim", title: "Desenvolvimento Full Stack moderno e robusto.", p1: "Sou um Desenvolvedor Full Stack com forte vivência em Node.js, React e JavaScript, trabalhando junto a bancos de dados como MySQL, MongoDB e Redis.", p2: "Atuo no desenvolvimento de sistemas inteiros, focando desde em integrações com ERPs de mercado até a orquestração via Docker e RabbitMQ/BullMQ, assegurando entregas sempre ágeis e estáveis.", stat1v: "Full", stat1l: "Stack", stat2v: "APIs &", stat2l: "Integrações", stat3v: "Clean", stat3l: "Code", available: "Disponível para projetos", role: "Desenvolvedor Full Stack" },
        stacks: { label: "Habilidades", title: "Tecnologias.", desc: "A stack tecnológica onde alio meu domínio e as ferramentas adotadas para aplicações eficazes." },
        experience: { label: "Carreira", title: "Experiência.", desc: "Minha trajetória e evolução de carreira com software." },
        projects: { label: "Trabalhos em Destaque", title: "Projetos.", viewCase: "Ver Case" },
        footer: { desc: "Construindo software de alta performance.", rights: "Todos os direitos reservados." },
        details: { back: "Voltar ao Portfólio", code: "Ver Código", demo: "Ver Demo", about: "Sobre o Projeto", tech: "Tecnologias Usadas", timeline: "Linha do tempo", notFound: "Projeto não encontrado", return: "Voltar ao Início" }
    },
    en: {
        nav: { about: "About", stacks: "Stacks", experience: "Career", projects: "Projects" },
        hero: { badge: "Full Stack Developer", title1: "boing.", title2: "boing.", desc: "Full Stack Developer focused on building robust applications, ensuring smooth system integrations and excellent user experiences.", btnProjects: "Explore Work", btnResume: "Resume" },
        about: { label: "About me", title: "Modern and robust Full Stack development.", p1: "I am a Full Stack Developer with strong experience in Node.js, React, and JavaScript, along with databases such as MySQL, MongoDB, and Redis.", p2: "I work on complete system development, focusing on everything from market ERP integrations to Docker orchestration and BullMQ orchestration, always ensuring agile and stable delivery.", stat1v: "Full", stat1l: "Stack", stat2v: "APIs &", stat2l: "Integrations", stat3v: "Clean", stat3l: "Code", available: "Available for work", role: "Full Stack Developer" },
        stacks: { label: "Capabilities", title: "Technology Stack.", desc: "The tech stack where my expertise lies for building effective applications." },
        experience: { label: "Career", title: "Experience.", desc: "My professional journey and career evolution in software." },
        projects: { label: "Selected Work", title: "Projects.", viewCase: "View Case" },
        footer: { desc: "Building high-performance software.", rights: "All rights reserved." },
        details: { back: "Back to Portfolio", code: "View Code", demo: "Live Demo", about: "About the Project", tech: "Technologies Used", timeline: "Timeline", notFound: "Project not found", return: "Return Home" }
    }
};

export const getExperienceData = (lang) => [
    {
        id: 1,
        role: lang === 'pt' ? "Desenvolvedor Full Stack" : "Full Stack Developer",
        company: "blueEz",
        period: lang === 'pt' ? "fev de 2026 — Presente (3 meses)" : "Feb 2026 — Present (3 mos)",
        description: lang === 'pt'
            ? "Atuação direta na construção e entrega de novas funcionalidades com Node.js e Java no back-end. Desenvolvimento front-end com foco em componentização usando JavaScript, HTML, CSS, React e Bootstrap. Realização de integrações com grandes ERPs (SAP, TOTVS RM). Manutenção, resolução de chamados e manipulação de dados em MySQL, MongoDB e Redis, e controle de filas assíncronas com BullMQ."
            : "Direct involvement in building and delivering new features with Node.js and Java. Front-end development using JavaScript, HTML, CSS, React, and Bootstrap. Responsible for integrating with major ERPs (SAP, TOTVS RM). Maintenance, bug resolution, manipulation of MySQL, MongoDB, and Redis databases, and queue control via BullMQ.",
    },
    {
        id: 2,
        role: lang === 'pt' ? "Desenvolvedor Front-End, Suporte & QA" : "Front-End Developer, Support & QA",
        company: "Monditech",
        period: lang === 'pt' ? "mar de 2025 — Presente (1 a 2 m)" : "Mar 2025 — Present (1 yr 2 mos)",
        description: lang === 'pt'
            ? "Iniciei como Estagiário de Quality Assurance, fui promovido a Suporte Técnico Júnior lidando com atendimento ao cliente e Azure DevOps, e posteriormente alcancei a vaga de Desenvolvedor Front-End."
            : "I started as a Quality Assurance Intern, was promoted to Junior Technical Support handling customer service and Azure DevOps, and subsequently became a Front-End Developer.",
    },
    {
        id: 3,
        role: lang === 'pt' ? "Aprendiz" : "Apprentice",
        company: "CGN Brasil Energia",
        period: lang === 'pt' ? "jun de 2023 — fev de 2025 (1 a 9 m)" : "Jun 2023 — Feb 2025 (1 yr 9 mos)",
        description: lang === 'pt'
            ? "Criação de um sistema web interno focado em edição e exibição de registros usando PHP, JavaScript, MySQL, HTML e CSS. Também atuei no controle de impostos e despesas por meio do SAP Business One e com avaliação rigorosa da documentação de parceiros e fornecedores."
            : "Developed an internal web platform for editing and viewing records employing PHP, JavaScript, MySQL, HTML, and CSS. Handled general expense launches via SAP Business One and meticulously evaluated supplier documentation.",
    },
    {
        id: 4,
        role: lang === 'pt' ? "Estagiário QA" : "QA Intern",
        company: "Up&Help",
        period: lang === 'pt' ? "dez de 2022 — jun de 2023 (7 meses)" : "Dec 2022 — Jun 2023 (7 mos)",
        description: lang === 'pt'
            ? "Focado na garantia da qualidade contínua. Realização de testes detalhados e asseguramento de qualidades técnicas variadas aos clientes em dispositivos pontuais."
            : "Focused on continuous quality assurance. Conducted rigorous and detailed functional quality tests, assuring multiple layers of technical validation on targeted enterprise hardware/systems.",
    }
];

export const getProjectsData = (lang) => [
    {
        id: "scriptvault",
        title: "ScriptVault App",
        description: lang === 'pt' ? "Aplicação full-stack para salvar e executar scripts, trechos de código e links, com interface inspirada em terminal." : "A full-stack application for saving and running scripts, code snippets and links, with a terminal-themed UI.",
        image: scriptProjectImg,
        tags: ["React", "Node.js", "SQLite"],
        githubUrl: "https://github.com/boing/scriptvault",
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
        githubUrl: "https://github.com/boing/til",
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
