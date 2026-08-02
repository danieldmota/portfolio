"use client";

import Image from "next/image";
import type { KeyboardEvent } from "react";
import { useRef, useState } from "react";

type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: readonly string[];
  href?: string;
  linkLabel?: string;
  status: string;
};

const projects: readonly Project[] = [
  {
    id: "psicologia",
    title: "Psicóloga Jucilene",
    category: "Website institucional",
    image: "/images/capa-psicologa.png",
    description:
      "Página institucional moderna criada para tornar a busca por atendimento psicológico mais clara, acolhedora e organizada para novos clientes.",
    technologies: ["React", "JavaScript"],
    href: "https://site-psicologa-ju.vercel.app",
    linkLabel: "Acessar projeto",
    status: "Publicado",
  },
  {
    id: "alfatech",
    title: "AlfaTech",
    category: "Landing page",
    image: "/images/mockup-notebook-alfatech.png",
    description:
      "Landing page para uma empresa fictícia de hospedagem, desenvolvida durante meus estudos de front-end com foco em composição visual e layout profissional.",
    technologies: ["HTML", "CSS"],
    href: "https://github.com/danieldmota/site-hospedagem",
    linkLabel: "Ver repositório",
    status: "Código disponível",
  },
] as const;

function getNextIndex(key: string, currentIndex: number) {
  if (key === "ArrowRight" || key === "ArrowDown") return (currentIndex + 1) % projects.length;
  if (key === "ArrowLeft" || key === "ArrowUp") return (currentIndex - 1 + projects.length) % projects.length;
  if (key === "Home") return 0;
  if (key === "End") return projects.length - 1;
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

export function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeProject = projects[activeIndex];

  function selectProject(index: number, moveFocus = false) {
    setActiveIndex(index);
    const selectedTab = tabRefs.current[index];
    if (moveFocus) selectedTab?.focus();
    centerTabInRail(selectedTab);
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const nextIndex = getNextIndex(event.key, index);
    if (nextIndex === null) return;
    event.preventDefault();
    selectProject(nextIndex, true);
  }

  return (
    <div className="project-showcase" data-reveal>
      <div className="project-showcase-topline">
        <p>Selecione um projeto para explorar</p>
        <span aria-hidden="true">
          {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      <article
        key={activeProject.id}
        id="project-showcase-panel"
        className="project-showcase-stage"
        role="tabpanel"
        aria-labelledby={`project-tab-${activeProject.id}`}
      >
        <div className="project-showcase-image">
          <Image
            src={activeProject.image}
            alt={`Apresentação visual do projeto ${activeProject.title}`}
            fill
            sizes="(max-width: 790px) 90vw, 650px"
            quality={90}
          />
          <span aria-hidden="true">{String(activeIndex + 1).padStart(2, "0")}</span>
        </div>

        <div className="project-showcase-content">
          <div className="project-showcase-heading">
            <span>
              <i className="fa-solid fa-layer-group" aria-hidden="true" /> {activeProject.category}
            </span>
            <h3>{activeProject.title}</h3>
            <p>{activeProject.description}</p>
          </div>

          <ul className="project-showcase-technologies" aria-label={`Tecnologias do projeto ${activeProject.title}`}>
            {activeProject.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>

          <div className="project-showcase-footer">
            <span className="project-showcase-status">
              <i className="fa-solid fa-circle" aria-hidden="true" /> {activeProject.status}
            </span>

            {activeProject.href ? (
              <a href={activeProject.href} target="_blank" rel="noreferrer">
                {activeProject.linkLabel ?? "Acessar projeto"}
                <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
              </a>
            ) : (
              <span className="project-showcase-unavailable">
                <i className="fa-regular fa-clock" aria-hidden="true" /> Link em breve
              </span>
            )}
          </div>
        </div>
      </article>

      <div className="project-showcase-tabs" role="tablist" aria-label="Projetos do portfólio">
        {projects.map((project, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={project.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={`project-tab-${project.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="project-showcase-panel"
              tabIndex={isActive ? 0 : -1}
              className={`project-showcase-tab${isActive ? " active" : ""}`}
              onClick={() => selectProject(index)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
            >
              <span className="project-showcase-tab-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="project-showcase-tab-copy">
                <strong>{project.title}</strong>
                <small>{project.category}</small>
              </span>
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
