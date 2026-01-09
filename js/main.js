// Efeito de transição de palavras
document.addEventListener("DOMContentLoaded", () => {
    const roles = ["Daniel", "Desenvolvedor Web", "Estudante de Eng. de Software"];
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

// EFEITO POPUP 
function abrir_popup(popupId) {
    const fundoPopup = document.getElementById(popupId);

    if (fundoPopup) {
        fundoPopup.classList.toggle('ativo');

        // Fecha o popup ao clicar fora dele
        fundoPopup.addEventListener('click', (event) => {
            if (event.target === fundoPopup) {
                fundoPopup.classList.remove('ativo');
            }
        });
    } else {
        console.error(`Elemento com ID "${popupId}" não encontrado.`);
    }
}

// FECHAR O POPUP
function fechar_popup(popupId) {
    const fundoPopup = document.getElementById(popupId);
    fundoPopup.classList.remove('ativo');
}