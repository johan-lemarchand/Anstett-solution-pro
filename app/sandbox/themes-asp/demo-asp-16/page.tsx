import { Fragment } from "react";
// CUSTOM DATA
import Navbar from "app/sandbox/components/blocks/navbar/navbar-1";
import { Hero16 } from "app/sandbox/components/blocks/hero";
import { Contact10 } from "app/sandbox/components/blocks/contact";
import { Services18 } from "app/sandbox/components/blocks/services";
import { Portfolio9 } from "app/sandbox/components/blocks/portfolio";

export default function Demo16() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-gray">
        <Navbar social fancy navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light" />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero16 />

        {/* ========== what i do section ========== */}
        <Services18 />

        {/* ========== latest projects section ========== */}
        <Portfolio9 />

        {/* ========== contact and footer section ========== */}
        <Contact10 />
      </main>
    </Fragment>
  );
}
