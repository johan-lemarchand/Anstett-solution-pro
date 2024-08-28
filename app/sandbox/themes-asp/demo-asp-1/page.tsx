import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import NavbarAgency from "@components/navbar/Navbar-agency";
import { Team1 } from "app/sandbox/components/blocks/team";
import { Hero1 } from "app/sandbox/components/blocks/hero";
import { About1 } from "app/sandbox/components/blocks/about";
import { Footer1 } from "app/sandbox/components/blocks/footer";
import { Pricing1 } from "app/sandbox/components/blocks/pricing";
import { Clients1 } from "app/sandbox/components/blocks/clients";
import { Process1 } from "app/sandbox/components/blocks/process";
import { Contact4 } from "app/sandbox/components/blocks/contact";
import { CTA1 } from "app/sandbox/components/blocks/call-to-action";
import { Testimonial1 } from "app/sandbox/components/blocks/testimonial";
import { Services1, Services2 } from "app/sandbox/components/blocks/services";
 
export default function Demo1() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
      <NavbarAgency logoAlt="logo-dark" stickyBox={false}/>      </header>
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero1 />

        {/* ========== what we do section ========== */}
        <Services1 />

        {/* ========== call to action section ========== */}
        <CTA1 />

        {/* ========== our strategy and why choose us section ========== */}
        <section className="wrapper bg-light angled upper-start lower-start">
          <div className="container py-14 pt-md-17 pb-md-15">
            <Process1 />
            <About1 />
          </div>
        </section>

        {/* ========== our team section ========== */}
        <Team1 />

        {/* ========== our solution section ========== */}
        <Services2 />

        {/* ========== testimonial section ========== */}
        <Testimonial1 />

        {/* ========== pricing, contact and clients section ========== */}
        <section className="wrapper bg-light angled upper-end lower-end">
          <div className="container py-14 pt-md-14 pb-md-18">
            <Pricing1 />
            <Contact4 />
            <div className="px-lg-5">
              <Clients1 />
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer1 />
    </Fragment>
  );
}
