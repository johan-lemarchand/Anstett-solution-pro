import { Fragment } from "react";
import Carousel from "app/sandbox/components/reuseable/Carousel";
import { ProjectCard3 } from "app/sandbox/components/reuseable/project-cards";
// CUSTOM UTILS
import carouselBreakpoints from "app/sandbox/utils/carouselBreakpoints";
// CUSTOM DATA
import { portfolioList6 } from "app/sandbox/data/portfolio";

export default function Portfolio10() {
  return (
    <Fragment>
      <div className="row mt-17">
        <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center">
          <h2 className="fs-16 text-uppercase text-muted mb-3">Dernières réalisations</h2>
          <h3 className="display-3 mb-10">
          Découvrez quelques-uns de nos projets géniaux avec des idées <span className="underline-3 style-2 yellow">creative</span>{" "}
          et design.
          </h3>
        </div>
      </div>

      <div className="swiper-container grid-view">
        <Carousel navigation={false} grabCursor breakpoints={carouselBreakpoints}>
          {portfolioList6.map((item) => (
            <ProjectCard3 key={item.id} {...item} />
          ))}
        </Carousel>
      </div>
    </Fragment>
  );
}
