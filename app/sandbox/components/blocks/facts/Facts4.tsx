import CountUp from '@sandbox/components/reuseable/CountUp';
// CUSTOM DATA
import { factList3 } from '@sandbox/data/facts';

export default function Facts4() {
  return (
    <section
      className="wrapper image-wrapper bg-auto no-overlay bg-image text-center bg-map"
      style={{ backgroundImage: 'url(/img/map.png)' }}
    >
      <div className="container pt-0 pb-14 pt-md-16 pb-md-18">
        <div className="row">
          <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
            <h2 className="fs-15 text-uppercase text-muted mb-3">
              Rejoindre notre communauté
            </h2>
            <h3 className="display-4 mb-8 px-lg-12">
              Plus de 5000 clients nous font confiance. Rejoignez-les dès
              maintenant et développez votre entreprise.
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 col-lg-9 col-xl-7 mx-auto">
            <div className="row align-items-center counter-wrapper gy-4 gy-md-0">
              {factList3.map(({ id, title, value }) => (
                <div className="col-md-4 text-center" key={id}>
                  <h3 className="counter counter-lg text-primary">
                    <CountUp end={value} />
                  </h3>
                  <p>{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
