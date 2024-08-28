import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar3 from "app/sandbox/components/blocks/navbar/navbar-3";
import { Hero19 } from "app/sandbox/components/blocks/hero";
import { Facts13 } from "app/sandbox/components/blocks/facts";
import { About20 } from "app/sandbox/components/blocks/about";
import { Footer11 } from "app/sandbox/components/blocks/footer";
import { CTA8 } from "app/sandbox/components/blocks/call-to-action";
import { Portfolio10 } from "app/sandbox/components/blocks/portfolio";
import { Testimonial16 } from "app/sandbox/components/blocks/testimonial";
import { Services21, Services22 } from "app/sandbox/components/blocks/services";

export default function Demo19() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar3 logoAlt="logo-dark" stickyBox={false} />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero19 />

        <section className="wrapper bg-light">
          <div className="container pb-15 pb-md-17">
            {/* ========== services section ========== */}
            <Services21 />

            {/* ========== why choose sandbox section ========== */}
            <Services22 />
          </div>
        </section>

        {/* ========== what makes section ========== */}
        <Facts13 />

        <section className="wrapper bg-light">
          <div className="container py-16 py-md-18">
            {/* ========== testimonial section ========== */}
            <Testimonial16 />

            {/* ========== latest project section ========== */}
            <Portfolio10 />

            {/* ========== what make us section ========== */}
            <About20 />
          </div>
        </section>

        {/* ========== call to action section ========== */}
        <CTA8 />
      </main>

      {/* ========== footer section ========== */}
      <Footer11 />
    </Fragment>
  );
}
