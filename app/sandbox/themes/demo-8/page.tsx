import { Fragment } from 'react';

// GLOBAL CUSTOM COMPONENTS
import Navbar from 'app/sandbox/components/blocks/navbar/navbar-1';
import { FAQ3 } from 'app/sandbox/components/blocks/faq';
import { Hero8 } from 'app/sandbox/components/blocks/hero';
import { Team5 } from 'app/sandbox/components/blocks/team';
import { Facts2 } from 'app/sandbox/components/blocks/facts';
import { Footer7 } from 'app/sandbox/components/blocks/footer';
import { Pricing5 } from 'app/sandbox/components/blocks/pricing';
import { Clients2 } from 'app/sandbox/components/blocks/clients';
import { Services11 } from 'app/sandbox/components/blocks/services';
import { About10, About9 } from 'app/sandbox/components/blocks/about';
import { Testimonial9 } from 'app/sandbox/components/blocks/testimonial';

export default function Demo8() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-light pt-1">
        <Navbar
          search
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent navbar-light"
          button={
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#modal-signin"
              className="btn btn-sm btn-primary rounded-pill"
            >
              Connexion
            </a>
          }
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        <section className="wrapper bg-light">
          <div className="container">
            {/* ========== hero section ========== */}
            <Hero8 />

            {/* ========== clients section ========== */}
            <Clients2 />

            {/* ========== what are we section ========== */}
            <About9 />

            {/* ========== what we do section ========== */}
            <Services11 />

            {/* ========== testimonial section ========== */}
            <Testimonial9 />

            {/* ========== facts section ========== */}
            <Facts2
              subtitle={
                <Fragment>
                  Asseyez-vous et détendez-vous pendant que nous{' '}
                  <span className="underline">prenons soin</span> de vos besoins
                  commerciaux.
                </Fragment>
              }
            />

            {/* ========== team section ========== */}
            <Team5 />

            {/* ========== awesomeness section ========== */}
            <About10 />

            {/* ========== pricing section ========== */}
            <Pricing5 />

            {/* ========== faq section ========== */}
            <FAQ3 />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer7 />
    </Fragment>
  );
}
