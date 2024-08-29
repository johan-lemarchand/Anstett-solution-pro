import NextLink from "@sandbox/components/reuseable/links/NextLink";
// CUSTOM UTILS
import { slideInDownAnimate } from "@sandbox/utils/animation";

export default function Hero4() {
  return (
    <section className="wrapper bg-light position-relative min-vh-70 d-lg-flex align-items-center">
      <div
        style={{ backgroundImage: "url(/img/photos/about16.jpg)" }}
        className="rounded-4-lg-start col-lg-6 order-lg-2 position-lg-absolute top-0 end-0 image-wrapper bg-image bg-cover h-100 min-vh-50"
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="mt-10 mt-md-11 mt-lg-n10 px-10 px-md-11 ps-lg-0 pe-lg-13 text-center text-lg-start">
              <h1 className="display-1 mb-5" style={slideInDownAnimate("600ms")}>
              Installez-vous confortablement et détendez-vous pendant que nous prenons soin de vos besoins professionnels.
              </h1>
              <p className="lead fs-25 lh-sm mb-7 pe-md-10" style={slideInDownAnimate("900ms")}>
              Nous assurons un contrôle parfait de vos projets, sans stress.
              </p>

              <div
                className="d-flex justify-content-center justify-content-lg-start"
                style={slideInDownAnimate("900ms")}>
                <span style={slideInDownAnimate("1200ms")}>
                  <NextLink href="#" title="Découvrir maintenant" className="btn btn-lg btn-primary rounded-pill me-2" />
                </span>

                <span style={slideInDownAnimate("1500ms")}>
                  <NextLink href="#" title="Contactez-nous" className="btn btn-lg btn-outline-primary rounded-pill" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
