import { TeamCard1 } from "app/sandbox/components/reuseable/team-cards";
// CUSTOM DATA
import teams from "app/sandbox/data/team-list";

export default function Team1() {
  return (
    <section className="wrapper bg-gradient-primary">
      <div className="container py-14 pt-md-16 pb-md-18">
        <div className="position-relative mt-8 mt-lg-n23 mt-xl-n25">
          <div className="row text-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
              <h2 className="fs-16 text-uppercase text-muted mb-3">Notre équipe</h2>
              <h3 className="display-4 mb-10 px-md-13 px-lg-4 px-xl-0">
              Pensez unique et soyez innovateur. Faites la différence avec Anstett Solutions Pro.
              </h3>
            </div>
          </div>

          <div className="position-relative">
            <div
              className="shape bg-dot blue rellax w-16 h-17"
              style={{ zIndex: 0, bottom: "0.5rem", right: "-1.7rem" }}
            />
            <div
              className="shape rounded-circle bg-line red rellax w-16 h-16"
              style={{ zIndex: 0, top: "0.5rem", left: "-1.7rem" }}
            />

            <div className="row grid-view gy-6 gy-xl-0">
              {teams.slice(0, 4).map((item) => (
                <div className="col-md-6 col-xl-3" key={item.id}>
                  <TeamCard1 {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
