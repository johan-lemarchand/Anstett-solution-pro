import { Fragment } from 'react';
// GLOBAL CUSTOM COMPONENTS
import Navbar from 'app/sandbox/components/blocks/navbar/navbar-1';
import { Hero26 } from 'app/sandbox/components/blocks/hero';
import { About27 } from 'app/sandbox/components/blocks/about';
import { Footer17 } from 'app/sandbox/components/blocks/footer';
import { Pricing9 } from 'app/sandbox/components/blocks/pricing';
import { Process16 } from 'app/sandbox/components/blocks/process';
import { Contact13 } from 'app/sandbox/components/blocks/contact';
import { Services28 } from 'app/sandbox/components/blocks/services';
import { CTA10 } from 'app/sandbox/components/blocks/call-to-action';
import { Testimonial20 } from 'app/sandbox/components/blocks/testimonial';
import NextLink from 'app/sandbox/components/reuseable/links/NextLink';

export default function Demo26() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          button={
            <NextLink
              href="#"
              title="Essai gratuit"
              className="btn btn-sm btn-primary rounded"
            />
          }
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero26 />

        <section className="wrapper bg-white">
          <div className="container pt-15 pb-15 pb-md-17">
            {/* ========== what do we do section ========== */}
            <Services28 />

            {/* ========== why choose us section ========== */}
            <About27 />

            {/* ========== our solutions section ========== */}
            <Process16 />

            {/* ========== happy customers section ========== */}
            <Testimonial20 />

            {/* ========== our pricing section ========== */}
            <Pricing9 />

            {/* ========== let's talk section ========== */}
            <Contact13 />
          </div>
        </section>

        {/* ========== analyze now section ========== */}
        <CTA10 />
      </main>

      {/* ========== footer section ========== */}
      <Footer17 />
    </Fragment>
  );
}
