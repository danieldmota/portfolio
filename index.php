<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólio Daniel</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/projeto-card.css">
    <link rel="stylesheet" href="css/popup.css">
    <!-- fav-icon -->
    <link rel="shortcut icon" href="images/fav-icon.png">
    <!-- font-poppins -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Shadows+Into+Light&display=swap"
        rel="stylesheet">
    <!-- font-awesome para icones -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- aos para animação -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</head>

<body>
    <div class="main-container">
        <!-- Menu e perfil -->
        <div class="menu-profile">
            <header>
                <nav>
                    <!-- botao modo dark -->
                    <button class="dark-light-btn bg-gradient">
                        <i class="fa-solid fa-sun"></i>
                    </button>
                    <!-- menu -->
                    <ul>
                        <!-- sobre -->
                        <li><a href="#about-me" data-label="Sobre" class="active">
                                <i class="fa-solid fa-address-book"></i>
                            </a></li>
                        <!-- habilidades -->
                        <li><a href="#skills" data-label="Habilidades">
                                <i class="fa-solid fa-layer-group"></i>
                            </a></li>
                        <!-- projetos -->
                        <li><a href="#projects" data-label="Projetos">
                                <i class="fa-solid fa-briefcase"></i>
                            </a></li>
                        <!-- formação e experiência -->
                        <li><a href="#edu-work" data-label="Formação">
                                <i class="fa-solid fa-file-lines"></i>
                            </a></li>
                    </ul>
                </nav>
            </header>
            <!-- perfil -->
            <div class="profile-container">
                <div class="user-profile bg-gradient">
                    <!-- container do perfil -->
                    <div class="user-profile-container">
                        <div class="user-profile-img">
                            <img src="images/foto-daniel.png" alt="Profile">
                        </div>
                        <div class="user-profile-text">
                            <span>Desenvolvedor Web</span>
                            <h1>Daniel Mota</h1>
                            <!-- redes sociais -->
                            <div class="profile-social-container">
                                <a href="https://www.instagram.com/danield.mota" target="_blank"><i
                                        class="fa-brands fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/danieldmota" target="_blank"><i
                                        class="fa-brands fa-linkedin"></i></a>
                                <a href="https://github.com/danieldmota" target="_blank"><i
                                        class="fa-brands fa-github"></i></a>
                                <a href="https://wa.me/5567992240987" target="_blank"><i
                                        class="fa-brands fa-whatsapp"></i></a>
                            </div>

                        </div>
                    </div>
                    <div class="user-profile-btns">
                        <a href="cv/cv-daniel.pdf" download target="_blank">Baixar CV</a>
                        <a href="https://wa.me/5567992240987" target="_blank">Contato</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Conteúdo principal -->
        <div class="all-content">
            <!-- Sobre -->
            <section id="about-me" class="section-container">
                <h3>Olá, Sou <span id="role">Daniel</span></h3>
                <h1>Desenvolvedor de <span>Software</span></h1>
                <p>Tenho 18 anos, sou apaixonado em tudo que envolva tecnologia. Estudo desenvolvimento web
                    desde os 16 anos de idade e atualmente estou focado em me tornar um desenvolvedor Full Stack de alto
                    nível. Adoro desafios e estou sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades.
                    Sou dedicado e comprometido com meus projetos,
                    com foco em criar interfaces funcionais e agradáveis, unindo design moderno com um backend
                    eficiente. Gosto de aprender, testar ideias e transformar projetos em resultados reais.
                    Estou sempre buscando evoluir e contribuir com trabalhos que façam a diferença.</p>
                <div class="project-container-about">
                    <!-- box -->
                    <!-- <div class="project-container-box">
                        <span>3</span>
                        <strong>Projetos reais desenvolvidos</strong>
                    </div> -->
                    <!-- box -->
                    <!-- <div class="project-container-box">
                        <span>2</span>
                        <strong>Anos de estudo e prática</strong>
                    </div> -->
                    <!-- box -->
                     <!-- <div class="project-container-box">
                        <span>3</span>
                        <strong>Meses de experiência profissional</strong>
                    </div> -->
                </div>
            </section>

            <!-- Habilidades -->
            <section id="skills" class="section-container">
                <div class="section-heading">
                    <span>Habilidades técnicas</span>
                    <h3>Tecnologias</h3>
                </div>

                <div class="skills-box-container">
                    <!-- html -->
                    <div class="skill-box bg-gradient" data-aos="fade-up">
                        <div class="skill-box-content">
                            <i class="fa-brands fa-js"></i>
                            <span>JavaScript/React/Next.js/Nest.js</span>
                        </div>
                        <!-- <div class="skill-box-bar">
                            <span style="width: 90%;"></span>
                        </div>
                        <span class="skill-box-percentage">90%</span> -->
                    </div>
                    <!-- Node -->
                    <div class="skill-box bg-gradient" data-aos="fade-up">
                        <div class="skill-box-content">
                            <i class="fa-brands fa-node-js"></i>
                            <span>Node</span>
                        </div>
                        <!-- <div class="skill-box-bar">
                            <span style="width: 40%;"></span>
                        </div>
                        <span class="skill-box-percentage">40%</span> -->
                    </div>
                    <!-- css -->
                    <div class="skill-box bg-gradient" data-aos="fade-up">
                        <div class="skill-box-content">
                            <i class="fa-brands fa-php"></i>
                            <span>PHP</span>
                        </div>
                        <!-- <div class="skill-box-bar">
                            <span style="width: 80%;"></span>
                        </div>
                        <span class="skill-box-percentage">80%</span> -->
                    </div>
                    <!-- JavaScript -->
                    <div class="skill-box bg-gradient" data-aos="fade-up">
                        <div class="skill-box-content">
                            <i class="fa-brands fa-python"></i>
                            <span>Python</span>
                        </div>
                        <!-- <div class="skill-box-bar">
                            <span style="width: 60%;"></span>
                        </div>
                        <span class="skill-box-percentage">60%</span> -->
                    </div>
                    <!-- SQL -->
                    <div class="skill-box bg-gradient" data-aos="fade-up">
                        <div class="skill-box-content">
                            <i class="fa-solid fa-database"></i> <span>MySQL/Postgre</span>
                        </div>
                        <!-- <div class="skill-box-bar">
                            <span style="width: 70%;"></span>
                        </div>
                        <span class="skill-box-percentage">70%</span> -->
                    </div>
                    <!-- python -->
                    <div class="skill-box bg-gradient" data-aos="fade-up">
                        <div class="skill-box-content">
                            <i class="fa-solid fa-database"></i>
                            <span>Prisma ORM/Drizzle ORM</span>
                        </div>
                        <!-- <div class="skill-box-bar">
                            <span style="width: 70%;"></span>
                        </div>
                        <span class="skill-box-percentage">70%</span> -->
                    </div>
                    <!-- Flutter -->
                    <div class="skill-box bg-gradient" data-aos="fade-up">
                        <div class="skill-box-content">
                            <i class="fa-brands fa-flutter"></i>
                            <span>Flutter</span>
                        </div>
                        <!-- <div class="skill-box-bar">
                            <span style="width: 40%;"></span>
                        </div>
                        <span class="skill-box-percentage">40%</span> -->
                    </div>
                </div>
            </section>

            <!-- Projetos -->
            <section id="projects" class="section-container">
                <div class="section-heading">
                    <span><i class="fa-solid fa-briefcase"></i> Meus projetos</span>
                    <!-- <h3>Busque projetos por categoria</h3> -->
                </div>

                <!-- filtro -->
                <!-- <ul class="project-list">
                    <li class="active" data-filter="all">All</li>
                    <li data-filter="ReactJs">ReactJs</li>
                    <li data-filter="HTML/CSS">HTML/CSS</li>
                    <li data-filter="Php">PHP</li>
                </ul> -->

                <!-- container -->
                <div class="project-container">
                    <button onclick="abrir_popup('container-projeto-2')" class="project-box" data-category="HTML/CSS" data-aos="fade-up">
                        <!-- Imagem -->
                        <div class="project-box-img">
                            <img src="images/mockup-site-psicologia.png" alt="projeto" />
                        </div>
                        <!-- Texto -->
                        <div class="project-box-text-container">
                            <!-- Detalhes -->
                            <div class="project-box-text">
                                <strong>Psicóloga Jucilene</strong>
                                <span>Html/Css/JS</span>
                            </div>
                            <!-- icone com link -->
                            <div class="project-box-btn">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </div>
                    </button>

                    <button onclick="abrir_popup('container-projeto-1')" class="project-box" data-category="HTML/CSS" data-aos="fade-up">
                        <!-- Imagem -->
                        <div class="project-box-img">
                            <img src="images/mockup-notebook-alfatech.png" alt="projeto" />
                        </div>
                        <!-- Texto -->
                        <div class="project-box-text-container">
                            <!-- Detalhes -->
                            <div class="project-box-text">
                                <strong>AlfaTech</strong>
                                <span>Html/Css</span>
                            </div>
                            <!-- icone com link -->
                            <div class="project-box-btn">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </div>
                    </button>
                </div>

            </section>

            <!-- Formação e Experiência -->
            <section id="edu-work" class="section-container">
                <div class="section-heading">
                    <span><i class="fa-regular fa-file-lines"></i> Resumo</span>
                   
                </div>

                <!-- container -->
                <div class="edu-work-container">
                    <!-- education -->
                    <div class="edu-container">
                        <span class="edu-work-label">
                            <i class="fa-solid fa-building-columns"></i>
                            Formação
                        </span>

                        <!-- box-container -->
                        <div class="edu-work-box-container">
                            <!-- box -->
                            <div class="edu-work-box">
                                <span class="edu-work-year">2022 - 2024</span>
                                <strong>Ensino Médio</strong>
                                <span class="edu-work-location">EE Coração de Maria, CG-MS</span>
                                <p>
                            </div>
                            <!-- box -->
                            <div class="edu-work-box">
                                <span class="edu-work-year">03/2024 - 01/2026</span>
                                <strong>Técnico em desenvolvimento de sistemas</strong>
                                <span class="edu-work-location">Senac Hub Academy</span>
                                <p>No Senac, participei do desenvolvimento de um sistema web completo no Projeto Integrador, atuando em equipe e aplicando a metodologia ágil SCRUM em todas as etapas do processo. Durante o projeto, realizamos a documentação completa (levantamento de requisitos e criação de diversos diagramas), prototipagem no Figma, modelagem de banco de dados em SQL e o desenvolvimento do front-end e back-end em PHP, seguindo o padrão MVC sem o uso de frameworks.
                                    Além disso, tive aulas práticas de Symfony, nas quais desenvolvi um projeto mobile integrado ao Flutter, aprofundando meus conhecimentos sobre integração entre sistemas e arquitetura de software.
                                    Essa experiência me proporcionou uma base sólida em desenvolvimento web, domínio de boas práticas de projeto e habilidades de colaboração em equipe, preparando-me para atuar de forma eficiente em ambientes reais de desenvolvimento.</p>
                            </div>
                            <!-- box -->
                            <div class="edu-work-box">
                                <span class="edu-work-year">02/2025 - 12/2028</span>
                                <strong>Engenharia de Software</strong>
                                <span class="edu-work-location">Unigran Capital</span>
                                <p>Durante o curso de Engenharia de Software, meu objetivo é desenvolver a capacidade de planejar, projetar, implementar e manter sistemas de software com qualidade, eficiência e segurança. Busco compreender todo o ciclo de vida de um software — desde a análise de requisitos até a manutenção — aplicando metodologias e boas práticas que garantam confiabilidade, escalabilidade e facilidade de manutenção nos projetos.
                                    A formação tem como foco preparar profissionais para criar soluções tecnológicas que atendam às necessidades reais dos usuários e das empresas, unindo fundamentos teóricos com aplicação prática no desenvolvimento de sistemas modernos.</p>
                            </div>
                        </div>
                    </div>
                    <!-- Work -->
                    <div class="work-container">
                        <span class="edu-work-label">
                            <i class="fa-solid fa-briefcase"></i>
                            Experiência
                        </span>

                        <div class="edu-work-box-container">
                            <!-- box -->
                            <div class="edu-work-box" data-aos="fade-up">
                                <span class="edu-work-year">10/2025 - 08/2026</span>
                                <strong>Dev full stack</strong>
                                <span class="edu-work-location">Projeto - Prefeitura de Aquidauna</span>
                                <p>Estou desenvolvendo em equipe um sistema de turismo voltado para visitantes da cidade de
                                    Aquidauana, projeto que está em andamento. O diferencial do sistema é um gerador de roteiros
                                    inteligentes, pensado para sugerir itinerários personalizados conforme interesses do turista.
                                    O projeto segue os padrões e boas práticas de desenvolvimento de software, passando por etapas
                                    como levantamento de requisitos, modelagem do banco de dados, diagramas de casos de uso e de
                                    classes, além da prototipagem no Figma. A organização do trabalho é feita com a metodologia ágil
                                    SCRUM, incluindo reuniões e sprints.
                                    No desenvolvimento, estão sendo utilizadas tecnologias como Next.js, PostgreSQL e Prisma ORM,
                                    com foco na integração entre frontend e backend, regras de negócio e estrutura escalável.
                                </p>
                            </div>
                            <!-- box -->
                            <!-- <div class="edu-work-box" data-aos="fade-up">
                                <span class="edu-work-year">2018 - 2022</span>
                                <strong>BS ins Software Engenrr</strong>
                                <span class="edu-work-location">Carson, USA</span>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi facere adipisci ipsa
                                    accusantium? Asperiores quo, culpa pariatur consectetur neque maxime dolorem fugiat
                                    error excepturi quas? Eaque dolor inventore numquam obcaecati!</p>
                            </div> -->
                            <!-- box -->
                            <!-- <div class="edu-work-box" data-aos="fade-up">
                                <span class="edu-work-year">2018 - 2022</span>
                                <strong>BS ins Software Engenrr</strong>
                                <span class="edu-work-location">Carson, USA</span>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi facere adipisci ipsa
                                    accusantium? Asperiores quo, culpa pariatur consectetur neque maxime dolorem fugiat
                                    error excepturi quas? Eaque dolor inventore numquam obcaecati!</p>
                            </div> -->
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <!-- Swiper JS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <!-- aos -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    <script>
        <?php include 'js/main.js'; ?>
        AOS.init();
    </script>
</body>

</html>

<?php
require_once './projetos/projeto-alfatech.php';
require_once './projetos/projeto-psicologia.php';
?>