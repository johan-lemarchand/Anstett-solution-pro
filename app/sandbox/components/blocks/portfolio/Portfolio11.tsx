import NextLink from 'app/sandbox/components/reuseable/links/NextLink';
import { ProjectCard3 } from 'app/sandbox/components/reuseable/project-cards';
// CUSTOM DATA
import { portfolioList6 } from 'app/sandbox/data/portfolio';

export default function Portfolio11() {
  return (
    <section className="wrapper bg-light">
      <div className="container py-15 py-md-17">
        <div className="row">
          <div className="col-lg-11 col-xl-10 mx-auto mb-10">
            <h2 className="fs-16 text-uppercase text-muted text-center mb-3">
              Nos réalisations
            </h2>
            <h3 className="display-3 text-center px-lg-5 px-xl-10 px-xxl-16 mb-0">
              Découvrez quelques-uns de nos projets géniaux avec des idées
              créatives et un design exceptionnel.
            </h3>
          </div>
        </div>

        <div className="grid grid-view projects-masonry">
          <div className="row gx-md-8 gy-10 gy-md-13 isotope">
            {portfolioList6.map(item => (
              <div className="project item col-md-6 col-xl-4" key={item.id}>
                <ProjectCard3 {...item} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <NextLink
            title="Démarrer un projet"
            href="#"
            className="btn btn-lg btn-primary rounded-pill"
          />
        </div>
      </div>
    </section>
  );
}
