import NextLink from "@sandbox/components/reuseable/links/NextLink";
// CUSTOM UTILS
import { slideInDownAnimate } from "@sandbox/utils/animation";

export default function Hero5() {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container pt-10 pb-15 pt-md-14 pb-md-20 text-center">
        <div className="row">
          <div className="col-md-10 col-lg-8 col-xl-8 col-xxl-6 mx-auto mb-13">
            <h1 className="display-1 mb-4" style={slideInDownAnimate("0ms")}>
              Il n’a jamais été aussi facile de garder le contrôle sur vos factures
            </h1>

            <p className="lead fs-lg px-xl-12 px-xxl-6 mb-7" style={slideInDownAnimate("300ms")}>
              Atteignez facilement vos objectifs d’épargne. Ayez toutes vos dépenses, revenus récurrents et ponctuels en un seul endroit.
            </p>

            <div className="d-flex justify-content-center" style={slideInDownAnimate("600ms")}>
              <span style={slideInDownAnimate("900ms")}>
                <NextLink href="#" title="Démarrer" className="btn btn-primary rounded mx-1" />
              </span>

              <span style={slideInDownAnimate("1200ms")}>
                <NextLink href="#" title="Essai gratuit" className="btn btn-green rounded mx-1" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
