import NextLink from "@sandbox/components/reuseable/links/NextLink";
// CUSTOM UTILS
import { slideInDownAnimate } from "@sandbox/utils/animation";

export default function Hero12() {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container pt-10 pb-15 pt-md-14 pb-md-20">
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 align-items-center">
          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start order-2 order-lg-0">
            <h1 className="display-1 mb-5 mx-md-n5 mx-lg-0" style={slideInDownAnimate("600ms")}>
            Créatif. Intelligent. Incroyable.
            </h1>

            <p className="lead fs-lg mb-7" style={slideInDownAnimate("900ms")}>
            Nous nous concentrons sur le web, le mobile et le design. Notre passion est de convertir les idées en créations remarquables.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate("1200ms")}>
                <NextLink href="#" title="Voir les projets" className="btn btn-primary rounded me-2" />
              </span>

              <span style={slideInDownAnimate("1500ms")}>
                <NextLink href="#" title="En savoir plus" className="btn btn-yellow rounded" />
              </span>
            </div>
          </div>

          <div className="col-lg-7" style={slideInDownAnimate("0ms")}>
            <figure>
              <img
                alt="illustration"
                className="w-auto"
                src="/img/illustrations/i6.png"
                srcSet="/img/illustrations/i6@2x.png 2x"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
