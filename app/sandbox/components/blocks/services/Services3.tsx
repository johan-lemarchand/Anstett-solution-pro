import { Fragment } from "react";
import { ServiceCard2 } from "app/sandbox/components/reuseable/service-cards";
// CUSTOM DATA
import { serviceList2 } from "app/sandbox/data/service";

export default function Services3() {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
          <h2 className="fs-15 text-uppercase text-muted mb-3 ">Que faisons-nous?</h2>
          <h3 className="display-4 mb-5 mb-10">Le service que nous offrons est spécialement conçu pour répondre à vos besoins.</h3>
        </div>
      </div>

      <div className="row gx-md-8 gy-8 text-center mb-14 mb-md-17">
        {serviceList2.map((item) => (
          <ServiceCard2 key={item.id} {...item} />
        ))}
      </div>
    </Fragment>
  );
}
