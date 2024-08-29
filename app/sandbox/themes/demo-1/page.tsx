import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "@sandbox/components/blocks/navbar/navbar-1";
import { Team1 } from "@sandbox/components/blocks/team";
import { Hero1 } from "@sandbox/components/blocks/hero";
import { About1 } from "@sandbox/components/blocks/about";
import { Footer1 } from "@sandbox/components/blocks/footer";
import { Pricing1 } from "@sandbox/components/blocks/pricing";
import { Clients1 } from "@sandbox/components/blocks/clients";
import { Process1 } from "@sandbox/components/blocks/process";
import { Contact4 } from "@sandbox/components/blocks/contact";
import { CTA1 } from "@sandbox/components/blocks/call-to-action";
import { Testimonial1 } from "@sandbox/components/blocks/testimonial";
import { Services1, Services2 } from "@sandbox/components/blocks/services";

export default function Demo1() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar info language />
      </header>

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
