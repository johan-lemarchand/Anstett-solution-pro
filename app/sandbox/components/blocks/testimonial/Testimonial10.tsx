'use client';

import { TestimonialCard3 } from '@sandbox/components/reuseable/testimonial-cards';
// GLOBAL CUSTOM HOOKS
import useIsotope from '@sandbox/hooks/useIsotope';
// CUSTOM DATA
import { testimonialList } from '@sandbox/data/demo-7';

export default function Testimonial10() {
  // used for masonry layout
  useIsotope();

  return (
    <section className="wrapper bg-soft-primary">
      <div className="container py-14 py-md-17">
        <div className="row mt-md-n25">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
            <h2 className="fs-15 text-uppercase text-muted mb-3">
              Clients satisfaits
            </h2>
            <h3 className="display-4 mb-10 px-xl-10 px-xxl-15">
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
