"use client";

import { Fragment, useRef } from "react";
// GLOBAL CUSTOM HOOKS
import useSticky from "app/sandbox/hooks/useSticky";
import useNestedDropdown from "app/sandbox/hooks/useNestedDropdown";
// LOCAL CUSTOM COMPONENTS
import Info from "../components/Info";
import Search from "../components/search";
import Navigation from "../components/navigation";
import OnePageDemoLinks from "../components/one-page-demo-links";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "app/sandbox/components/reuseable/links/NextLink";
import SocialLinks from "app/sandbox/components/reuseable/SocialLinks";

// ===================================================================
type Navbar4Props = { navClassName?: string; onePageDemo?: boolean };
// ===================================================================

export default function Navbar4({
  onePageDemo,
  navClassName = "navbar navbar-expand-lg extended extended-alt navbar-light navbar-bg-light"
}: Navbar4Props) {
  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically added navbar classname
  const fixedClassName = `navbar navbar-expand-lg extended extended-alt navbar-light navbar-bg-light navbar-clone fixed`;

  return (
    <Fragment>
      <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        <div className="container flex-lg-column">
          <div className="topbar d-flex flex-row justify-content-lg-center align-items-center">
            <div className="navbar-brand">
              <NextLink
                href="/"
                title={<img alt="logo" src="/img/logo-dark.png" srcSet="/img/logo-dark@2x.png 2x" />}
              />
            </div>
          </div>

          <div className="navbar-collapse-wrapper bg-white d-flex flex-row align-items-center justify-content-between">
            {/* ============= left side content ============= */}
            <div className="navbar-other w-100 d-none d-lg-block">
              <SocialLinks className="nav social social-muted" />
            </div>

            <div
              className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
              data-bs-scroll="true"
              id="offcanvas-nav">
              <div className="offcanvas-header d-lg-none">
                <h3 className="text-white fs-30 mb-0">Sandbox</h3>
                <button
                  type="button"
                  aria-label="Close"
                  data-bs-dismiss="offcanvas"
                  className="btn-close btn-close-white"
                />
              </div>

              <div className="offcanvas-body d-flex flex-column h-100">
                {onePageDemo ? <OnePageDemoLinks /> : <Navigation />}

                {/* ============= show contact info in the small device sidebar ============= */}
                <div className="offcanvas-footer d-lg-none">
                  <div>
                    <NextLink title="anstett.solutions.pro@gmail.com" className="link-inverse" href="mailto:anstett.solutions.pro@gmail.com" />
                    <br />
                    <NextLink href="tel:0642185595" title="06 42 18 55 95" />
                    <br />
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>

            {/* ============= right side content ============= */}
            <div className="navbar-other w-100 d-flex">
              <ul className="navbar-nav flex-row align-items-center ms-auto">
                {/* ============= info button ============= */}
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-info">
                    <i className="uil uil-info-circle" />
                  </a>
                </li>

                {/* ============= search icon button ============= */}
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search">
                    <i className="uil uil-search" />
                  </a>
                </li>

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
        </div>
      </nav>

      {/* ============= info sidebar ============= */}
      <Info />

      {/* ============= show search box ============= */}
      <Search />
    </Fragment>
  );
}
