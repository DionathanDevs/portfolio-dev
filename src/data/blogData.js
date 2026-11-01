export const blogTranslations = {
    pt: {
        navLabel: "Blog",
        terminalPath: "~/boing/blog",
        badge: "Artigos & Engenharia",
        title: "Notas de Engenharia.",
        subtitle: "Artigos técnicos, decisões de arquitetura, integrações corporativas, uso prático de IA e aprendizados construindo software em produção.",
        searchPlaceholder: "Buscar artigos por título, tema ou tag...",
        searchShortcut: "/",
        clearSearch: "Limpar",
        allCategories: "Todos",
        featuredBadge: "Em Destaque",
        readArticle: "Ler artigo",
        minRead: "min de leitura",
        postsCount: "artigos publicados",
        filteredCount: "encontrado(s)",
        emptyTitle: "Nenhum artigo encontrado",
        emptyDesc: "Tente buscar por outro termo ou selecione outra categoria no menu do blog.",
        resetFilters: "Limpar filtros",
        viewList: "Lista",
        viewGrid: "Cards",
        backToBlog: "Voltar para o Blog",
        backToPortfolio: "Portfólio",
        tocTitle: "Neste artigo",
        tagsTitle: "Tópicos & Tags",
        shareTitle: "Compartilhar",
        copyLink: "Copiar link",
        linkCopied: "Link copiado!",
        copyCode: "Copiar",
        codeCopied: "Copiado!",
        authorRole: "Desenvolvedor Full Stack | Node.js, TypeScript & IA",
        authorBio: "Escrevendo sobre arquitetura back-end, filas assíncronas, integrações de ERPs e desenvolvimento assistido por IA.",
        helpfulPrompt: "Gostou deste artigo?",
        helpfulSub: "Deixe um aplauso para apoiar novos conteúdos técnicos.",
        prevPost: "Artigo anterior",
        nextPost: "Próximo artigo",
        notFoundTitle: "Artigo não encontrado",
        notFoundDesc: "O artigo que você procura pode ter sido movido ou não existe.",
        homeSection: {
            label: "Blog & Escrita Técnica",
            title: "Últimos Artigos.",
            desc: "Reflexões práticas sobre arquitetura de software, filas assíncronas, integrações e engenharia assistida por IA.",
            viewAll: "Explorar todos os artigos"
        },
        categories: {
            all: "Todos",
            architecture: "Arquitetura & Filas",
            ai: "IA & Engenharia",
            backend: "Back-end & Dados",
            frontend: "Front-end & UI",
            career: "Carreira & TIL"
        }
    },
    en: {
        navLabel: "Blog",
        terminalPath: "~/boing/blog",
        badge: "Writing & Engineering",
        title: "Engineering Notes.",
        subtitle: "Technical deep dives, architecture decisions, enterprise ERP integrations, practical AI workflows, and lessons from building software in production.",
        searchPlaceholder: "Search articles by title, topic, or tag...",
        searchShortcut: "/",
        clearSearch: "Clear",
        allCategories: "All",
        featuredBadge: "Featured",
        readArticle: "Read article",
        minRead: "min read",
        postsCount: "published articles",
        filteredCount: "found",
        emptyTitle: "No articles found",
        emptyDesc: "Try searching for a different keyword or selecting another category from the blog menu.",
        resetFilters: "Reset filters",
        viewList: "List",
        viewGrid: "Grid",
        backToBlog: "Back to Blog",
        backToPortfolio: "Portfolio",
        tocTitle: "On this page",
        tagsTitle: "Topics & Tags",
        shareTitle: "Share",
        copyLink: "Copy link",
        linkCopied: "Link copied!",
        copyCode: "Copy",
        codeCopied: "Copied!",
        authorRole: "Full Stack Developer | Node.js, TypeScript & AI",
        authorBio: "Writing about back-end architecture, async queues, enterprise ERP integrations, and AI-assisted software engineering.",
        helpfulPrompt: "Enjoyed this article?",
        helpfulSub: "Leave a clap to support more deep-dive engineering posts.",
        prevPost: "Previous article",
        nextPost: "Next article",
        notFoundTitle: "Article not found",
        notFoundDesc: "The article you are looking for might have been moved or does not exist.",
        homeSection: {
            label: "Blog & Technical Writing",
            title: "Latest Writing.",
            desc: "Practical insights on software architecture, asynchronous queues, enterprise integrations, and AI-assisted engineering.",
            viewAll: "Explore all articles"
        },
        categories: {
            all: "All",
            architecture: "Architecture & Queues",
            ai: "AI & Engineering",
            backend: "Back-end & Data",
            frontend: "Front-end & UI",
            career: "Career & TIL"
        }
    }
};

export const getBlogPosts = (lang) => [
    {
        slug: "bullmq-redis-integracoes-erp-resilientes",
        featured: true,
        category: "architecture",
        categoryLabel: blogTranslations[lang].categories.architecture,
        date: "2026-10-24",
        displayDate: lang === 'pt' ? "24 Out, 2026" : "Oct 24, 2026",
        year: "2026",
        readingTime: 8,
        tags: ["Node.js", "TypeScript", "BullMQ", "Redis", "ERPs", "Arquitetura"],
        title: lang === 'pt'
            ? "Arquitetura de Filas Assíncronas com BullMQ e Redis em Integrações de ERPs"
            : "Asynchronous Queue Architecture with BullMQ and Redis in Enterprise ERP Integrations",
        excerpt: lang === 'pt'
            ? "Como projetar integrações resilientes com SAP, TOTVS Protheus e RM usando filas assíncronas, chaves de idempotência, backoff exponencial e Dead Letter Queues."
            : "How to design resilient integrations with SAP, TOTVS Protheus, and RM using async queues, idempotency keys, exponential backoff, and Dead Letter Queues.",
        sections: lang === 'pt' ? [
            {
                id: "o-problema-das-integracoes-sincronas",
                title: "O problema das chamadas síncronas em ERPs",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Quem trabalha integrando aplicações modernas em Node.js com grandes ERPs corporativos (como SAP, TOTVS Protheus, TOTVS RM ou Pirâmide) aprende rápido uma regra fundamental: você nunca pode confiar que o webservice externo responderá em 100ms — ou sequer que estará disponível no momento exato do clique do usuário."
                    },
                    {
                        type: "paragraph",
                        text: "Em fluxos críticos de negócio (emissão de notas, sincronização de pedidos, baixa de estoque ou aprovação financeira), executar a integração de forma síncrona dentro da request HTTP principal gera timeouts, trava a experiência do usuário e cria estados inconsistentes difíceis de rastrear."
                    },
                    {
                        type: "callout",
                        variant: "info",
                        title: "Regra de Ouro em Integrações",
                        text: "Desacople a intenção de negócio da execução externa. Salve o estado local em transação rápida, enfileire o evento e processe a comunicação com o ERP de maneira assíncrona e observável."
                    }
                ]
            },
            {
                id: "desenhando-o-pipeline-com-bullmq",
                title: "Desenhando o pipeline com BullMQ e Redis",
                blocks: [
                    {
                        type: "paragraph",
                        text: "O BullMQ, construído sobre Redis Streams e scripts Lua atômicos, permite estruturar workers em Node.js e TypeScript com garantias sólidas de entrega (at-least-once delivery), controle de concorrência por fila e retentativas inteligentes."
                    },
                    {
                        type: "code",
                        language: "typescript",
                        filename: "erp-sync.queue.ts",
                        code: `import { Queue, Worker, Job } from 'bullmq';
import { redisConnection } from '../config/redis';

export interface ErpInvoicePayload {
  tenantId: string;
  invoiceId: string;
  erpTarget: 'SAP' | 'PROTHEUS' | 'RM';
  idempotencyKey: string;
}

export const erpInvoiceQueue = new Queue<ErpInvoicePayload>('erp-invoice-sync', {
  connection: redisConnection,
  defaultJobOptions: {
    attempts: 5,
    backoff: {
      type: 'exponential',
      delay: 3000, // 3s, 6s, 12s, 24s, 48s
    },
    removeOnComplete: { count: 500 },
    removeOnFail: false, // Mantém falhas definitivas para auditoria
  },
});`
                    },
                    {
                        type: "paragraph",
                        text: "Ao definir `jobId: payload.idempotencyKey` no momento de enfileirar, o próprio BullMQ impede que o mesmo documento seja enfileirado em duplicidade enquanto já estiver pendente ou em processamento ativo."
                    }
                ]
            },
            {
                id: "idempotencia-e-classificacao-de-erros",
                title: "Idempotência e classificação de erros (Transient vs. Business)",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Nem todo erro retornado por um ERP deve sofrer retry. Se o servidor do Protheus retornou `503 Service Unavailable` ou `ETIMEDOUT`, o backoff exponencial resolverá. Porém, se retornou um erro de regra de negócio como 'Centro de Custo inativo' ou 'CNPJ inválido', tentar novamente 5 vezes só vai poluir os logs e sobrecarregar o ERP."
                    },
                    {
                        type: "list",
                        items: [
                            "Erros Transitórios (Rede, Timeout, 502/503/504, Lock de tabela): Devem lançar exceção padrão para acionar o backoff exponencial do BullMQ.",
                            "Erros de Negócio (400, 422, validação fiscal/contábil): Devem usar `UnrecoverableError` do BullMQ para encerrar as tentativas imediatamente e notificar o painel operacional.",
                            "Controle de Concorrência (Rate Limiting): ERPs legados costumam sofrer quando recebem 50 requisições paralelas. Configurar `concurrency: 5` e `limiter` no Worker protege o ambiente do cliente."
                        ]
                    },
                    {
                        type: "code",
                        language: "typescript",
                        filename: "erp-sync.worker.ts",
                        code: `import { Worker, UnrecoverableError } from 'bullmq';
import { ErpGatewayFactory } from '../gateways/erp-gateway.factory';

export const erpInvoiceWorker = new Worker(
  'erp-invoice-sync',
  async (job) => {
    const { erpTarget, invoiceId, idempotencyKey } = job.data;
    const gateway = ErpGatewayFactory.create(erpTarget);

    const response = await gateway.sendInvoice({ invoiceId, idempotencyKey });

    if (response.isBusinessValidationError) {
      await markInvoiceAsRejected(invoiceId, response.errorMessage);
      throw new UnrecoverableError(response.errorMessage);
    }

    return { protocol: response.erpProtocol, syncedAt: new Date().toISOString() };
  },
  {
    connection: redisConnection,
    concurrency: 4,
    limiter: { max: 20, duration: 1000 },
  }
);`
                    }
                ]
            },
            {
                id: "observabilidade-e-dlq",
                title: "Observabilidade e reprocessamento seguro",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Uma fila sem visibilidade vira uma caixa-preta. Persistir o histórico de tentativas com o payload enviado, o tempo de resposta de cada chamada e o código de retorno permite que tanto o time de suporte quanto o próprio usuário entendam exatamente o status de cada integração sem precisar abrir chamado no banco de dados."
                    },
                    {
                        type: "quote",
                        text: "Confiabilidade em sistemas distribuídos não é evitar que falhas aconteçam, mas garantir que toda falha seja visível, auditável e reprocessável com um único clique."
                    }
                ]
            }
        ] : [
            {
                id: "the-problem-with-synchronous-erp-calls",
                title: "The problem with synchronous ERP calls",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Anyone integrating modern Node.js applications with enterprise ERPs (such as SAP, TOTVS Protheus, TOTVS RM, or Pirâmide) quickly learns a fundamental rule: you can never assume an external webservice will respond within 100ms—or even be online at the exact moment a user clicks a button."
                    },
                    {
                        type: "paragraph",
                        text: "In mission-critical workflows (invoice issuance, order synchronization, inventory deduction, or financial approvals), running integrations synchronously inside the main HTTP request causes timeouts, blocks the UI, and creates inconsistent states that are painful to debug."
                    },
                    {
                        type: "callout",
                        variant: "info",
                        title: "Golden Rule of Enterprise Integrations",
                        text: "Decouple business intent from external execution. Persist local state in a fast transaction, enqueue the domain event, and process ERP communication asynchronously with full observability."
                    }
                ]
            },
            {
                id: "designing-the-pipeline-with-bullmq",
                title: "Designing the pipeline with BullMQ and Redis",
                blocks: [
                    {
                        type: "paragraph",
                        text: "BullMQ, built on top of Redis Streams and atomic Lua scripts, lets us structure Node.js and TypeScript workers with solid at-least-once delivery guarantees, fine-grained concurrency control, and smart exponential backoff."
                    },
                    {
                        type: "code",
                        language: "typescript",
                        filename: "erp-sync.queue.ts",
                        code: `import { Queue, Worker, Job } from 'bullmq';
import { redisConnection } from '../config/redis';

export interface ErpInvoicePayload {
  tenantId: string;
  invoiceId: string;
  erpTarget: 'SAP' | 'PROTHEUS' | 'RM';
  idempotencyKey: string;
}

export const erpInvoiceQueue = new Queue<ErpInvoicePayload>('erp-invoice-sync', {
  connection: redisConnection,
  defaultJobOptions: {
    attempts: 5,
    backoff: {
      type: 'exponential',
      delay: 3000, // 3s, 6s, 12s, 24s, 48s
    },
    removeOnComplete: { count: 500 },
    removeOnFail: false, // Keep failed jobs for auditing and replay
  },
});`
                    },
                    {
                        type: "paragraph",
                        text: "By setting `jobId: payload.idempotencyKey` when enqueueing, BullMQ automatically prevents duplicate jobs for the same document while it is already waiting or active."
                    }
                ]
            },
            {
                id: "idempotency-and-error-classification",
                title: "Idempotency and error classification (Transient vs. Business)",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Not every error returned by an ERP should be retried. If a Protheus server returns `503 Service Unavailable` or `ETIMEDOUT`, exponential backoff will recover gracefully. However, if it returns a business rule error like 'Inactive Cost Center' or 'Invalid Tax ID', retrying 5 times only pollutes logs and hammers the ERP."
                    },
                    {
                        type: "list",
                        items: [
                            "Transient Errors (Network, Timeout, 502/503/504, DB table locks): Throw standard errors so BullMQ triggers exponential backoff.",
                            "Business Validation Errors (400, 422, fiscal/accounting rules): Throw BullMQ's `UnrecoverableError` to halt retries immediately and surface the issue on the operational dashboard.",
                            "Concurrency & Rate Limiting: Legacy ERPs often struggle when hit with 50 parallel requests. Setting `concurrency: 4` and a worker `limiter` protects the customer's infrastructure."
                        ]
                    },
                    {
                        type: "code",
                        language: "typescript",
                        filename: "erp-sync.worker.ts",
                        code: `import { Worker, UnrecoverableError } from 'bullmq';
import { ErpGatewayFactory } from '../gateways/erp-gateway.factory';

export const erpInvoiceWorker = new Worker(
  'erp-invoice-sync',
  async (job) => {
    const { erpTarget, invoiceId, idempotencyKey } = job.data;
    const gateway = ErpGatewayFactory.create(erpTarget);

    const response = await gateway.sendInvoice({ invoiceId, idempotencyKey });

    if (response.isBusinessValidationError) {
      await markInvoiceAsRejected(invoiceId, response.errorMessage);
      throw new UnrecoverableError(response.errorMessage);
    }

    return { protocol: response.erpProtocol, syncedAt: new Date().toISOString() };
  },
  {
    connection: redisConnection,
    concurrency: 4,
    limiter: { max: 20, duration: 1000 },
  }
);`
                    }
                ]
            },
            {
                id: "observability-and-safe-reprocessing",
                title: "Observability and safe reprocessing",
                blocks: [
                    {
                        type: "paragraph",
                        text: "A queue without visibility becomes a black box. Persisting attempt logs with request payloads, latency metrics, and response codes empowers both support engineers and end users to understand integration status without querying the database manually."
                    },
                    {
                        type: "quote",
                        text: "Reliability in distributed systems isn't about preventing every failure—it's about making every failure visible, auditable, and safely replayable with a single click."
                    }
                ]
            }
        ]
    },
    {
        slug: "desenvolvimento-assistido-por-ia-quality-gates",
        featured: false,
        category: "ai",
        categoryLabel: blogTranslations[lang].categories.ai,
        date: "2026-10-12",
        displayDate: lang === 'pt' ? "12 Out, 2026" : "Oct 12, 2026",
        year: "2026",
        readingTime: 6,
        tags: ["IA", "Clean Architecture", "TypeScript", "Quality Gates", "Produtividade"],
        title: lang === 'pt'
            ? "Desenvolvimento Assistido por IA: Quality Gates, Arquitetura Limpa e Produtividade Real"
            : "AI-Assisted Engineering: Quality Gates, Clean Architecture, and Real-World Velocity",
        excerpt: lang === 'pt'
            ? "Como integrar agentes de IA no fluxo diário de engenharia mantendo código testável, fronteiras arquiteturais claras e revisão rigorosa."
            : "How to integrate AI agents into daily software engineering while maintaining testable code, strict architectural boundaries, and rigorous code review.",
        sections: lang === 'pt' ? [
            {
                id: "ia-como-alavanca-nao-muleta",
                title: "IA como alavanca de engenharia, não como atalho sem revisão",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Nos últimos meses, utilizar IA no fluxo de desenvolvimento deixou de ser apenas autocompletar linhas de código para se tornar parte ativa da análise, geração de testes, refatoração e depuração de cenários complexos. Mas existe uma diferença enorme entre 'gerar código rápido' e 'entregar software sustentável'."
                    },
                    {
                        type: "paragraph",
                        text: "Quando a base de código não possui contratos claros, tipagem forte e separação de responsabilidades, qualquer assistente de IA tende a amplificar a desorganização existente. Por outro lado, em projetos estruturados com Clean Architecture e TypeScript estrito, a IA se comporta como um multiplicador real de velocidade."
                    }
                ]
            },
            {
                id: "quality-gates-deterministas",
                title: "Quality Gates determinísticos como rede de proteção",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Durante a construção do Kairos App e em demandas diárias no trabalho, adotei um princípio simples: toda alteração assistida por IA precisa passar por portões determinísticos antes mesmo do code review humano."
                    },
                    {
                        type: "list",
                        items: [
                            "Contratos e Tipagem Estrita: Interfaces de domínio e DTOs são definidos primeiro. A implementação gerada deve respeitar 100% do contrato sem recorrer a `any`.",
                            "Isolamento da Regra de Negócio: Casos de uso puros (sem dependência direta de framework HTTP ou ORM) permitem gerar testes unitários rápidos e confiáveis.",
                            "Scripts de Verificação Automatizada: Linter, checagem de tipos (`tsc --noEmit`) e suíte de testes rodam em segundos a cada iteração."
                        ]
                    },
                    {
                        type: "code",
                        language: "json",
                        filename: "package.json (Quality Gates)",
                        code: `{
  "scripts": {
    "gate:types": "tsc --noEmit",
    "gate:lint": "eslint src --max-warnings=0",
    "gate:test": "vitest run --passWithNoTests",
    "quality-gate": "npm run gate:types && npm run gate:lint && npm run gate:test"
  }
}`
                    },
                    {
                        type: "callout",
                        variant: "tip",
                        title: "Dica prática de Workflow",
                        text: "Peça para a IA escrever primeiro os casos de teste cobrindo os edge cases da regra de negócio, valide se os testes fazem sentido e só então implemente ou refatore o caso de uso."
                    }
                ]
            },
            {
                id: "code-review-continua-sendo-humano",
                title: "A responsabilidade final é sempre do engenheiro",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Ferramentas de IA são excelentes para explorar hipóteses de bug, montar boilerplate de integração e sugerir refatorações, mas o entendimento do domínio do cliente, dos gargalos de banco de dados e da segurança em produção continua sendo responsabilidade intransferível do desenvolvedor."
                    }
                ]
            }
        ] : [
            {
                id: "ai-as-an-engineering-lever",
                title: "AI as an engineering lever, not an unreviewed shortcut",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Using AI in software development has evolved far beyond single-line autocomplete into an active partner for architecture exploration, test generation, refactoring, and debugging complex incidents. Yet there is a massive gap between 'generating code fast' and 'shipping maintainable software'."
                    },
                    {
                        type: "paragraph",
                        text: "When a codebase lacks clear contracts, strict typing, and separation of concerns, AI assistants tend to amplify existing entropy. Conversely, in projects structured around Clean Architecture and strict TypeScript, AI acts as a genuine force multiplier."
                    }
                ]
            },
            {
                id: "deterministic-quality-gates",
                title: "Deterministic Quality Gates as a safety net",
                blocks: [
                    {
                        type: "paragraph",
                        text: "While building Kairos App and delivering production features day to day, I established a simple rule: every AI-assisted change must pass deterministic quality gates before human code review even begins."
                    },
                    {
                        type: "list",
                        items: [
                            "Strict Contracts First: Domain interfaces and DTOs are defined upfront. Generated implementations must satisfy the contract without falling back to `any`.",
                            "Isolated Domain Logic: Pure use cases (decoupled from Express or database drivers) make unit tests fast, deterministic, and easy to verify.",
                            "Automated Verification Scripts: Linting, typechecking (`tsc --noEmit`), and unit tests run in seconds on every iteration."
                        ]
                    },
                    {
                        type: "code",
                        language: "json",
                        filename: "package.json (Quality Gates)",
                        code: `{
  "scripts": {
    "gate:types": "tsc --noEmit",
    "gate:lint": "eslint src --max-warnings=0",
    "gate:test": "vitest run --passWithNoTests",
    "quality-gate": "npm run gate:types && npm run gate:lint && npm run gate:test"
  }
}`
                    },
                    {
                        type: "callout",
                        variant: "tip",
                        title: "Workflow Tip",
                        text: "Have the AI draft edge-case unit tests for the business rule first, review the assertions yourself, and only then implement or refactor the use case."
                    }
                ]
            },
            {
                id: "engineering-ownership",
                title: "Final ownership always belongs to the engineer",
                blocks: [
                    {
                        type: "paragraph",
                        text: "AI tools excel at exploring bug hypotheses, scaffolding integration adapters, and suggesting refactors—but understanding business context, database query performance, and production security remains the engineer's non-negotiable responsibility."
                    }
                ]
            }
        ]
    },
    {
        slug: "do-qa-e-suporte-ao-full-stack-producao",
        featured: false,
        category: "career",
        categoryLabel: blogTranslations[lang].categories.career,
        date: "2026-09-28",
        displayDate: lang === 'pt' ? "28 Set, 2026" : "Sep 28, 2026",
        year: "2026",
        readingTime: 5,
        tags: ["Carreira", "QA", "Debugging", "Produção", "Engenharia de Software"],
        title: lang === 'pt'
            ? "Do Suporte e QA ao Full Stack: Como Diagnosticar Produção Me Tornou um Dev Melhor"
            : "From QA and Support to Full Stack: How Debugging Production Made Me a Better Engineer",
        excerpt: lang === 'pt'
            ? "Por que passar pela linha de frente de QA e Suporte Técnico muda completamente a forma como você projeta logs, validações e tratamento de erros."
            : "Why spending time on the front lines of QA and Technical Support fundamentally changes how you design logs, validations, and error handling.",
        sections: lang === 'pt' ? [
            {
                id: "a-escola-da-producao-real",
                title: "A escola da produção real",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Antes de atuar diretamente como Desenvolvedor Full Stack, passei pelos papéis de Estagiário de QA e Suporte Técnico Júnior. Na época, meu trabalho diário consistia em validar entregas, reproduzir cenários de falha reportados por clientes e investigar por que determinado fluxo havia se comportado de maneira inesperada em produção."
                    },
                    {
                        type: "paragraph",
                        text: "Essa transição deixou marcas muito positivas no modo como escrevo código hoje. Quando você já esteve do lado de quem precisa diagnosticar um incidente às 17h30 de uma sexta-feira, você nunca mais escreve um `catch (err) { console.log(err) }` genérico."
                    }
                ]
            },
            {
                id: "tres-habitos-que-trouxe-para-o-desenvolvimento",
                title: "Três hábitos que trouxe para a engenharia",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Logs estruturados com contexto de negócio: Um log útil precisa dizer qual `tenantId`, qual `documentId` e em qual etapa do fluxo ocorreu a falha, não apenas uma stack trace solta.",
                            "Pensar no 'caminho infeliz' desde o início: O que acontece se o usuário clicar duas vezes? E se o payload vier com caracteres especiais do ERP? E se a sessão expirar no meio do upload?",
                            "Código pensado para ser testável: Estruturar funções e serviços com dependências injetáveis torna simples reproduzir qualquer cenário de produção em um teste automatizado."
                        ]
                    },
                    {
                        type: "quote",
                        text: "O melhor código não é apenas aquele que passa nos testes quando tudo dá certo, mas aquele que explica exatamente o que aconteceu quando algo externo falha."
                    }
                ]
            }
        ] : [
            {
                id: "the-school-of-real-production",
                title: "The school of real-world production",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Before stepping into my role as a Full Stack Developer, I worked as a QA Intern and Junior Technical Support specialist. My daily routine revolved around validating releases, reproducing tricky customer bug reports, and investigating why specific workflows behaved unexpectedly in production."
                    },
                    {
                        type: "paragraph",
                        text: "That journey permanently shaped how I write software today. Once you have been the person diagnosing a production incident at 5:30 PM on a Friday, you never write a silent or generic `catch (err) { console.log(err) }` again."
                    }
                ]
            },
            {
                id: "three-habits-brought-to-engineering",
                title: "Three habits I brought into software engineering",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Structured logs with business context: A useful log entry must include the `tenantId`, `documentId`, and workflow step where the failure occurred—not just an isolated stack trace.",
                            "Designing for the unhappy path upfront: What happens if the user double-clicks? What if the ERP payload contains unexpected encoding? What if a network call times out mid-transaction?",
                            "Testable-by-design architecture: Writing services with explicit inputs and injectable dependencies makes reproducing any production edge case in a test straightforward."
                        ]
                    },
                    {
                        type: "quote",
                        text: "Great code isn't just code that works when everything goes right—it's code that explains exactly what happened when an external dependency goes wrong."
                    }
                ]
            }
        ]
    },
    {
        slug: "sqlite-em-producao-nodejs-pwa-local-first",
        featured: false,
        category: "backend",
        categoryLabel: blogTranslations[lang].categories.backend,
        date: "2026-09-10",
        displayDate: lang === 'pt' ? "10 Set, 2026" : "Sep 10, 2026",
        year: "2026",
        readingTime: 7,
        tags: ["SQLite", "Node.js", "PWA", "React", "Performance"],
        title: lang === 'pt'
            ? "SQLite em Produção no Node.js: Lições Construindo um PWA Mobile-First"
            : "SQLite in Production with Node.js: Lessons from Building a Mobile-First PWA",
        excerpt: lang === 'pt'
            ? "Configurações essenciais de WAL mode, pragmas de performance, backups e atualizações otimistas na construção do Kairos App e ScriptVault."
            : "Essential WAL mode configurations, performance pragmas, backups, and optimistic UI updates learned while building Kairos App and ScriptVault.",
        sections: lang === 'pt' ? [
            {
                id: "por-que-sqlite-no-servidor",
                title: "Por que escolher SQLite para aplicações dedicadas?",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Em grandes sistemas corporativos multi-tenant utilizamos MySQL, PostgreSQL ou MongoDB combinados com Redis. Porém, para aplicações focadas em baixa latência, deploy simplificado em container único e zero overhead de rede entre aplicação e banco (como o Kairos App e o ScriptVault), o SQLite moderno em modo WAL é surpreendentemente rápido e robusto."
                    },
                    {
                        type: "paragraph",
                        text: "Como o banco roda no mesmo processo da aplicação Node.js, não há round-trip TCP para cada query. Consultas complexas que montam matrizes de consistência anual de 365 dias executam em frações de milissegundo."
                    }
                ]
            },
            {
                id: "pragmas-essenciais-em-producao",
                title: "PRAGMAs essenciais para concorrência e segurança",
                blocks: [
                    {
                        type: "paragraph",
                        text: "A configuração padrão do SQLite prioriza compatibilidade histórica. Para usá-lo em produção com Node.js, é indispensável configurar os PRAGMAs logo na abertura da conexão:"
                    },
                    {
                        type: "code",
                        language: "sql",
                        filename: "sqlite-init.sql",
                        code: `PRAGMA journal_mode = WAL;          -- Leituras não bloqueiam escritas
PRAGMA synchronous = NORMAL;        -- Equilíbrio ideal entre durabilidade e I/O no WAL
PRAGMA foreign_keys = ON;           -- Garante integridade referencial
PRAGMA busy_timeout = 5000;         -- Aguarda até 5s em picos de escrita concorrente
PRAGMA temp_store = MEMORY;         -- Tabelas temporárias e índices em RAM
PRAGMA cache_size = -64000;         -- ~64MB de page cache dedicado`
                    },
                    {
                        type: "callout",
                        variant: "warning",
                        title: "Atenção com Volumes Docker",
                        text: "Em modo WAL, o SQLite cria os arquivos `-wal` e `-shm` ao lado do arquivo principal `.db`. Ao mapear volumes no Docker Compose, sempre mapeie o diretório de dados inteiro (ex: `/app/data`), e nunca apenas o arquivo isolado."
                    }
                ]
            },
            {
                id: "optimistic-ui-no-front-end",
                title: "Combinando baixa latência no Back-end com Optimistic UI no Front-end",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Em um PWA de uso diário no celular, qualquer spinner de carregamento ao marcar um hábito ou concluir uma tarefa quebra a sensação de app nativo. Atualizando o estado local imediatamente no React e sincronizando em background com rollback automático em caso de erro, a interface responde em 0ms."
                    }
                ]
            }
        ] : [
            {
                id: "why-sqlite-on-the-server",
                title: "Why choose SQLite for dedicated full-stack apps?",
                blocks: [
                    {
                        type: "paragraph",
                        text: "In large multi-tenant enterprise platforms we rely on MySQL, PostgreSQL, or MongoDB paired with Redis. However, for applications focused on ultra-low latency, single-container Docker deployments, and zero network hop between app and database (like Kairos App and ScriptVault), modern SQLite in WAL mode is remarkably fast and resilient."
                    },
                    {
                        type: "paragraph",
                        text: "Because the database engine runs in-process with Node.js, there is zero TCP round-trip per query. Aggregating a full 365-day habit consistency heatmap executes in sub-millisecond time."
                    }
                ]
            },
            {
                id: "essential-production-pragmas",
                title: "Essential PRAGMAs for concurrency and durability",
                blocks: [
                    {
                        type: "paragraph",
                        text: "SQLite's out-of-the-box defaults prioritize legacy compatibility. To run it reliably in production with Node.js, configuring connection PRAGMAs at startup is mandatory:"
                    },
                    {
                        type: "code",
                        language: "sql",
                        filename: "sqlite-init.sql",
                        code: `PRAGMA journal_mode = WAL;          -- Readers do not block writers
PRAGMA synchronous = NORMAL;        -- Optimal durability/performance balance in WAL
PRAGMA foreign_keys = ON;           -- Enforce referential integrity
PRAGMA busy_timeout = 5000;         -- Wait up to 5s during concurrent write spikes
PRAGMA temp_store = MEMORY;         -- Keep temporary tables and indices in RAM
PRAGMA cache_size = -64000;         -- ~64MB dedicated page cache`
                    },
                    {
                        type: "callout",
                        variant: "warning",
                        title: "Docker Volume Gotcha",
                        text: "In WAL mode, SQLite creates `-wal` and `-shm` companion files next to the `.db` file. When mounting volumes in Docker Compose, always mount the entire `/app/data` directory rather than a single file."
                    }
                ]
            },
            {
                id: "optimistic-ui-on-the-frontend",
                title: "Pairing fast back-end queries with Optimistic UI",
                blocks: [
                    {
                        type: "paragraph",
                        text: "In a daily mobile PWA, showing a loading spinner every time a user checks off a habit breaks the native app feel. By mutating local React state immediately and syncing in the background with automatic rollback on failure, interactions feel instantaneous."
                    }
                ]
            }
        ]
    },
    {
        slug: "padroes-front-end-typescript-angular-corporativo",
        featured: false,
        category: "frontend",
        categoryLabel: blogTranslations[lang].categories.frontend,
        date: "2026-08-19",
        displayDate: lang === 'pt' ? "19 Ago, 2026" : "Aug 19, 2026",
        year: "2026",
        readingTime: 6,
        tags: ["TypeScript", "Angular", "Front-end", "Arquitetura", "Clean Code"],
        title: lang === 'pt'
            ? "Componentização e Tipagem Forte no Front-end em Sistemas Corporativos"
            : "Componentization and Strong Typing on the Front-end in Enterprise Systems",
        excerpt: lang === 'pt'
            ? "Estratégias práticas para evoluir telas complexas com TypeScript e Angular, mantendo previsibilidade de estado e facilidade de manutenção."
            : "Practical strategies for evolving complex enterprise screens with TypeScript and Angular while maintaining predictable state and long-term maintainability.",
        sections: lang === 'pt' ? [
            {
                id: "complexidade-de-formularios-e-regras",
                title: "Onde mora a complexidade no front-end corporativo",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Diferente de landing pages estáticas, aplicações corporativas lidam com formulários densos, permissões por perfil, tabelas dinâmicas, filtros combinados e estados que dependem de retornos assíncronos de múltiplos módulos."
                    },
                    {
                        type: "paragraph",
                        text: "Sem uma divisão clara entre componentes de apresentação (Dumb/Presentational Components) e camadas de orquestração de estado (Smart Components / Services), qualquer nova regra fiscal ou de negócio acaba espalhada em dezenas de condicionais no template."
                    }
                ]
            },
            {
                id: "contratos-tipados-e-adaptadores",
                title: "Isolando contratos da API com Adapters tipados",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Um padrão que reduz drasticamente bugs em manutenção é nunca acoplar os componentes visuais diretamente ao formato bruto retornado por endpoints legados. Criar uma camada fina de mapeamento (Adapter/Mapper) em TypeScript garante que a UI trabalhe sempre com modelos previsíveis e valores default seguros."
                    },
                    {
                        type: "code",
                        language: "typescript",
                        filename: "order-view.mapper.ts",
                        code: `export interface OrderRawDto {
  num_ped?: string | null;
  vlr_tot?: number | string | null;
  sit_int_erp?: 'P' | 'S' | 'E' | null;
}

export interface OrderViewModel {
  orderNumber: string;
  totalFormatted: string;
  syncStatus: 'pending' | 'synced' | 'error';
  canRetrySync: boolean;
}

export function toOrderViewModel(dto: OrderRawDto): OrderViewModel {
  const statusMap = { P: 'pending', S: 'synced', E: 'error' } as const;
  const syncStatus = dto.sit_int_erp ? statusMap[dto.sit_int_erp] : 'pending';

  return {
    orderNumber: dto.num_ped?.trim() || '—',
    totalFormatted: Number(dto.vlr_tot ?? 0).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }),
    syncStatus,
    canRetrySync: syncStatus === 'error',
  };
}`
                    }
                ]
            }
        ] : [
            {
                id: "enterprise-frontend-complexity",
                title: "Where complexity lives in enterprise front-end apps",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Unlike static marketing pages, enterprise applications deal with dense multi-step forms, role-based permissions, dynamic data grids, compound filters, and UI states driven by asynchronous responses across multiple modules."
                    },
                    {
                        type: "paragraph",
                        text: "Without a clean boundary between presentational components and state orchestration services, every new business rule ends up scattered across dozens of template conditionals."
                    }
                ]
            },
            {
                id: "typed-contracts-and-adapters",
                title: "Decoupling API payloads with typed ViewModel Mappers",
                blocks: [
                    {
                        type: "paragraph",
                        text: "One pattern that drastically reduces regression bugs is never binding UI components directly to raw legacy endpoint payloads. Introducing a thin TypeScript mapper layer guarantees the UI always consumes predictable models with safe defaults."
                    },
                    {
                        type: "code",
                        language: "typescript",
                        filename: "order-view.mapper.ts",
                        code: `export interface OrderRawDto {
  num_ped?: string | null;
  vlr_tot?: number | string | null;
  sit_int_erp?: 'P' | 'S' | 'E' | null;
}

export interface OrderViewModel {
  orderNumber: string;
  totalFormatted: string;
  syncStatus: 'pending' | 'synced' | 'error';
  canRetrySync: boolean;
}

export function toOrderViewModel(dto: OrderRawDto): OrderViewModel {
  const statusMap = { P: 'pending', S: 'synced', E: 'error' } as const;
  const syncStatus = dto.sit_int_erp ? statusMap[dto.sit_int_erp] : 'pending';

  return {
    orderNumber: dto.num_ped?.trim() || '—',
    totalFormatted: Number(dto.vlr_tot ?? 0).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    }),
    syncStatus,
    canRetrySync: syncStatus === 'error',
  };
}`
                    }
                ]
            }
        ]
    }
];
