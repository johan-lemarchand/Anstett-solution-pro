import { Fragment } from "react";
import Carousel from "app/sandbox/components/reuseable/Carousel";
import { BlogCard1 } from "app/sandbox/components/reuseable/blog-cards";
// CUSTOM UTILS
import carouselBreakpoints from "app/sandbox/utils/carouselBreakpoints";
// CUSTOM DATA
import { blogList2 } from "app/sandbox/data/blog";

export default function Blog3() {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col-lg-10 col-xl-10 col-xxl-8 mx-auto">
          <h2 className="fs-15 text-uppercase text-muted mb-3">Cas pratiques</h2>
          <h3 className="display-4 mb-9">
           Découvrez quelques-uns de nos projets géniaux avec des idées créatives et un design exceptionnel.
          </h3>
        </div>
      </div>

      <div className="swiper-container blog grid-view mb-18">
        <Carousel grabCursor navigation={false} breakpoints={carouselBreakpoints}>
          {blogList2.map((item) => (
            <BlogCard1 key={item.id} {...item} />
          ))}
        </Carousel>
      </div>
    </Fragment>
  );
}
