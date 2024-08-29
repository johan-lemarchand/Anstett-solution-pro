import { Fragment } from 'react';
// GLOBAL CUSTOM COMPONENTS
import Navbar from 'app/sandbox/components/blocks/navbar/navbar-1';
import { Team4 } from 'app/sandbox/components/blocks/team';
import { Hero4 } from 'app/sandbox/components/blocks/hero';
import { About4 } from 'app/sandbox/components/blocks/about';
import { Facts2 } from 'app/sandbox/components/blocks/facts';
import { Banner3 } from 'app/sandbox/components/blocks/banner';
import { Footer2 } from 'app/sandbox/components/blocks/footer';
import { Clients1 } from 'app/sandbox/components/blocks/clients';
import { Services5 } from 'app/sandbox/components/blocks/services';
import { Testimonial3 } from 'app/sandbox/components/blocks/testimonial';

export default function Demo4() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper mb-1">
        <Navbar
          social
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none"
        />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero4 />

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-18">
            {/* ========== services section ========== */}
            <Services5 />

            <hr className="my-14 my-md-17" />

            {/* ========== about us section ========== */}
            <About4 />
          </div>
        </section>

        {/* ========== video banner section ========== */}
        <Banner3 />

        <section className="wrapper bg-light position-relative">
          <div className="container py-14 py-md-16">
            {/* ========== facts section ========== */}
            <Facts2 />

            {/* ========== team section ========== */}
            <Team4 />

            <hr className="mt-15 mt-md-18 mb-14 mb-md-17" />

            {/* ========== testimonial section ========== */}
            <Testimonial3 />

            {/* ========== clients section ========== */}
            <div className="px-lg-5 mb-16 mb-md-22">
              <Clients1 />
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer2 />
    </Fragment>
  );
}
