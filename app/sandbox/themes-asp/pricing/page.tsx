import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Footer8 } from "app/sandbox/components/blocks/footer";
import { Pricing2 } from "app/sandbox/components/blocks/pricing";
import { CTA3 } from "app/sandbox/components/blocks/call-to-action";
import Navbar from "app/sandbox/components/blocks/navbar/navbar-1";
import IconBox from "app/sandbox/components/reuseable/IconBox";
import Carousel from "app/sandbox/components/reuseable/Carousel";
import Accordion from "app/sandbox/components/reuseable/accordion";
import NextLink from "app/sandbox/components/reuseable/links/NextLink";
import { TestimonialCard3 } from "app/sandbox/components/reuseable/testimonial-cards";
// CUSTOM DATA
import data from "app/sandbox/data/pricing-page";
// CUSTOM UTILS
import carouselBreakpoints from "app/sandbox/utils/carouselBreakpoints";

export default function Pricing() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-20 pt-md-14 pb-md-22 text-center">
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <h1 className="display-1 mb-3">Nos tarifs</h1>
                <p className="lead mb-0 px-xl-10 px-xxl-13">
                Nous offrons des prix avantageux, des produits de qualité supérieure et un service de qualité pour votre entreprise.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper">
          <div className="container pb-14 pb-md-16">
            {/* ========== our pricing section ========== */}
            <Pricing2 className="mt-n18 mt-md-n21 mb-12 mb-md-15" />

            {/* ========== our services section ========== */}
            <div className="row gx-lg-8 gx-xl-12 gy-6 mb-14 mb-md-19">
              {data.serviceList.map(({ id, icon, title, description, linkUrl }) => (
                <div className="col-lg-4" key={id}>
                  <div className="d-flex flex-row">
                    <div>
                      <IconBox icon={icon} className="icon btn btn-circle disabled btn-primary me-4" />
                    </div>

                    <div>
                      <h4>{title}</h4>
                      <p className="mb-2">{description}</p>
                      <NextLink title="En savoir plus" href={linkUrl} className="more hover" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ========== faq section ========== */}
            <div className="row">
              <h2 className="display-4 mb-3 text-center">Questions fréquentes sur la tarification</h2>
              <p className="lead text-center mb-10 px-md-16 px-lg-0">
              Si vous ne voyez pas de réponse à votre question, vous pouvez nous envoyer un e-mail depuis notre formulaire de contact.
              </p>

              <div className="row mb-14 mb-md-18">
                {data.accordionList.map((items, i) => (
                  <div className="col-lg-6 mb-0" key={i}>
                    <div className="accordion-wrapper" id="accordion">
                      {items.map((item) => (
                        <Accordion key={item.no} {...item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ========== happy customers section ========== */}
            <h2 className="display-4 mb-3 text-center">Clients satisfaits</h2>
            <p className="lead text-center mb-6 px-md-16 px-lg-0">
            La satisfaction du client est notre objectif principal. Voyez ce que nos clients disent de nous.
            </p>

            <div className="position-relative">
              <div
                className="shape rounded-circle bg-soft-yellow rellax w-16 h-16"
                style={{ bottom: "0.5rem", right: "-1.7rem", transform: "translate(0px, 2px, 0px)" }}
              />

              <div
                className="shape bg-dot primary rellax w-16 h-16"
                style={{ top: "-1rem", left: "-1.7rem", transform: "translate(0px, -31px, 0px)" }}
              />

              <div className="swiper-container dots-closer mb-6">
                <Carousel grabCursor spaceBetween={0} navigation={false} breakpoints={carouselBreakpoints}>
                  {data.testimonialList.map((item, i) => (
                    <div className="item-inner" key={i}>
                      <TestimonialCard3 hideRating {...item} />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        {/* ========== our community section ========== */}
        <CTA3 />
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
