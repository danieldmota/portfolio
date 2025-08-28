<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólio Daniel</title>
    <link rel="stylesheet" href="css/style.css">
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
                            <img src="images/foto-teste.png" alt="Profile">
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
                <h1>Desenvolvedor <span>Junior</span></h1>
                <p>Tenho 18 anos, sou apaixonado em tudo que envolva tecnologia e inovação. Estudo desenvolvimento web
                    desde os 16 anos de idade e atualmente estou focado em me tornar um desenvolvedor Full Stack de alto
                    nível. Adoro desafios e estou sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades.
                    Sou dedicado e comprometido com meus projetos,
                    com foco em criar interfaces funcionais e agradáveis, unindo design moderno com um backend
                    eficiente. Gosto de aprender, testar ideias e transformar projetos em resultados reais.
                    Estou sempre buscando evoluir e contribuir com trabalhos que façam a diferença.</p>
                <div class="project-container-about">
                    <!-- box -->
                    <div class="project-container-box">
                        <span>10</span>
                        <strong>Projetos feitos</strong>
                    </div>
                    <!-- box -->
                    <div class="project-container-box">
                        <span>2</span>
                        <strong>Anos de estudo e prática</strong>
                    </div>
                    <!-- box -->
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
                            <i class="fa-brands fa-html5"></i>
                            <span>HTML</span>
                        </div>
                        <div class="skill-box-bar">
                            <span style="width: 90%;"></span>
                        </div>
                        <span class="skill-box-percentage">90%</span>
                    </div>
                    <!-- css -->
                    <div class="skill-box bg-gradient" data-aos="fade-up">
                        <div class="skill-box-content">
                            <i class="fa-brands fa-css3"></i>
                            <span>CSS</span>
                        </div>
                        <div class="skill-box-bar">
                            <span style="width: 80%;"></span>
                        </div>
                        <span class="skill-box-percentage">80%</span>
                    </div>
                    <!-- PHP -->
                    <div class="skill-box bg-gradient" data-aos="fade-up">
                        <div class="skill-box-content">
                            <i class="fa-brands fa-php"></i>
                            <span>PHP</span>
                        </div>
                        <div class="skill-box-bar">
                            <span style="width: 80%;"></span>
                        </div>
                        <span class="skill-box-percentage">80%</span>
                    </div>
                    <!-- Symfony -->
                    <div class="skill-box bg-gradient" data-aos="fade-up">
                        <div class="skill-box-content">
                            <i class="fa-brands fa-symfony"></i>
                            <span>Symfony</span>
                        </div>
                        <div class="skill-box-bar">
                            <span style="width: 70%;"></span>
                        </div>
                        <span class="skill-box-percentage">70%</span>
                    </div>
                    <!-- SQL -->
                    <div class="skill-box bg-gradient" data-aos="fade-up">
                        <div class="skill-box-content">
                            <i class="fa-solid fa-database"></i> <span>Banco de dados</span>
                        </div>
                        <div class="skill-box-bar">
                            <span style="width: 70%;"></span>
                        </div>
                        <span class="skill-box-percentage">70%</span>
                    </div>
                    <!-- python -->
                    <div class="skill-box bg-gradient" data-aos="fade-up">
                        <div class="skill-box-content">
                            <i class="fa-brands fa-python"></i>
                            <span>Python</span>
                        </div>
                        <div class="skill-box-bar">
                            <span style="width: 70%;"></span>
                        </div>
                        <span class="skill-box-percentage">70%</span>
                    </div>
                    <!-- JavaScript -->
                    <div class="skill-box bg-gradient" data-aos="fade-up">
                        <div class="skill-box-content">
                            <i class="fa-brands fa-js"></i>
                            <span>JavaScript</span>
                        </div>
                        <div class="skill-box-bar">
                            <span style="width: 60%;"></span>
                        </div>
                        <span class="skill-box-percentage">60%</span>
                    </div>
                    <!-- React -->
                    <div class="skill-box bg-gradient" data-aos="fade-up">
                        <div class="skill-box-content">
                            <i class="fa-brands fa-react"></i>
                            <span>React</span>
                        </div>
                        <div class="skill-box-bar">
                            <span style="width: 60%;"></span>
                        </div>
                        <span class="skill-box-percentage">60%</span>
                    </div>
                    <!-- Node -->
                    <div class="skill-box bg-gradient" data-aos="fade-up">
                        <div class="skill-box-content">
                            <i class="fa-brands fa-node"></i>
                            <span>Node</span>
                        </div>
                        <div class="skill-box-bar">
                            <span style="width: 40%;"></span>
                        </div>
                        <span class="skill-box-percentage">40%</span>
                    </div>
                    <!-- Flutter -->
                    <div class="skill-box bg-gradient" data-aos="fade-up">
                        <div class="skill-box-content">
                            <i class="fa-brands fa-flutter"></i>
                            <span>Flutter</span>
                        </div>
                        <div class="skill-box-bar">
                            <span style="width: 40%;"></span>
                        </div>
                        <span class="skill-box-percentage">40%</span>
                    </div>
                </div>
            </section>

            <!-- Projetos -->
            <section id="projects" class="section-container">
                <div class="section-heading">
                    <span><i class="fa-solid fa-briefcase"></i> Meus projetos</span>
                    <h3>Busque projetos por categoria</h3>
                </div>

                <!-- filtro -->
                <ul class="project-list">
                    <li class="active" data-filter="all">All</li>
                    <li data-filter="ReactJs">ReactJs</li>
                    <li data-filter="Figma">Figma</li>
                    <li data-filter="Php">PHP</li>
                </ul>

                <!-- container -->
                <div class="project-container">
                    <button onclick="" class="project-box" data-category="ReactJs" data-aos="fade-up">
                        <!-- Imagem -->
                        <div class="project-box-img">
                            <img src="images/p2.jpg" alt="projeto" />
                        </div>
                        <!-- Texto -->
                        <div class="project-box-text-container">
                            <!-- Detalhes -->
                            <div class="project-box-text">
                                <strong>Business Company Website</strong>
                                <span>ReactJs</span>
                            </div>
                            <!-- icone com link -->
                            <div class="project-box-btn">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </div>
                    </button>

                    <button class="project-box" data-category="Figma" data-aos="fade-up">
                        <!-- Imagem -->
                        <div class="project-box-img">
                            <img src="images/p3.jpg" alt="projeto" />
                        </div>
                        <!-- Texto -->
                        <div class="project-box-text-container">
                            <!-- Detalhes -->
                            <div class="project-box-text">
                                <strong>Figma App Design</strong>
                                <span>Figma</span>
                            </div>
                            <!-- icone com link -->
                            <div class="project-box-btn">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                        </div>
                    </button>

                    <button class="project-box" data-category="ReactJs" data-aos="fade-up">
                        <!-- Imagem -->
                        <div class="project-box-img">
                            <img src="images/p1.jpg" alt="projeto" />
                        </div>
                        <!-- Texto -->
                        <div class="project-box-text-container">
                            <!-- Detalhes -->
                            <div class="project-box-text">
                                <strong>Dashboard of website</strong>
                                <span>ReactJs</span>
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
                    <h3>Formação</h3>
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
                                <span class="edu-work-year">2024 - 2026</span>
                                <strong>Técnico em desenvolvimento de sistemas</strong>
                                <span class="edu-work-location">Senac Hub Academy</span>
                                <p>No Senac, desenvolvi um sistema web completo no Projeto Integrador, passando por
                                    todas as etapas:
                                    documentação, protótipo no Figma, front-end e back-end com PHP em MVC sem framework.
                                    Também tive
                                    experiência com Symfony em um projeto mobile integrado ao Flutter. Essa vivência me
                                    deu uma base sólida em
                                    desenvolvimento web e boas práticas de projeto.</p>
                            </div>
                            <!-- box -->
                            <div class="edu-work-box">
                                <span class="edu-work-year">2025 - 2028</span>
                                <strong>Engenharia de Software</strong>
                                <span class="edu-work-location">Unigran Capital</span>
                                <p>Estou adquirindo fundamentos essenciais em lógica de programação, estruturas de
                                    dados, algoritmos e banco de dados,
                                    além de aprender a planejar e implementar soluções de software. Também começo a
                                    conhecer testes, arquitetura e
                                    metodologias ágeis, construindo uma base para o desenvolvimento de projetos.</p>
                            </div>
                        </div>
                    </div>
                    <!-- Work -->
                    <!-- <div class="work-container">
                        <span class="edu-work-label">
                            <i class="fa-solid fa-briefcase"></i>
                            Experiência
                        </span> -->
                    <!-- box-container -->
                    <!-- <div class="edu-work-box-container"> -->
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
                    <!-- box -->
                    <!-- <div class="edu-work-box" data-aos="fade-up">
                                <span class="edu-work-year">2018 - 2022</span>
                                <strong>BS ins Software Engenrr</strong>
                                <span class="edu-work-location">Carson, USA</span>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi facere adipisci ipsa
                                    accusantium? Asperiores quo, culpa pariatur consectetur neque maxime dolorem fugiat
                                    error excepturi quas? Eaque dolor inventore numquam obcaecati!</p>
                            </div> -->
                    <!-- </div> -->
                    <!-- </div> -->
                </div>
            </section>
        </div>
    </div>

    <!-- Swiper JS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <!-- aos -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    <script>
        // Efeito de transição de palavras
        document.addEventListener("DOMContentLoaded", () => {
            const roles = ["Daniel", "Desenvolvedor Web", "Estudante de Engenharia de Software"];
            const roleElement = document.getElementById("role");
            let roleIndex = 0;
            let letterIndex = 0;
            let typingInterval;

            function typeRole() {
                roleElement.style.opacity = 0; // Esconde o texto atual
                setTimeout(() => {
                    roleElement.textContent = "";
                    letterIndex = 0; // Reseta o índice de letras
                    typingInterval = setInterval(() => {
                        if (letterIndex < roles[roleIndex].length) {
                            roleElement.textContent += roles[roleIndex].charAt(letterIndex);
                            letterIndex++;
                        } else {
                            clearInterval(typingInterval);
                            setTimeout(() => {
                                roleIndex = (roleIndex + 1) % roles.length; // Muda para o próximo papel
                                typeRole(); // Inicia a digitação do próximo papel
                            }, 1000); // Tempo de espera antes de mostrar o novo texto
                        }
                    }, 150); // Velocidade de digitação

                    roleElement.style.opacity = 1; // Mostra o texto após a digitação
                }, 500); // Tempo de espera antes de mostrar o novo texto
            }
            typeRole(); // Inicia a digitação do primeiro papel
        });

        // Efeito de filtro de projetos
        document.addEventListener("DOMContentLoaded", function () {
            const filterButtons = document.querySelectorAll(".project-list li");
            const projects = document.querySelectorAll(".project-box");

            filterButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    // Remove a classe 'active' de todos os botões
                    filterButtons.forEach(btn => btn.classList.remove("active"));
                    // Adiciona a classe 'active' ao botão clicado
                    button.classList.add("active");

                    const filter = button.getAttribute("data-filter");
                    // Filtra os projetos
                    projects.forEach(project => {
                        if (filter === "all" || project.getAttribute("data-category") === filter) {
                            project.style.display = "block";
                        } else {
                            project.style.display = "none";
                        }
                    });
                });
            });
        });

        // Efeito de modo escuro e claro
        document.addEventListener("DOMContentLoaded", function () {
            const toggleButton = document.querySelector(".dark-light-btn");
            const htmlElement = document.documentElement;

            const currentMode = localStorage.getItem("mode");

            if (currentMode === 'light') {
                htmlElement.classList.add('light-mode');
                toggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
            }

            toggleButton.addEventListener("click", () => {
                htmlElement.classList.toggle("light-mode");

                const isLightMode = htmlElement.classList.contains("light-mode");
                toggleButton.innerHTML = isLightMode ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';

                localStorage.setItem("mode", isLightMode ? 'light' : 'dark');
            });

            // auto active menu
            const section = document.querySelectorAll("section");
            const navLinks = document.querySelectorAll("ul li a");

            function setActiveLink() {
                let currentSection = "";

                section.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (window.scrollY >= sectionTop - sectionHeight / 3) {
                        currentSection = section.getAttribute("id");
                    }

                    navLinks.forEach(link => {
                        link.classList.remove("active");
                        if (link.getAttribute("href") === `#${currentSection}`) {
                            link.classList.add("active");
                        }


                    });
                });
            }
            window.addEventListener("scroll", setActiveLink);
        });

        // Inicializa o AOS (Animate On Scroll)
        AOS.init();
    </script>
</body>

</html>

<?php
require_once 'projeto-1.html';
?>