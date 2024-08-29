import NextLink from 'app/sandbox/components/reuseable/links/NextLink';
// CUSTOM UTILS
import { fadeInAnimate, slideInDownAnimate } from 'app/sandbox/utils/animation';

export default function Hero18() {
  return (
    <section className="wrapper bg-light">
      <div className="container-card">
        <div
          className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 mt-2 mb-5"
          style={{ backgroundImage: 'url(/img/photos/bg22.png)' }}
        >
          <div className="card-body py-14 px-0">
            <div className="container">
              <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center text-center text-lg-start">
                <div className="col-lg-6">
                  <h1
                    className="display-2 mb-4 me-xl-5 me-xxl-0"
                    style={slideInDownAnimate('900ms')}
                  >
                    Networking{' '}
                    <span className="text-gradient gradient-1">solutions</span>{' '}
                    pour une communication mondiale
                  </h1>

                  <p
                    className="lead fs-23 lh-sm mb-7 pe-xxl-15"
                    style={slideInDownAnimate('1200ms')}
                  >
                    Nous sommes une entreprise qui se concentre sur
                    l’établissement de relations à long terme avec les clients.
                  </p>

                  <div style={slideInDownAnimate('1500ms')}>
                    <NextLink
                      title="Découvrir maintenant"
                      href="#"
                      className="btn btn-lg btn-gradient gradient-1 rounded"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <img
                    alt="demo"
                    className="img-fluid mb-n18"
                    src="/img/illustrations/3d6.png"
                    srcSet="/img/illustrations/3d6@2x.png 2x"
                    style={fadeInAnimate('300ms')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
