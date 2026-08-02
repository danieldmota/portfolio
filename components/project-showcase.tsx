"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Project = {
  id: "psicologia" | "alfatech";
  title: string;
  technologiesLabel: string;
  technologies: readonly string[];
  image: string;
  video: string;
  summary: string;
  description: string;
  linksIntro: string;
  links: readonly { href: string; icon: string; label: string }[];
};

const projects: readonly Project[] = [
  {
    id: "psicologia",
    title: "Psicóloga Jucilene",
    technologiesLabel: "Html/Css/JS",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/mockup-site-psicologia.png",
    video: "/video/psicologa-ju.mp4",
    summary: "Este projeto foi desenvolvido utilizando as tecnologias HTML, CSS e JavaScript.",
    description:
      "Página institucional moderna desenvolvida para uma psicóloga. Este projeto foi desenvolvido para que os novos clientes dessa psicóloga possam ter uma melhor experiência quando forem buscar atendimentos psicológicos, para que tenham um direcionamento bem organizado.",
    linksIntro: "Para acessar este site clique no icone de Wi-fi:",
    links: [
      {
        href: "https://danieldmota.github.io/site-psicologa-ju/",
        icon: "fa-solid fa-wifi",
        label: "Acessar o site Psicóloga Jucilene",
      },
      {
        href: "https://github.com/danieldmota/site-psicologa-ju",
        icon: "fa-brands fa-github",
        label: "Acessar o repositório Psicóloga Jucilene",
      },
    ],
  },
  {
    id: "alfatech",
    title: "AlfaTech",
    technologiesLabel: "Html/Css",
    technologies: ["HTML", "CSS"],
    image: "/images/mockup-notebook-alfatech.png",
    video: "/video/alfatech.mp4",
    summary: "Este projeto foi desenvolvido utilizando as tecnologias HTML e CSS.",
    description:
      "Landing page moderna desenvolvida para uma empresa fictícia de hospedagem de sites. Este projeto foi criado no início dos meus estudos em front-end para praticar HTML e CSS puro, com foco em layout profissional.",
    linksIntro: "Clique para acessar o repositório deste projeto:",
    links: [
      {
        href: "https://github.com/danieldmota/site-hospedagem",
        icon: "fa-brands fa-github",
        label: "Acessar o repositório AlfaTech",
      },
    ],
  },
] as const;

export function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const activeDialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  function openProject(project: Project, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setActiveProject(project);
  }

  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
        return;
      }

      if (event.key !== "Tab") return;

      const activeDialog =
        activeDialogRef.current ?? document.querySelector<HTMLElement>(".popup-fundo.ativo .container-projeto");
      const focusableElements = activeDialog?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], video[controls], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.classList.add("modal-open");
    const focusTimer = window.setTimeout(() => {
      document.querySelector<HTMLButtonElement>(".popup-fundo.ativo .btn-fechar-popup")?.focus();
    }, 100);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [activeProject]);

  return (
    <>
      <div className="project-container">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            className="project-box"
            data-category="HTML/CSS"
            data-reveal
            aria-haspopup="dialog"
            onClick={(event) => openProject(project, event.currentTarget)}
          >
            <div className="project-box-img">
              <Image
                src={project.image}
                alt={`Mockup do projeto ${project.title}`}
                fill
                sizes="(max-width: 1170px) 90vw, 420px"
              />
            </div>
            <div className="project-box-text-container">
              <div className="project-box-text">
                <strong>{project.title}</strong>
                <span>{project.technologiesLabel}</span>
              </div>
              <div className="project-box-btn" aria-hidden="true">
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {projects.map((project) => {
        const isActive = activeProject?.id === project.id;

        return (
          <div
            key={`${project.id}-dialog`}
            className={`popup-fundo${isActive ? " ativo" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-hidden={!isActive}
            aria-labelledby={`${project.id}-title`}
            inert={!isActive}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setActiveProject(null);
            }}
          >
            <div className="container-projeto" ref={isActive ? activeDialogRef : undefined}>
              <button
                type="button"
                className="btn-fechar-popup"
                onClick={() => setActiveProject(null)}
                aria-label={`Fechar detalhes do projeto ${project.title}`}
              >
                <i className="fa-solid fa-xmark" aria-hidden="true" />
              </button>

              <div className="projeto-video">
                <div className="projeto-header">
                  <h1 id={`${project.id}-title`}>
                    {project.id === "alfatech" ? "AlfaTech Hospedagem" : project.title}
                  </h1>
                  <p>{project.summary}</p>
                </div>
                <video controls preload="metadata">
                  <source src={project.video} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>

              <div className="projeto-info">
                <div className="projeto-content">
                  <h2>Detalhes do Projeto</h2>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                  <p>{project.linksIntro}</p>
                  <div className="profiles-social">
                    {project.links.map((link) => (
                      <div className="profile-social-container" key={link.href}>
                        <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                          <i className={link.icon} aria-hidden="true" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="projeto-footer">
                  <p>© 2026 Daniel. Todos os direitos reservados.</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
