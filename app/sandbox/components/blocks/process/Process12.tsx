import NextLink from '@sandbox/components/reuseable/links/NextLink';
import { ServiceCard3 } from '@sandbox/components/reuseable/service-cards';
// CUSTOM DATA
import { processList9 } from '@sandbox/data/process';

export default function Process12() {
  return (
    <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center">
      <div className="col-lg-6">
        <h2 className="fs-15 text-uppercase text-muted mb-3">
          Notre stratégie
        </h2>
        <h3 className="display-4 mb-5">
          3 étapes de travail pour organiser nos projets.
        </h3>
        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Etiam porta sem malesuada magna mollis euismod eget.
          Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis
          risus.
        </p>
        <p className="mb-6">
          Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
          ligula porta felis euismod semper. Aenean lacinia bibendum
          consectetur.
        </p>

        <NextLink
          href="#"
          title="En savoir plus"
          className="btn btn-primary rounded-pill mb-0"
        />
      </div>

      <div className="col-lg-6">
        {processList9.map(({ className, no, title, subtitle, color }) => (
          <ServiceCard3
            key={no}
            title={title}
            description={subtitle}
            className={'d-flex flex-row ' + className}
            Icon={
              <span
                className={`icon btn btn-block btn-lg btn-soft-${color} pe-none mt-1 me-5`}
              >
                <span className="number fs-22">{no}</span>
              </span>
            }
          />
        ))}
      </div>
    </div>
  );
}
