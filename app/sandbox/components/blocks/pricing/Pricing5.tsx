import { useState } from "react";
// GLOBAL CUSTOM COMPONENTS
import Switch from "app/sandbox/components/reuseable/Switch";
import NextLink from "app/sandbox/components/reuseable/links/NextLink";
import { PricingCard1 } from "app/sandbox/components/reuseable/pricing-cards";
// CUSTOM DATA
import { pricingList1 } from "app/sandbox/data/pricing";

export default function Pricing5() {
  const [activeYearly, setActiveYearly] = useState(false);

  return (
    <div className="row gy-6 align-items-center mb-14 mb-md-18">
      <div className="col-lg-4">
        <h3 className="display-4 mb-5">Nous offrons des prix attractifs </h3>
        <p className="lead fs-lg mb-5">
          Profitez de <span className="underline">30 jours d'essai</span> et du service complet! Pas de carte de crédit requise !
        </p>

        <NextLink title="Voir tous les tarifs" href="#" className="btn btn-primary rounded-pill mt-2" />
      </div>

      <div className="col-lg-7 offset-lg-1 pricing-wrapper">
        <div className="pricing-switcher-wrapper switcher justify-content-start justify-content-lg-end">
          <p className="mb-0 pe-3">Mensuel</p>
          <Switch value={activeYearly} onChange={setActiveYearly} />
          <p className="mb-0 ps-3">
            Annuel <span className="text-red">(Économisez 30 %)</span>
          </p>
        </div>

        <div className="row gy-6 mt-5">
          {pricingList1.map((item, i) => (
            <div className={`col-md-6 ${i === 1 && "popular"}`} key={i}>
              <PricingCard1 bulletBg {...item} activeYearly={activeYearly} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
