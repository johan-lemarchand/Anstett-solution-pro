import { Fragment } from 'react';
import { ServiceCard2 } from 'app/sandbox/components/reuseable/service-cards';
// CUSTOM DATA
import { serviceList3 } from 'app/sandbox/data/service';

export default function Services4() {
  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-8 col-xl-7 col-xxl-6">
          <h2 className="fs-16 text-uppercase text-line text-primary mb-3">
            Que faisons-nous?
          </h2>
          <h3 className="display-4 mb-9">
            Le service que nous offrons est spécialement conçu pour répondre à
            vos besoins.
          </h3>
        </div>
      </div>

      <div className="row gx-md-8 gy-8 mb-14 mb-md-18">
        {serviceList3.map(item => (
          <ServiceCard2
            {...item}
            key={item.id}
            iconBoxClassNames="icon btn btn-block btn-lg btn-soft-primary pe-none mb-6"
          />
        ))}
      </div>
    </Fragment>
  );
}
