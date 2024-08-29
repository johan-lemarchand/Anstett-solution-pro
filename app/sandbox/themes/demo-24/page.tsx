import { Fragment } from 'react';

// GLOBAL CUSTOM COMPONENTS
import Navbar4 from 'app/sandbox/components/blocks/navbar/navbar-4';
import { Hero24 } from 'app/sandbox/components/blocks/hero';
import { About25 } from 'app/sandbox/components/blocks/about';
import { Banner2 } from 'app/sandbox/components/blocks/banner';
import { Footer15 } from 'app/sandbox/components/blocks/footer';
import { Contact12 } from 'app/sandbox/components/blocks/contact';
import { Services27 } from 'app/sandbox/components/blocks/services';
import { Portfolio5 } from 'app/sandbox/components/blocks/portfolio';
import { Testimonial19 } from 'app/sandbox/components/blocks/testimonial';

export default function Demo24() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-gray">
        <Navbar4 onePageDemo />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero24 />

        {/* ========== our service section ========== */}
        <Services27 />

        {/* ========== banner section ========== */}
        <Banner2 />

        {/* ========== portfolio section ========== */}
        <Portfolio5 />

        {/* ========== happy customer section ========== */}
        <Testimonial19 />

        {/* ========== about me section ========== */}
        <About25 />

        {/* ========== contact section ========== */}
        <Contact12 />
      </main>

      {/* ========== footer section ========== */}
      <Footer15 />
    </Fragment>
  );
}
