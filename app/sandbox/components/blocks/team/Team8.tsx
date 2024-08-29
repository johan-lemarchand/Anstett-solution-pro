// CUSTOM DATA
import Carousel from 'app/sandbox/components/reuseable/Carousel';
import NextLink from 'app/sandbox/components/reuseable/links/NextLink';
import { TeamCard2 } from 'app/sandbox/components/reuseable/team-cards';
// CUSTOM UTILS LIBRARY FUNCTIONS
import carouselBreakpoints from 'app/sandbox/utils/carouselBreakpoints';
// CUSTOM DATA
import teams from 'app/sandbox/data/team-list';

export default function Team8() {
  return (
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-4">
            <h2 className="fs-15 text-uppercase text-line text-primary text-center mb-3">
              Découvrir l'équipe
            </h2>
            <h3 className="display-5 mb-5">
              Économisez votre temps et votre argent en choisissant notre équipe
              professionnelle.
            </h3>
            <p>
              Donec id elit non mi porta gravida at eget metus. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros tempus porttitor.
            </p>

            <NextLink
              title="Voir tous les membres"
              href="#"
              className="btn btn-primary rounded-pill mt-3"
            />
          </div>

          <div className="col-lg-8">
            <div className="swiper-container text-center mb-6">
              <Carousel
                grabCursor
                navigation={false}
                breakpoints={carouselBreakpoints}
              >
                {teams.map(team => (
                  <TeamCard2 key={team.id} {...team} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
