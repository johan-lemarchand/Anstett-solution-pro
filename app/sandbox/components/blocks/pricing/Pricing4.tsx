import Pricing2 from "./Pricing2";

export default function Pricing4() {
  return (
    <div>
      <div className="wrapper bg-soft-primary">
        <div className="container pt-14 pb-18 pt-md-17 pb-md-22 text-center">
          <div className="row">
            <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
              <h3 className="display-4 mb-15 mb-md-6 px-lg-10">
              Nous offrons des prix avantageux, des produits de qualité supérieure et un service de qualité pour votre entreprise.
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* pricing list section */}
      <div className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <Pricing2 />
        </div>
      </div>
    </div>
  );
}
