import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "@sandbox/components/blocks/navbar/navbar-1";
import { Hero14 } from "@sandbox/components/blocks/hero";
import { About15 } from "@sandbox/components/blocks/about";
import { Facts10 } from "@sandbox/components/blocks/facts";
import { Footer1 } from "@sandbox/components/blocks/footer";
import { Contact9 } from "@sandbox/components/blocks/contact";
import { Process11 } from "@sandbox/components/blocks/process";
import { Services17 } from "@sandbox/components/blocks/services";
import { Portfolio8 } from "@sandbox/components/blocks/portfolio";
import { Testimonial14 } from "@sandbox/components/blocks/testimonial";
import NextLink from "@sandbox/components/reuseable/links/NextLink";

export default function Demo14() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero14 />

        {/* ========== what we do section ========== */}
        <Services17 />

        {/* ========== our community section ========== */}
        <Contact9 />

        {/* ========== projects section ========== */}
        <Portfolio8 />

        {/* ========== facts section ========== */}
        <Facts10 />

        <section className="wrapper bg-light">
          <div className="container py-16 py-md-17">
            {/* ========== testimonial section ========== */}
            <Testimonial14 />

            {/* ========== process section ========== */}
            <Process11 />

            {/* ========== why choose us section ========== */}
            <About15 />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer1 />
    </Fragment>
  );
}
