import { ServiceCard2 } from '@sandbox/components/reuseable/service-cards';
// CUSTOM DATA
import { serviceList2 } from '@sandbox/data/service';
// CUSTOM UTILS LIBRARY FUNCTIONS
import { slideInDownAnimate } from '@sandbox/utils/animation';

export default function Services13() {
  return (
    <section className="wrapper bg-dark">
      <div className="container py-14 py-md-16">
        <figure
          className="rounded mt-md-n21 mt-lg-n23 mb-14"
          style={slideInDownAnimate('900ms')}
        >
          <img
            src="/img/photos/about15.jpg"
            srcSet="/img/photos/about15@2x.jpg 2x"
            alt=""
          />
        </figure>

        <div className="row">
          <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
            <h3 className="display-4 text-white mb-10">
              Le service que nous offrons est spécialement conçu pour répondre à
              vos besoins.
            </h3>
          </div>
        </div>

        <div className="row gx-md-8 gy-8 text-center text-white">
          {serviceList2.map(item => (
            <ServiceCard2
              {...item}
              key={item.id}
              titleColor="text-white"
              hiddenBtn
            />
          ))}
        </div>
      </div>
    </section>
  );
}
