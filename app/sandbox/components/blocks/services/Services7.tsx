import { Fragment } from 'react';
import { ServiceCard3 } from '@sandbox/components/reuseable/service-cards';
// CUSTOM DATA
import { serviceList6 } from '@sandbox/data/service';

export default function Services7() {
  return (
    <Fragment>
      <div className="row text-center mt-xl-12">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 className="fs-15 text-uppercase text-muted mb-3">App Features</h2>
          <h3 className="display-4 mb-9 px-xxl-11">
            Anstett Solutions Pro est la seule application dont vous avez besoin
            pour suivre vos objectifs pour une meilleure santé.
          </h3>
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-8 mb-14 mb-md-17">
        {serviceList6.map(({ Icon, color, ...item }) => (
          <div className="col-md-6 col-lg-4" key={item.id}>
            <ServiceCard3
              {...item}
              Icon={<Icon className={`icon-svg-sm text-${color} me-4`} />}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
}
