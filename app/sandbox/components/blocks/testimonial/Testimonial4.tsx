// GLOBAL CUSTOM COMPONENTS
import Carousel from '@sandbox/components/reuseable/Carousel';
import { TestimonialCard3 } from '@sandbox/components/reuseable/testimonial-cards';
// CUSTOM UTILS LIBRARY FUNCTIONS
import carouselBreakpoints from '@sandbox/utils/carouselBreakpoints';
// CUSTOM DATA
import { testimonialList2 } from '@sandbox/data/testimonial-list';

export default function Testimonial4() {
  return (
    <div className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
            <h2 className="fs-15 text-uppercase text-muted mb-3">
              Clients satisfaits
            </h2>
            <h3 className="display-4 mb-6 px-xl-10 px-xxl-15">
              Ne nous croyez pas sur parole. Voyez ce que les clients disent de
              nous.
            </h3>
          </div>
        </div>

        <div className="swiper-container dots-closer mb-6">
          <Carousel
            spaceBetween={0}
            grabCursor
            navigation={false}
            breakpoints={carouselBreakpoints}
          >
            {testimonialList2.map((item, i) => (
              <div className="item-inner" key={i}>
                <TestimonialCard3 {...item} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
