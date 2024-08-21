import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Team8 } from "app/sandbox/components/blocks/team";
import { Clients1 } from "app/sandbox/components/blocks/clients";
import { Process8 } from "app/sandbox/components/blocks/process";
import Carousel from "app/sandbox/components/reuseable/Carousel";
import ProgressList from "app/sandbox/components/common/ProgressList";
import AccordionList from "app/sandbox/components/common/AccordionList";
import { TestimonialCard2 } from "app/sandbox/components/reuseable/testimonial-cards";
// CUSTOM ICON COMPONENTS
import Target from "app/sandbox/icons/lineal/Target";
import BarChart from "app/sandbox/icons/lineal/BarChart";
import Megaphone from "app/sandbox/icons/lineal/Megaphone";
import SettingsThree from "app/sandbox/icons/lineal/SettingsThree";
// CUSTOM DATA
import { testimonialList2 } from "app/sandbox/data/testimonial-list";
const serviceList2 = [
  {
    id: 1,
    title: "Marketing",
    Icon: <Megaphone />,
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  },
  {
    id: 2,
    title: "Stratégie",
    Icon: <Target className="icon-svg-md text-green mb-3" />,
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  },
  {
    id: 3,
    title: "Développement",
    Icon: <SettingsThree />,
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  },
  {
    id: 4,
    Icon: <BarChart />,
    title: "Analyse de données",
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  }
];

export default function AboutTwo() {
  return (
    <Fragment>
      {/* ========== page title section ========== */}
      <section className="wrapper bg-soft-primary">
        <div className="container pt-10 pb-20 pt-md-14 pb-md-23 text-center">
          <div className="row">
            <div className="col-xl-5 mx-auto mb-6">
              <h1 className="display-1 mb-3">Qui sommes-nous</h1>
              <p className="lead mb-0">Une entreprise qui convertit les idées en réalisations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== services section ========== */}
      <section className="wrapper bg-light">
        <div className="container pb-14 pb-md-16">
          <div className="row text-center mb-12 mb-md-15">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-n18 mt-md-n22">
              <figure>
                <img
                  alt=""
                  className="w-auto"
                  src="/img/illustrations/i8.png"
                  srcSet="/img/illustrations/i8@2x.png 2x"
                />
              </figure>
            </div>
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-6 mb-10 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <ProgressList />
            </div>

            <div className="col-lg-6">
              <h3 className="display-5 mb-5">
              Le service complet que nous offrons est spécialement conçu pour répondre à vos besoins.
              </h3>

              <p>
                Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur duis
                mollis commodo.
              </p>
            </div>
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-6 gy-md-0 text-center">
            {serviceList2.map(({ id, Icon, title, description }) => (
              <div className="col-md-6 col-lg-3" key={id}>
                {Icon}
                <h4>{title}</h4>
                <p className="mb-2">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrapper bg-gray">
        <div className="container py-14 py-md-16">
          {/* ========== how it work section ========== */}
          <Process8 />

          {/* ========== why choose us section ========== */}
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7 order-lg-2">
              <figure>
                <img
                  alt=""
                  className="w-auto"
                  src="/img/illustrations/i2.png"
                  srcSet="/img/illustrations/i2@2x.png 2x"
                />
              </figure>
            </div>

            <div className="col-lg-5">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">Pourquoi nous choisir?</h2>
              <h3 className="display-5 mb-7">Quelques raisons pour lesquelles nos clients nous choisissent.</h3>
              <AccordionList />
            </div>
          </div>
        </div>
      </section>

      {/* ========== team section ========== */}
      <Team8 />

      <section className="wrapper bg-gray">
        <div className="container py-14 py-md-16">
          {/* ========== testimonial section ========== */}
          <div className="row gx-lg-8 gx-xl-12 gy-6 mb-15 align-items-center">
            <div className="col-lg-7 order-lg-2">
              <figure>
                <img
                  alt=""
                  className="w-auto"
                  src="/img/illustrations/i4.png"
                  srcSet="/img/illustrations/i4@2x.png 2x"
                />
              </figure>
            </div>

            <div className="col-lg-5 mt-lg-12">
              <div className="swiper-container dots-closer mb-6">
                <Carousel grabCursor slidesPerView={1} navigation={false}>
                  {testimonialList2.map((item, i) => (
                    <TestimonialCard2 key={i} {...item} />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>

          {/* ========== clients section ========== */}
          <div className="px-lg-5">
            <Clients1 />
          </div>
        </div>
      </section>

      {/* ========== contact section ========== */}
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7">
              <figure>
                <img
                  alt=""
                  className="w-auto"
                  src="/img/illustrations/i5.png"
                  srcSet="/img/illustrations/i5@2x.png 2x"
                />
              </figure>
            </div>

            <div className="col-lg-5">
              <h3 className="display-4 mb-7">Vous avez des questions? N’hésitez pas à nous contacter.</h3>
              <div className="d-flex flex-row">
                <div>
                  <div className="icon text-primary fs-28 me-4 mt-n1">
                    <i className="uil uil-location-pin-alt" />
                  </div>
                </div>
                <div>
                  <h5 className="mb-1">Adresse</h5>
                  <address>26E rue de Kaltenhouse 67240 Oberhoffen-Sur-Moder</address>
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
                  <p>06 42 18 55 95</p>
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
                    <a href="mailto:anstett.solutions.pro@gmail.com" className="link-body">
                      anstett.solutions.pro@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
