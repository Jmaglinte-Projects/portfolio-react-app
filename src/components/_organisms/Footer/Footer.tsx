import { MouseEvent, useEffect, useState } from "react";
import { FooterWrapper, LinkWrapper, CloseButtonWrapper } from "./elements";
import { FooterProps } from "./types";

const quickLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "works", label: "Projects" },
  { id: "experience", label: "Experience" },
];

const Footer = (props: FooterProps) => {
  const { onClose } = props;
  const [activeSection, setActiveSection] = useState("about");

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const sectionElement = document.getElementById(id);
    if (!sectionElement) return;

    setActiveSection(id);
    sectionElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `#${id}`);
  };

  useEffect(() => {
    const sectionIds = quickLinks.map((link) => link.id);
    const offsetTop = 140;

    const getSectionFromHash = () => {
      const hashSection = window.location.hash.replace("#", "");
      return sectionIds.includes(hashSection) ? hashSection : "";
    };

    const getSectionFromScroll = () => {
      const currentScroll = window.scrollY + offsetTop;
      let current = sectionIds[0];

      sectionIds.forEach((id) => {
        const sectionElement = document.getElementById(id);
        if (sectionElement && sectionElement.offsetTop <= currentScroll) {
          current = id;
        }
      });

      return current;
    };

    const syncActiveSection = () => {
      const sectionFromHash = getSectionFromHash();
      if (sectionFromHash) {
        setActiveSection(sectionFromHash);
        return;
      }

      setActiveSection(getSectionFromScroll());
    };

    syncActiveSection();
    window.addEventListener("hashchange", syncActiveSection);
    window.addEventListener("scroll", syncActiveSection, { passive: true });

    return () => {
      window.removeEventListener("hashchange", syncActiveSection);
      window.removeEventListener("scroll", syncActiveSection);
    };
  }, []);

  return (
    <FooterWrapper>
      <LinkWrapper>
        {quickLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={activeSection === link.id ? "active" : ""}
            onClick={(event) => handleNavClick(event, link.id)}
          >
            {link.label}
          </a>
        ))}
      </LinkWrapper>
      <CloseButtonWrapper
        onClick={onClose}
        aria-label="Close quick navigation"
      >
        x
      </CloseButtonWrapper>
    </FooterWrapper>
  );
};

export default Footer;
