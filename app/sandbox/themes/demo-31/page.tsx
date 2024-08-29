import { Fragment } from 'react';

// GLOBAL CUSTOM COMPONENTS
import Navbar from 'app/sandbox/components/blocks/navbar/navbar-1';
import { Hero31 } from 'app/sandbox/components/blocks/hero';
import { Facts20 } from 'app/sandbox/components/blocks/facts';
import { Footer21 } from 'app/sandbox/components/blocks/footer';
import { Clients6 } from 'app/sandbox/components/blocks/clients';
import { Services33 } from 'app/sandbox/components/blocks/services';
import { Portfolio16 } from 'app/sandbox/components/blocks/portfolio';
import { Testimonial25 } from 'app/sandbox/components/blocks/testimonial';

import Topbar from 'app/sandbox/components/elements/Topbar';
import NextLink from 'app/sandbox/components/reuseable/links/NextLink';

export default function Demo31() {
  return (
    <Fragment>
      {/* ========== topbar section ========== */}
      <Topbar />

      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar
          language
          logoAlt="logo"
          button={
            <NextLink
              title="Contact"
              href="#"
              className="btn btn-sm btn-primary rounded"
            />
          }
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero31 />

        <section className="wrapper bg-gradient-primary">
          <div className="container pt-15 pt-md-17">
            {/* ========== clients section ========== */}
            <Clients6 />

            {/* ========== our services section ========== */}
            <Services33 />
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container py-16 py-md-18">
            {/* ========== happy customers section ========== */}
            <Testimonial25 />

            {/* ========== latest projects section ========== */}
            <Portfolio16 />

            {/* ========== join our community section ========== */}
            <Facts20 />
          </div>

          {/* ========== shape section ========== */}
          <div className="overflow-hidden">
            <div className="divider text-soft-primary mx-n2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70">
                <path
                  fill="currentColor"
                  d="M1440,70H0V45.16a5762.49,5762.49,0,0,1,1440,0Z"
                />
              </svg>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer21 />
    </Fragment>
  );
}
