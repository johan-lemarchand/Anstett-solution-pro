import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import NavbarAgency from "@components/navbar";
import Navbar from "app/sandbox/components/blocks/navbar/navbar-1";
import NextLink from "app/sandbox/components/reuseable/links/NextLink";
import HeroAgency from "@components/blocks/hero/HeroAgency";
import FactsAgency from "@components/blocks/facts/FactsAgency";
import AboutAgency  from "@components/blocks/about/AboutAgency";
import FooterAgency from "@components/blocks/footer/FooterAgency";
import ContactAgency from "@components/blocks/contact/ContactAgency";
import { Portfolio10 } from "app/sandbox/components/blocks/portfolio";
import { Testimonial16 } from "app/sandbox/components/blocks/testimonial";
import ServicesAgency2  from "@components/blocks/services/ServicesAgency2";
import ServicesAgency from "@components/blocks/services/ServicesAgency";

import Carousel from "app/sandbox/components/reuseable/Carousel";
 
export default function homeAgency() {
  return (
    <Fragment>
      {/* ========== header ========== */}
        <header className="wrapper bg-soft-primary">
          {/*<NavbarAgency logoAlt="logo-dark" stickyBox={false}/>*/}
          <Navbar
              search
              navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light"
              button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
          />
        </header>
        {/* ========== main content ========== */}
        <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <HeroAgency />

        <section className="wrapper bg-light">
          <div className="container pb-15 pb-md-17">
            {/* ========== services section ========== */}
            <ServicesAgency />

            {/* ========== why choose sandbox section ========== */}
            <ServicesAgency2 />
          </div>
        </section>

        <div className="swiper-container swiper-auto swiper-auto-xs mb-8">
            <Carousel
              loop
              updateOnWindowResize
              speed={7000}
              spaceBetween={40}
              navigation={false}
              pagination={false}
              slidesPerView="auto"
              autoplay={{ delay: 1 }}
              wrapperClass="swiper-wrapper ticker"
              className="overflow-visible pe-none">
              {[8, 9, 10, 11, 12, 13, 14].map((num) => (
                <figure className="rounded-xl shadow-xl" key={num}>
                  <img src={`/img/photos/ma${num}.jpg`} srcSet={`/img/photos/ma${num}@2x.jpg 2x`} alt="" />
                </figure>
              ))}
            </Carousel>
          </div>

        {/* ========== what makes section ========== */}
        <FactsAgency />

        <section className="wrapper bg-light">
          <div className="container py-16 py-md-18">
            {/* ========== testimonial section ========== */}
            <Testimonial16 />

            {/* ========== latest project section ========== */}
            <Portfolio10 />

            {/* ========== what make us section ========== */}
            <AboutAgency />
          </div>
        </section>

        {/* ========== call to action section ========== */}
        <ContactAgency />
      </main>

      {/* ========== footer section ========== */}
      <FooterAgency />
    </Fragment>
  );
}
