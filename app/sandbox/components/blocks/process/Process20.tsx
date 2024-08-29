import NextLink from '@sandbox/components/reuseable/links/NextLink';
// CUSTOM DATA
import { processList } from '@sandbox/data/demo-30';

export default function Process20() {
  return (
    <div className="row gx-lg-0 gy-10 align-items-center mb-18">
      <div className="col-lg-6 order-lg-2 ms-lg-auto">
        {processList.map(({ id, title, description, className, color }) => (
          <div className={className} key={id}>
            <div className="card-body p-6">
              <div className="d-flex flex-row">
                <div>
                  <span className="icon btn btn-block btn-lg shadow-xl rounded-xl btn-white pe-none me-4">
                    <span className={`number text-${color}`}>{id}</span>
                  </span>
                </div>

                <div>
                  <h3 className={`mb-1 text-${color}`}>{title}</h3>
                  <p className="mb-0">{description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="col-lg-5 text-inverse">
        <h2 className="display-2 mb-3 text-white">
          Notre processus de travail
        </h2>
        <p className="lead fs-lg pe-lg-5">
          Découvrez tout ce qu'il faut savoir et plus encore sur la façon dont
          nous créons nos modèles de processus d’affaires.
        </p>

        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam id
          dolor id nibh ultricies vehicula ut id elit.
        </p>

        <p className="mb-6">
          Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
          ligula porta felis euismod semper. Aenean lacinia bibendum nulla.
        </p>

        <NextLink
          title="En savoir plus"
          href="#"
          className="btn btn-white rounded-xl mb-0"
        />
      </div>
    </div>
  );
}
