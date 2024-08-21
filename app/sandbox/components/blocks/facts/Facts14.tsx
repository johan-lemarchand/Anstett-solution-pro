import { Fragment } from "react";
import CountUp from "app/sandbox/components/reuseable/CountUp";
// CUSTOM DATA
import { factList7 } from "app/sandbox/data/facts";

export default function Facts14() {
  return (
    <Fragment>
      <div className="row text-center mb-7">
        <div className="col-lg-11 col-xl-10 col-xxl-9 mx-auto">
          <h2 className="fs-16 text-uppercase text-muted mb-3">Rejoindre notre communauté</h2>
          <h3 className="display-3 px-lg-12 px-xxl-14">
          Plus de 5000 clients nous font confiance. Rejoignez-les dès maintenant et développez votre entreprise.
          </h3>
        </div>
      </div>

      <div className="row mb-6">
        <div className="col-md-10 col-lg-9 col-xl-7 mx-auto">
          <div className="row align-items-center counter-wrapper gy-4 gy-md-0">
            {factList7.map(({ id, title, amount, suffix }) => (
              <div className="col-md-4 text-center" key={id}>
                <h3 className="counter counter-lg text-primary">
                  <CountUp end={amount} suffix={suffix} />
                </h3>
                <p>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <figure>
        <img src="/img/photos/about26.png" srcSet="/img/photos/about26@2x.png 2x" alt="" />
      </figure>
    </Fragment>
  );
}
