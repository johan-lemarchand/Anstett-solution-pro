import Link from 'next/link';
// CUSTOM DATA
import { serviceList14 } from '@sandbox/data/service';

export default function Services26() {
  return (
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="row">
          <div className="col-lg-12 col-xl-10 col-xxl-7 mx-auto text-center">
            <i className="icn-flower text-leaf fs-30 opacity-25" />
            <h2 className="display-5 text-center mt-2 mb-10">
              J’adore photographier les mariages et les couples parce qu’il y a
              tellement de sentiments à capturer.
            </h2>
          </div>
        </div>

        <div className="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0 text-center">
          {serviceList14.map(({ id, title, image, url }) => (
            <div className="col-sm-8 col-md-6 col-lg-4 mx-auto" key={id}>
              <div className="card shadow-lg">
                <figure className="card-img-top overlay overlay-1">
                  <Link href={url}>
                    <img
                      className="img-fluid"
                      src={image['1x']}
                      srcSet={image['2x']}
                      alt=""
                    />
                    <span className="bg" />
                  </Link>

                  <figcaption>
                    <h5 className="from-top mb-0">Regardez la Galerie</h5>
                  </figcaption>
                </figure>

                <div className="card-body p-6">
                  <h3 className="fs-21 mb-0">{title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
