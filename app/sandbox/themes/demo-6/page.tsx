import { Fragment } from 'react';
// GLOBAL CUSTOM COMPONENTS
import Navbar from '@sandbox/components/blocks/navbar/navbar-1';
import { FAQ1 } from '@sandbox/components/blocks/faq';
import { Hero6 } from '@sandbox/components/blocks/hero';
import { Footer4 } from '@sandbox/components/blocks/footer';
import { Banner1 } from '@sandbox/components/blocks/banner';
import { Process5 } from '@sandbox/components/blocks/process';
import { Services7 } from '@sandbox/components/blocks/services';
import { Testimonial4 } from '@sandbox/components/blocks/testimonial';

import NextLink from '@sandbox/components/reuseable/links/NextLink';
import Alert from '@sandbox/components/common/Alert';
import VideoBanner from './video-banner';

export default function Demo6() {
  return (
    <Fragment>
      {/* ========== alert section ========== */}
      <Alert />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent navbar-light"
          button={
            <NextLink
              title="Essai gratuit"
              href="#"
              className="btn btn-sm btn-primary rounded"
            />
          }
        />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero6 />

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-17">
            {/* ========== features section ========== */}
            <Services7 />

            {/* ========== how it work section ========== */}
            <Process5 />
          </div>
        </section>

        <section className="wrapper bg-soft-primary">
          <div className="container py-14 pt-md-16 pt-lg-0 pb-md-16">
            <div className="row">
              <div className="col-xl-10 mx-auto">
                <VideoBanner />

                {/* ========== faq section ========== */}
                <FAQ1 />
              </div>
            </div>
          </div>
        </section>

        {/* ========== happy customers section ========== */}
        <Testimonial4 />

        {/* ========== banner section ========== */}
        <Banner1 />
      </main>

      {/* ========== footer section ========== */}
      <Footer4 />
    </Fragment>
  );
}
