"use client";

import { Fragment, useRef } from "react";
// GLOBAL CUSTOM HOOKS
import useSticky from "app/agency/hooks/useSticky";
import useNestedDropdown from "app/agency/hooks/useNestedDropdown";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "app/sandbox/components/reuseable/links/NextLink";
import SocialLinks from "app/sandbox/components/reuseable/SocialLinks";

// ===================================================================
interface Navbar3Props {
  logoAlt: string;
  stickyBox?: boolean;
  navClassName?: string;
}
// ===================================================================
 
export default function NavAgency({
  logoAlt,
  stickyBox = true,
  navClassName = "navbar navbar-expand-lg center-logo transparent position-absolute navbar-dark"
}: Navbar3Props) {
  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // Vérifier si l'application est en cours d'exécution en localhost
  const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';
  // dynamically added navbar classname
  const fixedClassName = `navbar navbar-expand-lg center-logo transparent position-absolute navbar-light navbar-clone fixed`;

  const logos = (
    <>
      <img className="logo-dark" src={`/img/agency/logo-dark.png`} srcSet={`/img/agency/logo-dark.png 2x`} alt="héron-noir" />
      <img className="logo-light" src="/img/agency/logo-white.png" srcSet="/img/agency/logo-white 2x" alt="héron-blanc" />
    </>
  );

  return (
    <Fragment>
      {stickyBox && <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        <div className="container justify-content-between align-items-center">
          <div className="d-flex flex-row w-100 justify-content-between align-items-center d-lg-none">
            <div className="navbar-brand">
              <NextLink href="/" title={logos} />
            </div>

            <div className="navbar-other ms-auto">
              <ul className="navbar-nav flex-row align-items-center">
                <li className="nav-item d-lg-none">
                  <button
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvas-nav"
                    className="hamburger offcanvas-nav-btn">
                    <span />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar-collapse-wrapper d-flex flex-row align-items-center w-100">
            <div
              id="offcanvas-nav"
              data-bs-scroll="true"
              className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
              <div className="offcanvas-header mx-lg-auto order-0 order-lg-1 d-lg-flex px-lg-15">
                <NextLink href="/" className="transition-none d-none d-lg-flex" title={logos} />
                <h3 className="text-white fs-30 mb-0 d-lg-none">Anstett Solutions Pro</h3>
                <button
                  type="button"
                  aria-label="Close"
                  data-bs-dismiss="offcanvas"
                  className="btn-close btn-close-white d-lg-none"
                />
              </div>

              {/* Ajout du lien rapide vers /sandbox visible uniquement en localhost */}
              {/*isLocalhost && (
                <div className="offcanvas-body">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NextLink href="/sandbox" title="" className="nav-link" />
                    </li>
                  </ul>
                </div>
              )*/}



              {/* ============= show contact info in the small device sidebar ============= */}
              <div className="offcanvas-body d-lg-none order-4 mt-auto">
                <div className="offcanvas-footer">
                  <div>
                    <NextLink title="anstett.solutions.pro@gmail.com" className="link-inverse" href="mailto:first.last@email.com" />
                    <br />
                    <NextLink href="tel:06 42 18 55 95" title="06 42 18 55 95" />
                    <br />
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}