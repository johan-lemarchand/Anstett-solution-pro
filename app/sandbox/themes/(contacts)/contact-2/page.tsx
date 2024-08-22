import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "app/sandbox/components/blocks/navbar/navbar-1";
import { Tiles3 } from "app/sandbox/components/elements/tiles";
import { Footer8 } from "app/sandbox/components/blocks/footer";
import ContactForm from "app/sandbox/components/common/ContactForm";
import Breadcrumb from "app/sandbox/components/reuseable/Breadcrumb";
import NextLink from "app/sandbox/components/reuseable/links/NextLink";

// CUSTOM DATA
const breadcrumb = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Contact", url: "#" }
];

export default function ContactTwo() {
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
        {/* ========== page title section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
            <div className="row">
              <div className="col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-5 mx-auto">
                <h1 className="display-1 mb-3">Prendre contact</h1>
                <Breadcrumb data={breadcrumb} />
              </div>
            </div>
          </div>
        </section>

        <div className="wrapper bg-light angled upper-end">
          <div className="container py-14 py-md-16">
            {/* ========== contact info section ========== */}
            <div className="row gy-10 gx-lg-8 gx-xl-12 mb-16 align-items-center">
              <div className="col-lg-7 position-relative">
                <div className="shape bg-dot primary rellax w-18 h-18" style={{ top: 0, left: "-1.4rem", zIndex: 0 }} />

                <Tiles3 />
              </div>

              <div className="col-lg-5">
                <h2 className="display-4 mb-8">Convaincu? Faisons quelque chose de grand ensemble.</h2>
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1">
                      <i className="uil uil-location-pin-alt" />
                    </div>
                  </div>

                  <div>
                    <h5 className="mb-1">Adresse</h5>
                    <address>
                    26E rue de Kaltenhouse  <br className="d-none d-md-block" />
                    67240 Oberhoffen-Sur-Moder
                    </address>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1">
                      <i className="uil uil-phone-volume" />
                    </div>
                  </div>

                  <div>
                    <h5 className="mb-1">Téléphone</h5>
                    <p>06 42 18 55 95</p>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1">
                      <i className="uil uil-envelope" />
                    </div>
                  </div>

                  <div>
                    <h5 className="mb-1">E-mail</h5>
                    <p className="mb-0">
                      <a href="mailto:anstett.solutions.pro@gmail.com" className="link-body">
                        anstett.solutions.pro@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== contact form section ========== */}
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <h2 className="display-4 mb-3 text-center">Écrivez-nous</h2>
                <p className="lead text-center mb-10">
                  Contactez-nous à partir de notre formulaire et nous vous répondrons sous peu.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
