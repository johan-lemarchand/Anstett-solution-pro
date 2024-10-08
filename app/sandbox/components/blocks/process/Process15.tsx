import { processList11 } from '@sandbox/data/process';

export default function Process15() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-15 mb-md-17 align-items-center">
      <div className="col-lg-7">
        <figure>
          <img
            alt="process"
            className="w-auto"
            src="/img/illustrations/i9.png"
            srcSet="/img/illustrations/i9@2x.png 2x"
          />
        </figure>
      </div>

      <div className="col-lg-5">
        <h3 className="fs-16 text-uppercase text-muted mb-3">
          Comment ça marche?
        </h3>
        <h3 className="display-4 mb-6">
          Découvrez tout sur la création d’un business model.
        </h3>

        <div className="row gy-4">
          {processList11.map(({ id, title, description }) => (
            <div className="col-md-6" key={id}>
              <h4>
                <span className="text-primary">{id}.</span> {title}
              </h4>
              <p className="mb-0">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
