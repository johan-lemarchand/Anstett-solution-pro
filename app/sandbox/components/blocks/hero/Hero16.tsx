import CountUp from '@sandbox/components/reuseable/CountUp';
// CUSTOM ICON COMPONENT
import Check from '@sandbox/icons/lineal/Check';
// GLOBAL CUSTOM COMPONENTS
import NextLink from '@sandbox/components/reuseable/links/NextLink';
// CUSTOM UTILS
import { slideInDownAnimate } from '@sandbox/utils/animation';

export default function Hero16() {
  return (
    <section className="wrapper bg-gray">
      <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
        <div className="row gy-10 gy-md-13 gy-lg-0 align-items-center">
          <div className="col-md-8 col-lg-5 d-flex position-relative mx-auto">
            <div className="img-mask mask-1" style={slideInDownAnimate('0ms')}>
              <img
                src="/img/photos/about17.jpg"
                srcSet="/img/photos/about17@2x.jpg 2x"
                alt="About"
              />
            </div>

            <div
              className="card shadow-lg position-absolute"
              style={{
                right: '2%',
                bottom: '10%',
                ...slideInDownAnimate('300ms'),
              }}
            >
              <div className="card-body py-4 px-5">
                <div className="d-flex flex-row align-items-center">
                  <div>
                    <Check className="icon-svg-sm text-primary mx-auto me-3" />
                  </div>

                  <div>
                    <h3 className="counter mb-0 text-nowrap">
                      <CountUp end={250} suffix="+" />
                    </h3>
                    <p className="fs-14 lh-sm mb-0 text-nowrap">
                      Projets réalisés
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 offset-lg-1 col-xxl-5 text-center text-lg-start">
            <h1 className="display-1 mb-5" style={slideInDownAnimate('600ms')}>
              Je suis concepteur et développeur d’interface utilisateur.
            </h1>

            <p
              className="lead fs-25 lh-sm mb-7 px-md-10 px-lg-0"
              style={slideInDownAnimate('900ms')}
            >
              Bonjour! Je m’appelle Julia, je suis conceptrice et développeur
              d’interfaces utilisateur indépendante à Londres. Je suis très
              passionnée sur le travail que je fais.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate('1200ms')}>
                <NextLink
                  title="Voir mes oeuvres"
                  href="#"
                  className="btn btn-lg btn-primary rounded-pill me-2"
                />
              </span>

              <span style={slideInDownAnimate('1500ms')}>
                <NextLink
                  title="Contactez moi"
                  href="#"
                  className="btn btn-lg btn-outline-primary rounded-pill"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
