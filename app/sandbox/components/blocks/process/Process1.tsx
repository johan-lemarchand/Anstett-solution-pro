import NextLink from "app/sandbox/components/reuseable/links/NextLink";
import { ProcessList1 } from "app/sandbox/components/reuseable/process-list";
// CUSTOM DATA
import { processList1 } from "app/sandbox/data/process";

export default function Process1() {
  return (
    <div className="row gx-md-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center">
      <div className="col-lg-6 order-lg-2">
        {processList1.map((item) => {
          return <ProcessList1 shadow {...item} key={item.no} />;
        })}
      </div>

      <div className="col-lg-6">
        <h2 className="fs-16 text-uppercase text-muted mb-3">Notre stratégie</h2>
        <h3 className="display-4 mb-5">Voici 3 étapes de travail pour organiser nos projets.</h3>

        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna
          mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis.
        </p>

        <p className="mb-6">
          Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Aenean
          lacinia bibendum nulla sed consectetur.
        </p>

        <NextLink href="#" title="En savoir plus" className="btn btn-primary rounded-pill mb-0" />
      </div>
    </div>
  );
}
