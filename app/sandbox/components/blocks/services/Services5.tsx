import { Fragment } from 'react';
import CountUp from '@sandbox/components/reuseable/CountUp';
// GLOBAL CUSTOM COMPONENTS
import { Tiles1 } from '@sandbox/components/elements/tiles';
import ListColumn from '@sandbox/components/reuseable/ListColumn';
import { ServiceCard3 } from '@sandbox/components/reuseable/service-cards';
// CUSTOM DATA
import { aboutList1 } from '@sandbox/data/about';
import { serviceList4 } from '@sandbox/data/service';

export default function Services5() {
  return (
    <Fragment>
      <div className="row gx-lg-8 gx-xl-12 gy-12 align-items-center mb-10 mb-md-13">
        <div className="col-lg-6 position-relative">
          <div
            className="btn btn-circle btn-primary pe-none position-absolute counter-wrapper flex-column d-none d-md-flex"
            style={{
              zIndex: 1,
              top: '50%',
              width: 170,
              height: 170,
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <h3 className="text-white mb-1 mt-n2">
              <span className="counter counter-lg">
                <CountUp end={20} suffix="+" />
              </span>
            </h3>

            <p>Ans d'expérience</p>
          </div>

          <Tiles1 />
        </div>

        <div className="col-lg-6">
          <h3 className="display-4 mb-5">
            Nous apportons des solutions pour faciliter la vie de nos clients.
          </h3>

          <p className="mb-7">
            Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum
            nulla sed consectetur. Integer posuere erat a ante venenatis dapibus
            posuere velit aliquet. Vestibulum id ligula porta felis euismod
            semper. Vestibulum id ligula.
          </p>

          <ListColumn list={aboutList1} />
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-8">
        {serviceList4.map(({ Icon, ...item }) => (
          <div className="col-md-6 col-lg-4" key={item.id}>
            <ServiceCard3 {...item} Icon={<Icon />} />
          </div>
        ))}
      </div>
    </Fragment>
  );
}
