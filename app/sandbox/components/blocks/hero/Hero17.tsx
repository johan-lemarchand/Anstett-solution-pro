import NextLink from "@sandbox/components/reuseable/links/NextLink";
// CUSTOM UTILS
import { slideInDownAnimate } from "@sandbox/utils/animation";

export default function Hero17() {
  return (
    <section className="wrapper bg-gray">
      <div className="container pt-12 pt-md-16 text-center">
        <div className="row">
          <div className="col-lg-8 col-xxl-7 mx-auto text-center">
            <h2 className="fs-16 text-uppercase ls-xl text-dark mb-4" style={slideInDownAnimate("600ms")}>
              Bonjour! C’est Anstett Solutions Pro
            </h2>

            <h1 className="display-1 fs-58 mb-7" style={slideInDownAnimate("900ms")}>
              Nous apportons des solutions rapides pour votre entreprise.
            </h1>

            <div className="d-flex justify-content-center mb-5 mb-md-0">
              <span style={slideInDownAnimate("1200ms")}>
                <NextLink title="Découvrir maintenant" href="#" className="btn btn-lg btn-primary rounded-pill me-2" />
              </span>

              <span style={slideInDownAnimate("1500ms")}>
                <NextLink title="Contactez-nous" href="#" className="btn btn-lg btn-outline-primary rounded-pill" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <figure className="position-absoute" style={{ bottom: 0, left: 0, zIndex: 2 }}>
        <img src="/img/photos/bg11.jpg" alt="" />
      </figure>
    </section>
  );
}
