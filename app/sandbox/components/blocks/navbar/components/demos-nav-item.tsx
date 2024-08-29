import Link from "next/link";
import { useState, useEffect, useRef } from "react";
// GLOBAL CUSTOM COMPONENTS
import DropdownToggleLink from "@sandbox/components/reuseable/links/DropdownToggleLink";
// CUSTOM DATA
import { demos } from "@sandbox/data/navigation";

export default function DemosNavItem() {
  const [forceOpen, setForceOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleDemoClick = (e: Event) => {
      e.preventDefault();
      setForceOpen(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const demoButton = document.querySelector(".btn-demo");
    if (demoButton) {
      demoButton.addEventListener("click", handleDemoClick);
    }

    return () => {
      if (demoButton) {
        demoButton.removeEventListener("click", handleDemoClick);
      }
    };
  }, []);

  useEffect(() => {
    if (forceOpen && dropdownRef.current) {
      const currentDropdownRef = dropdownRef.current;

      const handleMouseLeave = () => {
        setForceOpen(false);
      };

      currentDropdownRef.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        currentDropdownRef.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [forceOpen]);

  return (
    <li
      className={`nav-item dropdown dropdown-mega ${forceOpen ? "show" : ""}`}
      ref={dropdownRef}
    >
      <DropdownToggleLink title="Demos" className="nav-link dropdown-toggle" />
      <ul
        className={`dropdown-menu mega-menu mega-menu-dark mega-menu-img ${forceOpen ? "show" : ""}`}
      >
        <li className="mega-menu-content mega-menu-scroll">
          <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-4 gy-lg-2 list-unstyled">
            {demos.map(({ id, title, url, thumnail }) => (
              <li className="col" key={id}>
                <Link href={url} className="dropdown-item">
                  <img
                    alt={title}
                    src={`/img/demos/${thumnail}.jpg`}
                    srcSet={`/img/demos/${thumnail}@2x.jpg 2x`}
                    className="rounded lift d-none d-lg-block"
                    width="185"
                    height="135"
                  />
                  <span className="d-lg-none">{title}</span>
                </Link>
              </li>
            ))}
          </ul>

          <span className="d-none d-lg-flex">
            <i className="uil uil-direction" />
            <strong>Défiler pour voir plus</strong>
          </span>
        </li>
      </ul>
    </li>
  );
}
