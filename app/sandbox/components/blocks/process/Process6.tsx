import { Fragment } from "react";
// CUSTOM DATA
import { processList2 } from "app/sandbox/data/process";

export default function Process6() {
  return (
    <Fragment>
      <h2 className="display-4 mb-3">Comment procédons-nous?</h2>
      <p className="lead fs-lg mb-8">
      Nous nous assurons que vos projets soient sans stress, afin que vous puissiez avoir un contrôle parfait.
      </p>

      <div className="row gx-lg-8 gx-xl-12 gy-6 process-wrapper line">
        {processList2.map(({ no, title, subtitle }, i) => {
          const iconColor = i === 1 ? "btn-primary" : "btn-soft-primary";

          return (
            <div className="col-md-6 col-lg-3" key={no}>
              <span className={`icon btn btn-circle btn-lg pe-none mb-4 ${iconColor}`}>
                <span className="number">{no}</span>
              </span>

              <h4 className="mb-1">{title}</h4>
              <p>{subtitle}</p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
