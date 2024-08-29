import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "@sandbox/components/blocks/navbar/navbar-1";
import { Hero33 } from "@sandbox/components/blocks/hero";
import { About34 } from "@sandbox/components/blocks/about";
import { Footer22 } from "@sandbox/components/blocks/footer";
import { Services36 } from "@sandbox/components/blocks/services";
import { CTA13 } from "@sandbox/components/blocks/call-to-action";
import { Portfolio17 } from "@sandbox/components/blocks/portfolio";
import { Testimonial27 } from "@sandbox/components/blocks/testimonial";
import NextLink from "@sandbox/components/reuseable/links/NextLink";

export default function Demo33() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary my-1">
        <Navbar
          button={<NextLink title="Contactez-moi" href="#" className="btn btn-sm btn-primary" />}
          navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light"
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero33 />

        {/* ========== service & projects section ========== */}
        <section className="wrapper bg-light">
          <div className="container py-16 py-md-18">
            {/* ========== the service section ========== */}
            <Services36 />

            {/* ========== latest projects section ========== */}
            <Portfolio17 />
          </div>
        </section>

        {/* ========== testimonial section ========== */}
        <Testimonial27 />

        {/* ========== about me section ========== */}
        <About34 />

        {/* ========== contact me section ========== */}
        <CTA13 />
      </main>

      {/* ========== footer section ========== */}
      <Footer22 />
    </Fragment>
  );
}
