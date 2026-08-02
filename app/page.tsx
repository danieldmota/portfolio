import Image from "next/image";

import { ExpandableEntry } from "@/components/expandable-entry";
import { Navigation } from "@/components/navigation";
import { ProjectShowcase } from "@/components/project-showcase";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SkillsExplorer } from "@/components/skills-explorer";
import { ThemeToggle } from "@/components/theme-toggle";
import { TypingRole } from "@/components/typing-role";

const socialLinks = [
  { href: "https://www.instagram.com/danield.mota", icon: "fa-brands fa-instagram", label: "Instagram" },
  { href: "https://www.linkedin.com/in/danieldmota", icon: "fa-brands fa-linkedin", label: "LinkedIn" },
  { href: "https://github.com/danieldmota", icon: "fa-brands fa-github", label: "GitHub" },
  { href: "https://wa.me/5567992240987", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
] as const;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <main id="main-content" className="main-container" tabIndex={-1}>
        <aside className="menu-profile" aria-label="Perfil e navegação">
          <header>
            <nav aria-label="Navegação principal">
              <ThemeToggle />
              <Navigation />
            </nav>
          </header>

          <div className="profile-container">
            <div className="user-profile bg-gradient">
              <div className="user-profile-container">
                <div className="user-profile-img">
                  <Image
                    src="/images/foto-daniel.png"
                    alt="Daniel Mota"
                    width={320}
                    height={280}
                    sizes="(max-width: 1170px) 80vw, 320px"
                    priority
                  />
                </div>
                <div className="user-profile-text">
                  <span>Desenvolvedor Web</span>
                  <h1>Daniel Mota</h1>
                  <div className="profile-social-container">
                    {socialLinks.map((link) => (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Daniel Mota no ${link.label}`}
                        key={link.href}
                      >
                        <i className={link.icon} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="user-profile-btns">
                <a href="/cv/cv-daniel.pdf" download target="_blank" rel="noreferrer">
                  Baixar CV
                </a>
                <a href="https://wa.me/5567992240987" target="_blank" rel="noreferrer">
                  Contato
                </a>
              </div>
            </div>
          </div>
        </aside>

        <div className="all-content">
          <section id="about-me" className="section-container">
            <h3>
              Olá, Sou <TypingRole />
            </h3>
            <h1>
              Desenvolvedor de <span>Software</span>
            </h1>
            <p>
              Tenho 19 anos, sou apaixonado em tudo que envolva tecnologia. Estudo desenvolvimento web desde os 16
              anos de idade e atualmente estou focado em me tornar um desenvolvedor Full Stack de alto nível. Adoro
              desafios e estou sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades. Sou
              dedicado e comprometido com meus projetos, com foco em criar interfaces funcionais e agradáveis, unindo
              design moderno com um backend eficiente. Gosto de aprender, testar ideias e transformar projetos em
              resultados reais. Estou sempre buscando evoluir e contribuir com trabalhos que façam a diferença.
            </p>
            <div className="project-container-about" />
          </section>

          <section id="skills" className="section-container">
            <div className="section-heading">
              <span>Habilidades técnicas</span>
            </div>
            <SkillsExplorer />
          </section>

          <section id="projects" className="section-container">
            <div className="section-heading">
              <span>
                <i className="fa-solid fa-briefcase" aria-hidden="true" /> Meus projetos
              </span>
            </div>
            <ProjectShowcase />
          </section>

          <section id="edu-work" className="section-container">
            <div className="section-heading">
              <span>
                <i className="fa-regular fa-file-lines" aria-hidden="true" /> Resumo
              </span>
            </div>

            <div className="edu-work-container">
              <div className="edu-container">
                <span className="edu-work-label">
                  <i className="fa-solid fa-building-columns" aria-hidden="true" /> Formação
                </span>

                <div className="edu-work-box-container">
                  <ExpandableEntry expandable={false}>
                    <span className="edu-work-year">2022 - 2024</span>
                    <strong>Ensino Médio</strong>
                    <span className="edu-work-location">EE Coração de Maria, CG-MS</span>
                  </ExpandableEntry>

                  <ExpandableEntry>
                    <span className="edu-work-year">03/2024 - 01/2026</span>
                    <strong>Técnico em desenvolvimento de sistemas</strong>
                    <span className="edu-work-location">Senac Hub Academy</span>
                    <p>
                      No Senac, participei do desenvolvimento de um sistema web completo no Projeto Integrador, atuando
                      em equipe e aplicando a metodologia ágil SCRUM em todas as etapas do processo. Durante o projeto,
                      realizamos a documentação completa (levantamento de requisitos e criação de diversos diagramas),
                      prototipagem no Figma, modelagem de banco de dados em SQL e o desenvolvimento do front-end e
                      back-end em PHP, seguindo o padrão MVC sem o uso de frameworks. Além disso, tive aulas práticas de
                      Symfony, nas quais desenvolvi um projeto mobile integrado ao Flutter, aprofundando meus
                      conhecimentos sobre integração entre sistemas e arquitetura de software. Essa experiência me
                      proporcionou uma base sólida em desenvolvimento web, domínio de boas práticas de projeto e
                      habilidades de colaboração em equipe, preparando-me para atuar de forma eficiente em ambientes
                      reais de desenvolvimento.
                    </p>
                  </ExpandableEntry>

                  <ExpandableEntry>
                    <span className="edu-work-year">02/2025 - 12/2028</span>
                    <strong>Engenharia de Software</strong>
                    <span className="edu-work-location">Unigran Capital</span>
                    <p>
                      Durante o curso de Engenharia de Software, meu objetivo é desenvolver a capacidade de planejar,
                      projetar, implementar e manter sistemas de software com qualidade, eficiência e segurança. Busco
                      compreender todo o ciclo de vida de um software — desde a análise de requisitos até a manutenção —
                      aplicando metodologias e boas práticas que garantam confiabilidade, escalabilidade e facilidade de
                      manutenção nos projetos. A formação tem como foco preparar profissionais para criar soluções
                      tecnológicas que atendam às necessidades reais dos usuários e das empresas, unindo fundamentos
                      teóricos com aplicação prática no desenvolvimento de sistemas modernos.
                    </p>
                  </ExpandableEntry>
                </div>
              </div>

              <div className="work-container">
                <span className="edu-work-label">
                  <i className="fa-solid fa-briefcase" aria-hidden="true" /> Experiência
                </span>

                <div className="edu-work-box-container">
                  <ExpandableEntry reveal>
                    <span className="edu-work-year">10/2025 - 08/2026</span>
                    <strong>Dev full stack</strong>
                    <span className="edu-work-location">Projeto para Aquidauna - Sistema de Turismo</span>
                    <p>
                      Estou desenvolvendo em equipe um sistema de turismo voltado para visitantes da cidade de
                      Aquidauana, projeto que está em andamento à ser entregue no prazo para a prefeitura de Aquidauna. O
                      diferencial do sistema é um gerador de roteiros inteligentes, pensado para sugerir itinerários
                      personalizados conforme interesses do turista. O projeto segue os padrões e boas práticas de
                      desenvolvimento de software, passando por etapas como levantamento de requisitos, modelagem do
                      banco de dados, diagramas de casos de uso e de classes, além da prototipagem no Figma. A organização
                      do trabalho é feita com a metodologia ágil SCRUM, incluindo reuniões e sprints. No desenvolvimento,
                      estão sendo utilizadas tecnologias como Next.js, PostgreSQL e Prisma ORM, com foco na integração
                      entre frontend e backend, regras de negócio e estrutura escalável.
                    </p>
                  </ExpandableEntry>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <ScrollReveal />
    </>
  );
}
