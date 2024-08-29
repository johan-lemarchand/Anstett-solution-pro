import { Fragment } from 'react';
// GLOBAL CUSTOM COMPONENTS
import { About5 } from 'app/sandbox/components/blocks/about';
import { Facts4 } from 'app/sandbox/components/blocks/facts';
import { Pricing2 } from 'app/sandbox/components/blocks/pricing';
import { Process4 } from 'app/sandbox/components/blocks/process';
import { Services9 } from 'app/sandbox/components/blocks/services';
import ListColumn from 'app/sandbox/components/reuseable/ListColumn';

// CUSTOM DATA
const list = [
  [
    'Aenean quam ornare. Curabitur blandit.',
    'Nullam quis risus eget urna mollis ornare.',
  ],
  [
    'Etiam porta euismod malesuada mollis.',
    'Vivamus sagittis lacus vel augue rutrum.',
  ],
];

export default function ServicesTwo() {
  return (
    <Fragment>
      {/* ========== page title section ========== */}
      <section
        className="wrapper image-wrapper bg-image bg-overlay text-white"
        style={{ backgroundImage: 'url(/img/photos/bg1.jpg)' }}
      >
        <div className="container pt-19 pt-md-21 pb-18 pb-md-20 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
              <h1 className="display-1 text-white mb-3">Nos services</h1>
              <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                Nous sommes une entreprise créative qui se concentre sur
                l’établissement de relations à long terme avec les clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== what we do section ========== */}
      <section className="wrapper bg-light">
        <div className="container pt-14 pb-12 pt-md-16 pb-md-14">
          <Services9 />
        </div>
      </section>

      {/* ========== our process section ========== */}
      <Process4 />

      {/* ========== about section ========== */}
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-16 align-items-center">
            <About5 />
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7 order-lg-2">
              <figure>
                <img
                  alt="illustration"
                  className="w-auto"
                  src="/img/illustrations/i7.png"
                  srcSet="/img/illustrations/i7@2x.png 2x"
                />
              </figure>
            </div>

            <div className="col-lg-5">
              <h3 className="display-4 mb-5">
                Nous rendons vos dépenses sans stress pour avoir un contrôle
                parfait.
              </h3>

              <p className="mb-6">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et.
              </p>

              <ListColumn list={list} />
            </div>
          </div>
        </div>
      </section>

      {/* ========== pricing title section ========== */}
      <section className="wrapper bg-soft-primary">
        <div className="container pt-14 pb-18 pt-md-16 pb-md-22 text-center">
          <div className="row">
            <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
              <h2 className="fs-15 text-uppercase text-muted mb-3">
                Nos tarifs
              </h2>
              <h3 className="display-4 mb-15 mb-md-6 px-lg-10">
                Nous offrons des prix avantageux, des produits de qualité
                supérieure et un service optimal pour votre entreprise.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ========== pricing section ========== */}
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <Pricing2 />
        </div>
      </section>

      {/* ========== facts section ========== */}
      <Facts4 />
    </Fragment>
  );
}
