import { Fragment, useState } from "react";
// GLOBAL CUSTOM COMPONENTS
import Switch from "@sandbox/components/reuseable/Switch";
import { PricingCard1 } from "@sandbox/components/reuseable/pricing-cards";
import { FAQ5 } from "../faq";
// CUSTOM DATA
import { pricingList3 } from "@sandbox/data/pricing";

export default function Pricing8() {
  const [activeYearly, setActiveYearly] = useState(false);

  return (
    <Fragment>
      {/* ========== title section ========== */}
      <div className="row text-center">
        <div className="col-md-11 col-lg-9 col-xl-8 mx-auto">
          <h2 className="fs-16 text-uppercase text-muted mb-3">Nos tarifs</h2>
          <h3 className="display-4 mb-10 px-xxl-10">
          Nous offrons des prix avantageux, des produits de qualité supérieure et un service optimal pour votre entreprise.
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-11 mx-auto">
          {/* ========== plan section ========== */}
          <div className="pricing-wrapper mb-10 mb-md-14">
            <div className="pricing-switcher-wrapper switcher">
              <p className="mb-0 pe-3">Mensuel</p>
              <Switch value={activeYearly} onChange={setActiveYearly} />
              <p className="mb-0 ps-3">Annuel</p>
            </div>

            <div className="row gy-6 mt-3 mt-md-5">
              {pricingList3.map((item, i) => (
                <div className={`col-md-6 col-lg-4 ${i === 1 && "popular"}`} key={i}>
                  <PricingCard1 roundedButton bulletBg {...item} activeYearly={activeYearly} />
                </div>
              ))}
            </div>
          </div>

          {/* ========== faq section ========== */}
          <FAQ5 />
        </div>
      </div>
    </Fragment>
  );
}
