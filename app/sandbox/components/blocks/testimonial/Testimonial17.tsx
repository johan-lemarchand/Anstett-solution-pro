'use client';

import { TestimonialCard3 } from '@sandbox/components/reuseable/testimonial-cards';
// GLOBAL CUSTOM HOOKS
import useIsotope from '@sandbox/hooks/useIsotope';
// CUSTOM DATA
import { testimonialList } from '@sandbox/data/demo-7';

export default function Testimonial17() {
  // used for masonry grid layout
  useIsotope();

  return (
    <section className="wrapper bg-gradient-primary">
      <div className="container pt-12 pt-lg-8 pb-14 pb-md-17">
        <div className="row text-center">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="fs-16 text-uppercase text-primary mb-3">
              Clients satisfaits
            </h2>
            <h3 className="display-3 mb-10 px-xxl-10">
              Ne nous croyez pas sur parole. Voyez ce que les clients disent de
              nous.
            </h3>
          </div>
        </div>

        <div className="grid">
          <div className="row isotope gy-6">
            {testimonialList.map(item => (
              <div className="item col-md-6 col-xl-4" key={item.id}>
                <TestimonialCard3 {...item} shadow />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
