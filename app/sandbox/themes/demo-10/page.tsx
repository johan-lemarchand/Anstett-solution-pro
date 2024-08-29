import { Fragment } from 'react';
// GLOBAL CUSTOM COMPONENTS
import Navbar from 'app/sandbox/components/blocks/navbar/navbar-1';
import { Hero10 } from 'app/sandbox/components/blocks/hero';
import { Facts7 } from 'app/sandbox/components/blocks/facts';
import { About11 } from 'app/sandbox/components/blocks/about';
import { Footer8 } from 'app/sandbox/components/blocks/footer';
import { Contact5 } from 'app/sandbox/components/blocks/contact';
import { Clients1 } from 'app/sandbox/components/blocks/clients';
import { Tiles8, Tiles9 } from 'app/sandbox/components/elements/tiles';
import { Services13, Services6 } from 'app/sandbox/components/blocks/services';
import { TestimonialCard4 } from 'app/sandbox/components/reuseable/testimonial-cards';
import NextLink from 'app/sandbox/components/reuseable/links/NextLink';
import Topbar from 'app/sandbox/components/elements/Topbar';

export default function Demo10() {
  return (
    <Fragment>
      {/* ========== topbar ========== */}
      <Topbar bgColor="bg-navy" />

      {/* ========== header ========== */}
      <header className="wrapper bg-light">
        <Navbar
          language
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
        <Hero10 />

        {/* ========== services section ========== */}
        <Services13 />

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-17">
            <Services6
              rowClassNames="mb-14 mb-md-17"
              colOne={<Tiles8 hiddenShape />}
              title="Gérez vos dépenses sans stress pour que vous puissiez avoir le contrôle parfait."
              description="Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor
              fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
              tellus ac cursus commodo."
            />

            <Services6
              colOne={<Tiles9 hiddenShape />}
              title="Nous apportons des solutions pour gérer vos finances de la meilleure façon."
              description="Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor
              fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
              tellus ac cursus commodo."
            />
          </div>
        </section>

        {/* ========== fact section ========== */}
        <Facts7 />

        <section className="wrapper bg-light">
          <div className="container py-16 py-md-18">
            {/* ========== testimonial section ========== */}
            <TestimonialCard4 className="mt-n18 mt-md-n23 mb-14 mb-md-18" />

            {/* ========== about section ========== */}
            <About11 />

            {/* ========== contact section ========== */}
            <Contact5 />

            {/* ========== clients section ========== */}
            <div className="px-lg-5">
              <Clients1 />
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
