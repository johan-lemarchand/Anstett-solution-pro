import { Fragment } from 'react';
// GLOBAL CUSTOM COMPONENTS
import NextLink from '@sandbox/components/reuseable/links/NextLink';
import Navbar from '@sandbox/components/blocks/navbar/navbar-1';
import { Blog2 } from '@sandbox/components/blocks/blog';
import { Team6 } from '@sandbox/components/blocks/team';
import { Hero11 } from '@sandbox/components/blocks/hero';
import { FAQ4, FAQ5 } from '@sandbox/components/blocks/faq';
import { Footer1 } from '@sandbox/components/blocks/footer';
import { Pricing2 } from '@sandbox/components/blocks/pricing';
import { About12, About13 } from '@sandbox/components/blocks/about';
import { Testimonial11 } from '@sandbox/components/blocks/testimonial';
import { Services14, Services15 } from '@sandbox/components/blocks/services';

export default function Demo11() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          stickyBox={false}
          logoAlt="logo-light"
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
          button={
            <NextLink
              href="#"
              title="Essai gratuit"
              className="btn btn-sm btn-white rounded-pill"
            />
          }
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero11 />

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-17">
            {/* ========== what we do section ========== */}
            <Services14 />

            {/* ========== why choose us section ========== */}
            <About12 />

            {/* ========== our solution section ========== */}
            <Services15 />
          </div>
        </section>

        <section className="wrapper bg-gray">
          <div className="container py-14 pt-md-0 pb-md-16">
            {/* ========== faq section ========== */}
            <FAQ4 />

            {/* ========== case study section ========== */}
            <Blog2 />
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-17">
            {/* ========== who are we section ========== */}
            <About13 />

            {/* ========== our team section ========== */}
            <Team6 />
          </div>
        </section>

        <section className="wrapper bg-gray">
          <div className="container py-14 pt-md-0 pb-md-17">
            {/* ========== testimonial section ========== */}
            <Testimonial11 />

            {/* ========== title section ========== */}
            <div className="row text-center">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <h2 className="fs-15 text-uppercase text-primary mb-3">
                  Nos tarifs
                </h2>
                <h3 className="display-4 mb-10 px-xl-10">
                  Nous offrons des prix avantageux, des produits de qualité
                  supérieure et un service optimal pour votre entreprise.
                </h3>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-11 mx-auto">
                {/* ========== pricing section ========== */}
                <Pricing2 className="mb-10 mb-md-14" />

                {/* ========== faq section ========== */}
                <FAQ5 />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer1 />
    </Fragment>
  );
}
