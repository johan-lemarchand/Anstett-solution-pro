import { Fragment } from 'react';
import { ServiceCard6 } from '@sandbox/components/reuseable/service-cards';
// CUSTOM DATA
import { serviceList2 } from '@sandbox/data/service';

export default function Services14() {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 className="fs-15 text-uppercase text-primary mb-3">
            Que faisons-nous?
          </h2>
          <h3 className="display-4 mb-10 px-xl-10">
            Le service que nous offrons est spécialement conçu pour répondre à
            vos besoins.
          </h3>
        </div>
      </div>

      <div className="position-relative mb-14 mb-md-17">
        <div
          className="shape rounded-circle bg-soft-primary rellax w-16 h-16"
          style={{ bottom: '-0.5rem', right: '-2.5rem', zIndex: 0 }}
        />
        <div
          className="shape bg-dot primary rellax w-16 h-17"
          style={{ top: '-0.5rem', left: '-2.5rem', zIndex: 0 }}
        />

        <div className="row gx-md-5 gy-5 text-center">
          {serviceList2.map(item => (
            <ServiceCard6 key={item.id} {...item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
