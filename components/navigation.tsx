"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "about-me", label: "Sobre", icon: "fa-solid fa-address-book" },
  { id: "skills", label: "Habilidades", icon: "fa-solid fa-layer-group" },
  { id: "projects", label: "Projetos", icon: "fa-solid fa-briefcase" },
  { id: "edu-work", label: "Formação", icon: "fa-solid fa-file-lines" },
] as const;

export function Navigation() {
  const [activeSection, setActiveSection] = useState<(typeof items)[number]["id"]>("about-me");

  useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      frameId = 0;
      let current: (typeof items)[number]["id"] = "about-me";

      for (const item of items) {
        const section = document.getElementById(item.id);
        if (section && window.scrollY >= section.offsetTop - section.offsetHeight / 3) {
          current = item.id;
        }
      }

      setActiveSection((previous) => (previous === current ? previous : current));
    };

    const handleScroll = () => {
      if (frameId === 0) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    frameId = window.requestAnimationFrame(updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            data-label={item.label}
            className={activeSection === item.id ? "active" : undefined}
            aria-label={item.label}
            aria-current={activeSection === item.id ? "location" : undefined}
          >
            <i className={item.icon} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
