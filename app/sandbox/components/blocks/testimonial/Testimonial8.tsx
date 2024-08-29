'use client';

import { TestimonialCard3 } from '@sandbox/components/reuseable/testimonial-cards';
// GLOBAL CUSTOM HOOKS
import useIsotope from '@sandbox/hooks/useIsotope';
// CUSTOM DATA
import { testimonialList } from '@sandbox/data/demo-7';

export default function Testimonial8() {
  // used for masonry layout
  useIsotope();

  return (
    <div>
      <h2 className="display-4 text-center mb-8">Clients satisfaits</h2>

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
  );
}
