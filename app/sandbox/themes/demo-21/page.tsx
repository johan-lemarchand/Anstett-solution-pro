import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "@sandbox/components/blocks/navbar/navbar-1";
import { FAQ6 } from "@sandbox/components/blocks/faq";
import { Team4 } from "@sandbox/components/blocks/team";
import { Hero21 } from "@sandbox/components/blocks/hero";
import { About22 } from "@sandbox/components/blocks/about";
import { Facts15 } from "@sandbox/components/blocks/facts";
import { Footer13 } from "@sandbox/components/blocks/footer";
import { Process14 } from "@sandbox/components/blocks/process";
import { Services24 } from "@sandbox/components/blocks/services";
import { Portfolio3 } from "@sandbox/components/blocks/portfolio";
import { Testimonial17 } from "@sandbox/components/blocks/testimonial";
import NextLink from "@sandbox/components/reuseable/links/NextLink";

export default function Demo21() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-light">
        <Navbar
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent navbar-light"
          button={<NextLink href="#" title="Contact" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero21 />

        {/* ========== services section ========== */}
        <Services24 />

        {/* ========== our strategy section ========== */}
        <Process14 />

        {/* ========== why choose us section ========== */}
        <About22 />

        <section className="wrapper bg-light">
          <div className="container pt-12 pt-lg-8 pb-14 pb-md-16">
            {/* ========== company facts section ========== */}
            <Facts15 />

            {/* ========== team section ========== */}
            <Team4 />
          </div>

          {/* ========== projects section ========== */}
          <Portfolio3 />

          {/* ========== customer section ========== */}
          <Testimonial17 />

          {/* ========== faq section ========== */}
          <FAQ6 />
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer13 />
    </Fragment>
  );
}
