// "use client";

import { Fragment } from 'react';
// GLOBAL CUSTOM COMPONENTS
import Navbar3 from '@sandbox/components/blocks/navbar/navbar-3';
import { Hero13 } from '@sandbox/components/blocks/hero';
import { Facts9 } from '@sandbox/components/blocks/facts';
import { Footer8 } from '@sandbox/components/blocks/footer';
import { Process6 } from '@sandbox/components/blocks/process';
import { Contact8 } from '@sandbox/components/blocks/contact';
import { Clients4 } from '@sandbox/components/blocks/clients';
import { Pricing7 } from '@sandbox/components/blocks/pricing';
import { Services8 } from '@sandbox/components/blocks/services';
import { Portfolio7 } from '@sandbox/components/blocks/portfolio';
import { Testimonial13 } from '@sandbox/components/blocks/testimonial';

export default function Demo13() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar3 logoAlt="logo-purple" stickyBox={false} />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero13 />

        <section className="wrapper bg-light angled upper-end lower-end">
          <div className="container pb-14 pb-md-16">
            {/* ========== facts section ========== */}
            <Facts9 />

            {/* ========== what we do section ========== */}
            <Services8 />

            {/* ========== how we do section ========== */}
            <Process6 />
          </div>
        </section>

        {/* ========== happy customer section ========== */}
        <Testimonial13 />

        {/* ========== recent projects section ========== */}
        <Portfolio7 />

        {/* ========== clients section ========== */}
        <Clients4 />

        <section className="wrapper bg-light angled upper-end lower-end">
          <div className="container py-14 py-md-16">
            {/* ========== pricing section ========== */}
            <Pricing7 />

            {/* ========== contact section ========== */}
            <Contact8 />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
