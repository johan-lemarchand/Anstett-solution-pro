import { Fragment } from "react";
import { Tiles3 } from "@sandbox/components/elements/tiles";
import Carousel from "@sandbox/components/reuseable/Carousel";
import { TestimonialCard2 } from "@sandbox/components/reuseable/testimonial-cards";
// CUSTOM DATA
import { testimonialList2 } from "@sandbox/data/testimonial-list";

export default function Testimonial3() {
  return (
    <Fragment>
      <h3 className="display-4 mb-3 text-center">Ce que les gens disent de nous</h3>
      <p className="lead fs-lg mb-10 text-center">
      Ne nous croyez pas sur parole. Voyez ce que les clients disent de nous.
      </p>

      <div className="row gx-lg-8 gx-xl-12 gy-6 mb-14 align-items-center">
        <div className="col-lg-7">
          <Tiles3 />
        </div>

        <div className="col-lg-5 mt-5">
          <div className="swiper-container dots-closer mb-6">
            <Carousel grabCursor slidesPerView={1} navigation={false}>
              {testimonialList2.map((item, i) => (
                <TestimonialCard2 key={i} {...item} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
