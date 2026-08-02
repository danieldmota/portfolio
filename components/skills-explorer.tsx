"use client";

import type { CSSProperties, KeyboardEvent } from "react";
import { useRef, useState } from "react";

type SkillGroup = {
  id: string;
  label: string;
  description: string;
  icon: string;
  collections: readonly {
    id: string;
    label: string;
    skills: readonly { label: string; icon?: string }[];
  }[];
};

const skillGroups: readonly SkillGroup[] = [
  {
    id: "languages",
    label: "Linguagens",
    description: "A base técnica que utilizo para construir interfaces, APIs, automações e soluções orientadas a dados.",
    icon: "fa-solid fa-code",
    collections: [
      {
        id: "frequent",
        label: "Uso frequente",
        skills: [
          { label: "JavaScript", icon: "fa-brands fa-js" },
          { label: "TypeScript", icon: "fa-solid fa-code" },
          { label: "SQL", icon: "fa-solid fa-database" },
          { label: "HTML5", icon: "fa-brands fa-html5" },
          { label: "CSS3", icon: "fa-brands fa-css3-alt" },
        ],
      },
      {
        id: "knowledge",
        label: "Também conheço",
        skills: [
          { label: "PHP", icon: "fa-brands fa-php" },
          { label: "Python — automações e scripts", icon: "fa-brands fa-python" }],
      },
    ],
  },
  {
    id: "frontend",
    label: "Front-end",
    description: "Interfaces responsivas e componentizadas, pensadas para operações claras e experiências consistentes.",
    icon: "fa-solid fa-display",
    collections: [
      {
        id: "stack",
        label: "Stack",
        skills: [
          { label: "React", icon: "fa-brands fa-react" },
          { label: "Next.js", icon: "fa-solid fa-n" },
          { label: "Tailwind CSS", icon: "fa-solid fa-wind" },
          { label: "shadcn/ui", icon: "fa-solid fa-cubes-stacked" },
          { label: "TanStack Query", icon: "fa-solid fa-arrows-rotate" },
        ],
      },
      {
        id: "practice",
        label: "Experiência prática",
        skills: [
          { label: "Componentização" },
          { label: "Consumo de APIs REST" },
          { label: "Interfaces administrativas" },
          { label: "Responsividade" },
          { label: "Roteamento com HashRouter" },
        ],
      },
    ],
  },
  {
    id: "backend",
    label: "Back-end",
    description: "Meu foco principal: APIs, integrações e regras de negócio organizadas para evoluir com segurança.",
    icon: "fa-solid fa-server",
    collections: [
      {
        id: "ecosystem",
        label: "Ecossistema",
        skills: [
          { label: "Node.js", icon: "fa-brands fa-node-js" },
          { label: "Express", icon: "fa-solid fa-bolt" },
          { label: "PHP puro", icon: "fa-brands fa-php" },
          { label: "Symfony — conhecimento", icon: "fa-brands fa-symfony" },
          { label: "NestJS — em evolução", icon: "fa-solid fa-cubes" },
        ],
      },
      {
        id: "delivery",
        label: "Capacidades",
        skills: [
          { label: "APIs REST" },
          { label: "CRUDs completos" },
          { label: "Autenticação" },
          { label: "Permissões por perfil" },
          { label: "Integração entre sistemas" },
          { label: "Validações" },
          { label: "Regras de negócio complexas" },
        ],
      },
      {
        id: "architecture",
        label: "Arquitetura",
        skills: [
          { label: "MVC" },
          { label: "Services" },
          { label: "Organização por camadas" },
        ],
      },
    ],
  },
  {
    id: "data",
    label: "Dados",
    description: "Modelagem e persistência com bancos relacionais, consultas SQL e ORMs modernos.",
    icon: "fa-solid fa-database",
    collections: [
      {
        id: "databases",
        label: "Bancos & ORMs",
        skills: [
          { label: "PostgreSQL", icon: "fa-solid fa-database" },
          { label: "MySQL", icon: "fa-solid fa-database" },
          { label: "Prisma ORM", icon: "fa-solid fa-diagram-project" },
          { label: "Drizzle ORM", icon: "fa-solid fa-layer-group" },
        ],
      },
      {
        id: "modeling",
        label: "Práticas",
        skills: [
          { label: "Modelagem" },
          { label: "Relacionamentos" },
          { label: "Foreign Keys" },
          { label: "Triggers" },
          { label: "Constraints" },
          { label: "Consultas SQL" },
          { label: "Migrações" },
          { label: "Normalização" },
        ],
      },
    ],
  },
  {
    id: "automation",
    label: "Automação & APIs",
    description: "Integrações que conectam canais, dados, inteligência artificial e operações de negócio.",
    icon: "fa-solid fa-diagram-project",
    collections: [
      {
        id: "integrations",
        label: "Integrações",
        skills: [
          { label: "WhatsApp API Oficial", icon: "fa-brands fa-whatsapp" },
          { label: "Chatwoot", icon: "fa-solid fa-comments" },
          { label: "n8n", icon: "fa-solid fa-share-nodes" },
          { label: "Google Sheets", icon: "fa-solid fa-table-cells" },
          { label: "Resend", icon: "fa-solid fa-envelope" },
          { label: "Webhooks", icon: "fa-solid fa-link" },
          { label: "ERPs e sistemas internos" },
        ],
      },
      {
        id: "flows",
        label: "Fluxos",
        skills: [
          { label: "ETL" },
          { label: "Agentes de IA", icon: "fa-solid fa-robot" },
          { label: "Atendimento automatizado" },
          { label: "Processamento de dados" },
          { label: "Disparos automáticos" },
          { label: "CRON" },
          { label: "APIs HTTP" },
        ],
      },
    ],
  },
  {
    id: "engineering",
    label: "Engenharia",
    description: "Ferramentas e práticas que sustentam o desenvolvimento desde a descoberta até a produção.",
    icon: "fa-solid fa-compass-drafting",
    collections: [
      {
        id: "operations",
        label: "Entrega",
        skills: [
          { label: "Docker", icon: "fa-brands fa-docker" },
          { label: "Vercel", icon: "fa-solid fa-cloud-arrow-up" },
          { label: "Hostinger VPS", icon: "fa-solid fa-server" },
          { label: "Deploy de aplicações" },
          { label: "Variáveis de ambiente" },
          { label: "Configuração de domínios" },
        ],
      },
      {
        id: "tooling",
        label: "Ferramentas",
        skills: [
          { label: "Git", icon: "fa-brands fa-git-alt" },
          { label: "GitHub", icon: "fa-brands fa-github" },
          { label: "VS Code", icon: "fa-solid fa-code" },
          { label: "Postman", icon: "fa-solid fa-paper-plane" },
          { label: "Figma", icon: "fa-brands fa-figma" },
          { label: "Neon PostgreSQL", icon: "fa-solid fa-database" },
        ],
      },
      {
        id: "process",
        label: "Processo",
        skills: [
          { label: "SCRUM" },
          { label: "Levantamento de requisitos" },
          { label: "Diagramas" },
          { label: "Versionamento" },
        ],
      },
      {
        id: "ai-tools",
        label: "IA no desenvolvimento",
        skills: [
          { label: "Claude Code", icon: "fa-solid fa-terminal" },
          { label: "Codex", icon: "fa-solid fa-code" },
          { label: "Gemini", icon: "fa-solid fa-wand-magic-sparkles" },
          { label: "Skills personalizadas", icon: "fa-solid fa-puzzle-piece" },
          { label: "MCPs", icon: "fa-solid fa-plug" },
          { label: "Planejamento assistido por IA", icon: "fa-solid fa-list-check" },
          { label: "Revisão de código com IA", icon: "fa-solid fa-magnifying-glass" },
        ],
      },
    ],
  },
] as const;

function getNextIndex(key: string, currentIndex: number, itemCount: number) {
  if (key === "ArrowRight" || key === "ArrowDown") return (currentIndex + 1) % itemCount;
  if (key === "ArrowLeft" || key === "ArrowUp") return (currentIndex - 1 + itemCount) % itemCount;
  if (key === "Home") return 0;
  if (key === "End") return itemCount - 1;
  return null;
}

function centerTabInRail(tab: HTMLButtonElement | null) {
  const rail = tab?.parentElement;
  if (!tab || !rail || rail.scrollWidth <= rail.clientWidth) return;

  const targetLeft = tab.offsetLeft - (rail.clientWidth - tab.offsetWidth) / 2;
  rail.scrollTo({
    left: Math.max(0, targetLeft),
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
  });
}

export function SkillsExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCollectionIndex, setActiveCollectionIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const collectionTabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeGroup = skillGroups[activeIndex];
  const activeCollection = activeGroup.collections[activeCollectionIndex] ?? activeGroup.collections[0];

  function selectGroup(index: number, moveFocus = false) {
    setActiveIndex(index);
    setActiveCollectionIndex(0);
    const selectedTab = tabRefs.current[index];
    if (moveFocus) selectedTab?.focus();
    centerTabInRail(selectedTab);
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const nextIndex = getNextIndex(event.key, index, skillGroups.length);
    if (nextIndex === null) return;
    event.preventDefault();
    selectGroup(nextIndex, true);
  }

  function selectCollection(index: number, moveFocus = false) {
    setActiveCollectionIndex(index);
    const selectedTab = collectionTabRefs.current[index];
    if (moveFocus) selectedTab?.focus();
    centerTabInRail(selectedTab);
  }

  function handleCollectionKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const nextIndex = getNextIndex(event.key, index, activeGroup.collections.length);
    if (nextIndex === null) return;
    event.preventDefault();
    selectCollection(nextIndex, true);
  }

  return (
    <div className="skills-explorer" data-reveal>
      <div className="skills-explorer-intro">
        <p>Selecione uma área para explorar</p>
        <span aria-hidden="true">{String(activeIndex + 1).padStart(2, "0")} / {String(skillGroups.length).padStart(2, "0")}</span>
      </div>

      <div className="skills-explorer-layout">
        <div className="skills-explorer-tabs" role="tablist" aria-label="Áreas de habilidades técnicas">
          {skillGroups.map((group, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={group.id}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                id={`skill-tab-${group.id}`}
                type="button"
                className={`skills-explorer-tab${isActive ? " active" : ""}`}
                role="tab"
                aria-label={group.label}
                aria-selected={isActive}
                aria-controls={`skill-panel-${group.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectGroup(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >
                <span className="skills-explorer-tab-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <i className={group.icon} aria-hidden="true" />
                <span className="skills-explorer-tab-label">{group.label}</span>
              </button>
            );
          })}
        </div>

        <div
          key={activeGroup.id}
          id={`skill-panel-${activeGroup.id}`}
          className="skills-explorer-panel"
          role="tabpanel"
          aria-labelledby={`skill-tab-${activeGroup.id}`}
        >
          <div className="skills-explorer-panel-heading">
            <span>
              <i className={activeGroup.icon} aria-hidden="true" /> Área selecionada
            </span>
            <h3>{activeGroup.label}</h3>
            <p>{activeGroup.description}</p>
          </div>

          <div
            className="skills-explorer-collections"
            role="tablist"
            aria-label={`Grupos de habilidades em ${activeGroup.label}`}
          >
            {activeGroup.collections.map((collection, index) => {
              const isActive = index === activeCollectionIndex;

              return (
                <button
                  key={collection.id}
                  ref={(element) => {
                    collectionTabRefs.current[index] = element;
                  }}
                  id={`skill-collection-tab-${activeGroup.id}-${collection.id}`}
                  type="button"
                  className={`skills-explorer-collection${isActive ? " active" : ""}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`skill-collection-panel-${activeGroup.id}-${collection.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => selectCollection(index)}
                  onKeyDown={(event) => handleCollectionKeyDown(event, index)}
                >
                  {collection.label}
                </button>
              );
            })}
          </div>

          <div
            key={`${activeGroup.id}-${activeCollection.id}`}
            id={`skill-collection-panel-${activeGroup.id}-${activeCollection.id}`}
            className="skills-explorer-list-stage"
            role="tabpanel"
            aria-labelledby={`skill-collection-tab-${activeGroup.id}-${activeCollection.id}`}
          >
            <ul className="skills-explorer-list" aria-label={`${activeCollection.label} em ${activeGroup.label}`}>
              {activeCollection.skills.map((skill, index) => (
                <li
                  key={skill.label}
                  style={{ "--skill-index": index } as CSSProperties}
                >
                  {skill.icon ? (
                    <i className={skill.icon} aria-hidden="true" />
                  ) : (
                    <span className="skills-explorer-marker" aria-hidden="true" />
                  )}
                  <span>{skill.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
