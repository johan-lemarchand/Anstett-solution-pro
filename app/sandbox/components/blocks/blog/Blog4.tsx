import { Fragment } from "react";
import Carousel from "@sandbox/components/reuseable/Carousel";
import { BlogCard1 } from "@sandbox/components/reuseable/blog-cards";
// CUSTOM UTILS
import carouselBreakpoints from "@sandbox/utils/carouselBreakpoints";
// CUSTOM DATA
import { blogList2 } from "@sandbox/data/blog";

export default function Blog4() {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
          <h2 className="fs-16 text-uppercase text-gradient gradient-1 mb-3">Cas pratiques</h2>
          <h3 className="display-4 mb-9 me-lg-n5">
          Découvrez quelques-uns de nos projets géniaux avec des idées créatives et un design exceptionnel.
          </h3>
        </div>
      </div>

      <div className="swiper-container blog grid-view mb-17 mb-md-20">
        <Carousel grabCursor navigation={false} breakpoints={carouselBreakpoints}>
          {blogList2.map((item) => (
            <BlogCard1 key={item.id} {...item} />
          ))}
        </Carousel>
      </div>
    </Fragment>
  );
}
