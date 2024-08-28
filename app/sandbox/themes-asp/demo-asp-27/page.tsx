import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "app/sandbox/components/blocks/navbar/navbar-1";
import { FAQ7 } from "app/sandbox/components/blocks/faq";
import { Blog7 } from "app/sandbox/components/blocks/blog";
import { Hero27 } from "app/sandbox/components/blocks/hero";
import { Facts17 } from "app/sandbox/components/blocks/facts";
import { About28 } from "app/sandbox/components/blocks/about";
import { Footer18 } from "app/sandbox/components/blocks/footer";
import { Process17 } from "app/sandbox/components/blocks/process";
import { Pricing10 } from "app/sandbox/components/blocks/pricing";
import { Services29 } from "app/sandbox/components/blocks/services";
import { Testimonial21 } from "app/sandbox/components/blocks/testimonial";

export default function Demo27() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-light">
        <Navbar
          info
          search
          stickyBox={false}
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-light"
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero27 />

        {/* ========== what we do section ========== */}
        <Services29 />

        {/* ========== how it works section ========== */}
        <Process17 />

        {/* ========== case study section ========== */}
        <Blog7 />

        {/* ========== our solutions section ========== */}
        <Facts17 />

        <section className="wrapper bg-white">
          <div className="container py-15 py-md-17">
            {/* ========== why choose us section ========== */}
            <About28 />

            {/* ========== happy customers section ========== */}
            <Testimonial21 />

            {/* ========== our pricing section ========== */}
            <Pricing10 />

            {/* ========== faq section ========== */}
            <FAQ7 />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer18 />
    </Fragment>
  );
}
