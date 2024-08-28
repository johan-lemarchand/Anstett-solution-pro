import Link from "next/link";
// CUSTOM DATA
import { services } from "app/sandbox/data/demo-33";

export default function Services36() {
  return (
    <div className="row d-flex align-items-start gy-10 mb-18 mb-md-20">
      <div className="col-lg-5 position-lg-sticky" style={{ top: "8rem" }}>
        <h3 className="display-2 mb-5">Le service que j'offre est spécialement conçu pour répondre à vos besoins.</h3>

        <p className="mb-7">
          Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Integer
          posuere erat a ante venenatis dapibus posuere velit aliquet.
        </p>

        <Link href="#" className="btn btn-lg btn-primary btn-icon btn-icon-end">
          Plus de détails <i className="uil uil-arrow-up-right" />
        </Link>
      </div>

      <div className="col-lg-6 ms-auto">
        {services.map(({ Icon, color, id, title, description }) => (
          <div className={`card bg-soft-${color} mb-6`} key={id}>
            <div className="card-body d-flex flex-row">
              <div>
                <Icon className={`icon-svg-md text-${color} me-5`} />
              </div>

              <div>
                <h3 className="fs-21 mb-2">{title}</h3>
                <p className="mb-0">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
