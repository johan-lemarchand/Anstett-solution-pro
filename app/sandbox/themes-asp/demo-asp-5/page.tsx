import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "app/sandbox/components/blocks/navbar/navbar-1";
import { Hero5 } from "app/sandbox/components/blocks/hero";
import { Footer6 } from "app/sandbox/components/blocks/footer";
import { Process4 } from "app/sandbox/components/blocks/process";
import { Pricing4 } from "app/sandbox/components/blocks/pricing";
import { Clients1 } from "app/sandbox/components/blocks/clients";
import { Services6 } from "app/sandbox/components/blocks/services";
import { CTA2 } from "app/sandbox/components/blocks/call-to-action";
import { Testimonial7 } from "app/sandbox/components/blocks/testimonial";
import { Tiles6, Tiles7, Tiles8, Tiles9 } from "app/sandbox/components/elements/tiles";

export default function Demo5() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          logoAlt="logo"
          button={
            <div className="d-flex align-items-center gap-3">
              <a className="nav-link" data-bs-toggle="modal" data-bs-target="#modal-signin">
                S'inscrire
              </a>
              <button className="btn btn-sm btn-primary rounded" data-bs-toggle="modal" data-bs-target="#modal-signup">
                S'enregistrer
              </button>
            </div>
          }
        />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero5 />

        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16 mb-lg-21 mb-xl-23">
            <Tiles6 />

            {/* ========== service-1 section ========== */}
            <Services6
              bulletColor="red"
              colOne={<Tiles7 />}
              rowClassNames="mb-14 mb-md-18"
              title="Nous avons pensé à nos solutions pour accompagner chaque étape de croissance."
              description="Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor
              fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
              tellus ac cursus commodo."
            />

            {/* ========== service-2 section ========== */}
            <Services6
              colOne={<Tiles8 />}
              bulletColor="green"
              rowClassNames="mb-14 mb-md-18"
              title="Ayez le parfait contrôle."
              description="Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor
              fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
              tellus ac cursus commodo."
            />

            {/* ========== service-3 section ========== */}
            <Services6
              colOne={<Tiles9 />}
              bulletColor="yellow"
              title="Nous apportons des solutions pour gérer vos finances de la meilleure façon."
              description="Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor
              fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
              tellus ac cursus commodo."
            />
          </div>
        </section>

        {/* ========== our process section ========== */}
        <Process4 />

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-17">
            {/* ========== testimonial section ========== */}
            <Testimonial7 />

            {/* ========== clients section ========== */}
            <div className="px-lg-5">
              <Clients1 />
            </div>
          </div>
        </section>

        {/* ========== pricing section ========== */}
        <Pricing4 />

        {/* ========== call to action section ========== */}
        <CTA2 />
      </main>

      {/* ========== footer section ========== */}
      <Footer6 />
    </Fragment>
  );
}
