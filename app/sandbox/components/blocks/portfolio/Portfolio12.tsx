import { Fragment } from "react";
import Carousel from "app/sandbox/components/reuseable/Carousel";
import { ProjectCard3 } from "app/sandbox/components/reuseable/project-cards";
// CUSTOM UTILS
import carouselBreakpoints from "app/sandbox/utils/carouselBreakpoints";
// CUSTOM DATA
import { portfolioList6 } from "app/sandbox/data/portfolio";

export default function Portfolio12() {
  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-10 col-xl-8 mx-auto text-center">
          <h2 className="fs-16 text-uppercase text-muted mb-3">Dernières réalisations</h2>
          <h3 className="display-4 mb-10 px-xxl-10">
            Découvrez quelques-uns de nos projets géniaux avec des idées créatives et un design exceptionnel.
          </h3>
        </div>
      </div>

      <div className="swiper-container grid-view mb-19">
        <Carousel navigation={false} grabCursor breakpoints={carouselBreakpoints}>
          {portfolioList6.map((item) => (
            <ProjectCard3 key={item.id} {...item} />
          ))}
        </Carousel>
      </div>
    </Fragment>
  );
}
