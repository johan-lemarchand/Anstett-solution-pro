'use client';

import { slideInDownAnimate } from '@sandbox/utils/animation';
// GLOBAL CUSTOM COMPONENTS
import Carousel from '@sandbox/components/reuseable/Carousel';
import NextLink from '@sandbox/components/reuseable/links/NextLink';
// GLOBAL CUSTOM HOOKS
import useLightBox from '@sandbox/hooks/useLightBox';

export default function Hero11() {
  // use video popup
  useLightBox();

  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 bg-content text-white"
      style={{ backgroundImage: 'url(/img/photos/bg4.jpg)' }}
    >
      <div className="container pt-18 pb-16">
        <div className="row gx-0 gy-12 align-items-center">
          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 content text-center text-lg-start">
            <h1
              className="display-2 mb-5 text-white"
              style={slideInDownAnimate('600ms')}
            >
              Élaborer des solutions spécifiques au projet avec expertise.
            </h1>

            <p
              className="lead fs-lg lh-sm mb-7 pe-xl-10"
              style={slideInDownAnimate('900ms')}
            >
              Nous sommes une entreprise créative qui se concentre sur
              l’établissement de relations à long terme avec les clients.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate('1200ms')}>
                <NextLink
                  title="Découvrir maintenant"
                  href="#"
                  className="btn btn-lg btn-white rounded-pill me-2"
                />
              </span>

              <span style={slideInDownAnimate('1500ms')}>
                <NextLink
                  title="Contactez-nous"
                  href="#"
                  className="btn btn-lg btn-outline-white rounded-pill"
                />
              </span>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1">
            <div className="swiper-container dots-over shadow-lg">
              <Carousel slidesPerView={1}>
                <img
                  alt="About"
                  className="rounded"
                  src="/img/photos/about21.jpg"
                  srcSet="/img/photos/about21@2x.jpg 2x"
                />

                <div>
                  <a
                    data-glightbox
                    data-gallery="hero"
                    href="/media/movie.mp4"
                    className="btn btn-circle btn-white btn-play ripple mx-auto mb-5 position-absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%,-50%)',
                      zIndex: 3,
                    }}
                  >
                    <i className="icn-caret-right" />
                  </a>

                  <img
                    alt="About"
                    className="rounded"
                    src="/img/photos/about22.jpg"
                    srcSet="/img/photos/about22@2x.jpg 2x"
                  />
                </div>

                <img
                  alt="About"
                  className="rounded"
                  src="/img/photos/about23.jpg"
                  srcSet="/img/photos/about23@2x.jpg 2x"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
