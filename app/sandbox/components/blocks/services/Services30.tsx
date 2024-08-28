import Link from "next/link";
// CUSTOM ICON COMPONENT
import Edit from "app/sandbox/icons/solid-mono/Edit";
import Lamp from "app/sandbox/icons/solid-mono/Lamp";
import Team from "app/sandbox/icons/solid-mono/Team";
import DeliveryBox from "app/sandbox/icons/solid-mono/DeliveryBox";

export default function Services30() {
  return (
    <div className="row gx-lg-0 gy-10 align-items-center">
      <div className="col-lg-5 offset-lg-1 order-lg-2">
        <h2 className="display-3 mb-3">
          Mes domaines<em> d’expertise</em>
        </h2>

        <p className="lead fs-lg">
        Le service complet que j’offre est conçu spécifiquement pour répondre aux besoins de votre entreprise.
        </p>

        <p>
          Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo.
          Maecenas faucibus mollis elit interdum. Duis mollis, est non commodo luctus, nisi erat ligula magna mollis.
        </p>

        <Link href="#" className="btn btn-primary rounded-pill mt-3">
          Plus de détails
        </Link>
      </div>

      <div className="col-lg-6">
        <div className="row g-6 text-center">
          <div className="col-md-6">
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow-lg mb-6">
                  <div className="card-body">
                    <Edit className="icon-svg-sm solid-duo text-purple-aqua mb-3" />
                    <h3>Contenu marketing</h3>
                    <p className="mb-2">
                      Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida.
                    </p>
                    <Link href="#" className="more hover link-primary">
                    En savoir plus
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <Team className="icon-svg-sm solid-duo text-purple-aqua mb-3" />
                    <h3>Social Engagement</h3>
                    <p className="mb-2">
                      Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida.
                    </p>
                    <Link href="#" className="more hover link-primary">
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-lg-12 order-md-2">
                <div className="card shadow-lg mb-6 mb-md-0">
                  <div className="card-body">
                    <Lamp className="icon-svg-sm solid-duo text-purple-aqua mb-3" />
                    <h3>Identité et image de marque</h3>
                    <p className="mb-2">
                      Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida.
                    </p>
                    <Link href="#" className="more hover link-primary">
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="card shadow-lg mb-md-6 mt-lg-6">
                  <div className="card-body">
                    <DeliveryBox className="icon-svg-sm solid-duo text-purple-aqua mb-3" />
                    <h3>Conception de produits</h3>
                    <p className="mb-2">
                      Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida.
                    </p>
                    <Link href="#" className="more hover link-primary">
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
