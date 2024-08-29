import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "@sandbox/components/blocks/navbar/navbar-1";
import { Process7 } from "@sandbox/components/blocks/process";
import { Hero15 } from "@sandbox/components/blocks/hero";
import { Team3 } from "@sandbox/components/blocks/team";
import { About6 } from "@sandbox/components/blocks/about";
import { Facts5 } from "@sandbox/components/blocks/facts";
import { Footer9 } from "@sandbox/components/blocks/footer";
import { Contact7 } from "@sandbox/components/blocks/contact";
import { CTA5 } from "@sandbox/components/blocks/call-to-action";
import { Testimonial5 } from "@sandbox/components/blocks/testimonial";

export default function Demo15() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          info
          search
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none"
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero sections ========== */}
        <Hero15 />

        <section className="wrapper bg-light angled lower-end">
          <div className="container py-14 py-md-16">
            {/* ========== about section ========== */}
            <About6 />

            {/* ========== process section ========== */}
            <Process7 />
          </div>
        </section>

        {/* ========== testimonial section ========== */}
        <Testimonial5 />

        {/* ========== team section ========== */}
        <Team3 />

        {/* ========== facts section ========== */}
        <Facts5 />

        {/* ========== contact section ========== */}
        <Contact7 />

        {/* ========== call to action section ========== */}
        <CTA5 />
      </main>

      {/* ========== footer section ========== */}
      <Footer9 />
    </Fragment>
  );
}
