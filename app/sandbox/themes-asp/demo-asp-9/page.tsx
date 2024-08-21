import { Fragment } from "react";
// -------- custom component -------- //
import Navbar from "app/sandbox/components/blocks/navbar/navbar-1";
import { FAQ2 } from "app/sandbox/components/blocks/faq";
import { Hero9 } from "app/sandbox/components/blocks/hero";
import { Footer8 } from "app/sandbox/components/blocks/footer";
import { Process9 } from "app/sandbox/components/blocks/process";
import { Clients3 } from "app/sandbox/components/blocks/clients";
import { Pricing6 } from "app/sandbox/components/blocks/pricing";
import { Services12 } from "app/sandbox/components/blocks/services";
import { Testimonial10 } from "app/sandbox/components/blocks/testimonial";

export default function Demo9() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          info
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent navbar-light"
          button={
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#modal-signin"
              className="btn btn-sm btn-primary rounded-pill">
              S'inscrire
            </a>
          }
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero9 />

        <section className="wrapper bg-light">
          <div className="container py-14 pt-md-17 pb-md-25">
            {/* ========== clients section ========== */}
            <Clients3 />

            {/* ========== why choose section ========== */}
            <Services12 />
          </div>
        </section>

        {/* ========== testimonial section ========== */}
        <Testimonial10 />

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-17">
            {/* ========== how it works section ========== */}
            <Process9 />

            {/* ========== pricing section ========== */}
            <Pricing6 />
          </div>
        </section>

        {/* ========== faq section ========== */}
        <FAQ2 titleColor="muted" />
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
