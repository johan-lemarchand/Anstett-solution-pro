// GLOBAL CUSTOM COMPONENTS
import Navbar from "app/sandbox/components/blocks/navbar/navbar-1";
import { Hero30 } from "app/sandbox/components/blocks/hero";
import { Ads1 } from "app/sandbox/components/blocks/Ads";
import { About31 } from "app/sandbox/components/blocks/about";
import { Facts19 } from "app/sandbox/components/blocks/facts";
import { Footer20 } from "app/sandbox/components/blocks/footer";
import { Pricing11 } from "app/sandbox/components/blocks/pricing";
import { Process20 } from "app/sandbox/components/blocks/process";
import { Services32 } from "app/sandbox/components/blocks/services";
import { Testimonial24 } from "app/sandbox/components/blocks/testimonial";
import { Portfolio14, Portfolio15 } from "app/sandbox/components/blocks/portfolio";

export default function Demo30() {
  return (
    <div className="bg-soft-primary pb-md-6">
      {/* ========== header ========== */}
      <header className="position-absolute w-100">
        {/* ========== topbar section ========== */}
        <div className="gradient-5 text-white fw-bold fs-15 mb-2 position-relative" style={{ zIndex: 1 }}>
          <div className="container py-2 text-center">
            <p className="mb-0">
              ✨ Ici votre pub contactez {" "}
              <a href="#" className="link-white hover d-inline-flex align-items-center">
                Anstett Solutions Pro <i className="uil uil-arrow-right fs-16" />
              </a>
            </p>
          </div>
        </div>

        {/* ========== navbar section ========== */}
        <Navbar social />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        <section className="wrapper overflow-hidden">
          {/* ========== hero section ========== */}
          <Hero30 />

          {/* ========== project slider section ========== */}
          <Portfolio14 />

          {/* ========== service section ========== */}
          <Services32 />
        </section>

        <section
          className="wrapper pattern-wrapper bg-image section-frame"
          style={{ backgroundImage: "url(/img/pattern.png)" }}>
          <div className="container pt-15 pt-md-17 pb-16 pb-md-18">
            {/* ========== working process section ========== */}
            <Process20 />

            {/* ========== our solutions section ========== */}
            <Facts19 />
          </div>
        </section>

        <section className="wrapper overflow-hidden">
          {/* ========== what makes us different section ========== */}
          <About31 />

          {/* ========== creative. smart. awesome section ========== */}
          <Portfolio15 />
        </section>

        {/* ========== we are an award section ========== */}
        <Ads1 />

        <section>
          <div className="container pt-16 pt-md-18 pb-20 pb-md-22">
            {/* ========== we are an award section ========== */}
            <Testimonial24 />

            {/* ========== our pricing section ========== */}
            <Pricing11 />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer20 />
    </div>
  );
}
