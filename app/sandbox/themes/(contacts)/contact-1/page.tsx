import { Fragment } from 'react';
// GLOBAL CUSTOM COMPONENTS
import { Footer8 } from 'app/sandbox/components/blocks/footer';
import Navbar from 'app/sandbox/components/blocks/navbar/navbar-1';
import ContactForm from 'app/sandbox/components/common/ContactForm';
import Breadcrumb from 'app/sandbox/components/reuseable/Breadcrumb';
import NextLink from 'app/sandbox/components/reuseable/links/NextLink';
// CUSTOM DATA
const breadcrumb = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Contact', url: '#' },
];

export default function Contact() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          language
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark"
          button={
            <NextLink
              title="Contact"
              href="#"
              className="btn btn-sm btn-white rounded-pill"
            />
          }
        />
      </header>

      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        <section
          className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white"
          style={{ backgroundImage: 'url(/img/photos/bg3.jpg)' }}
        >
          <div className="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h1 className="display-1 mb-3 text-white">Prendre contact</h1>
                <Breadcrumb className="text-white" data={breadcrumb} />
              </div>
            </div>
          </div>
        </section>

        <div className="wrapper bg-light angled upper-end">
          <div className="container pb-11">
            {/* ========== contact info section ========== */}
            <div className="row mb-14 mb-md-16">
              <div className="col-xl-10 mx-auto mt-n19">
                <div className="card">
                  <div className="row gx-0">
                    <div className="col-lg-6 align-self-stretch">
                      <div className="map map-full rounded-top rounded-lg-start">
                        <iframe
                          allowFullScreen
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25387.23478654725!2d-122.06115399490332!3d37.309248660190086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4571bd377ab%3A0x394d3fe1a3e178b4!2sCupertino%2C%20CA%2C%20USA!5e0!3m2!1sen!2str!4v1645437305701!5m2!1sen!2str"
                          style={{ width: '100%', height: '100%', border: 0 }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="p-10 p-md-11 p-lg-14">
                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-location-pin-alt" />
                            </div>
                          </div>
                          <div className="align-self-start justify-content-start">
                            <h5 className="mb-1">Adresse</h5>
                            <address>
                              26E rue de Kaltenhouse{' '}
                              <br className="d-none d-md-block" />
                              67240 Oberhoffen-Sur-Moder
                            </address>
                          </div>
                        </div>

                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-phone-volume" />
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1">Téléphone</h5>
                            <p>
                              06 42 18 55 95 <br />
                            </p>
                          </div>
                        </div>

                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-envelope" />
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1">E-mail</h5>
                            <p className="mb-0">
                              <a
                                href="mailto:anstett.solutions.pro@gmail.com"
                                className="link-body"
                              >
                                anstett.solutions.pro@gmail.com
                              </a>
                            </p>
                            <p className="mb-0">
                              <a
                                href="mailto:help-anstett.solutions.pro@gmail.com"
                                className="link-body"
                              >
                                help-anstett.solutions.pro@gmail.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== contact form section ========== */}
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <h2 className="display-4 mb-3 text-center">
                  Laissez-nous un message
                </h2>
                <p className="lead text-center mb-10">
                  Contactez-nous à partir de notre formulaire et nous vous
                  répondrons sous peu.
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
