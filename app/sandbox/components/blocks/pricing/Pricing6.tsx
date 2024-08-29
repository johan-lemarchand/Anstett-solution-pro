import { useState } from 'react';
// GLOBAL CUSTOM COMPONENTS
import Switch from '@sandbox/components/reuseable/Switch';
import NextLink from '@sandbox/components/reuseable/links/NextLink';
import { PricingCard1 } from '@sandbox/components/reuseable/pricing-cards';
// CUSTOM DATA
import { pricingList1 } from '@sandbox/data/pricing';

export default function Pricing6() {
  const [activeYearly, setActiveYearly] = useState(false);

  return (
    <div className="row gy-6 align-items-center">
      <div className="col-lg-4">
        <h2 className="fs-15 text-uppercase text-muted mb-3">Nos tarifs</h2>
        <h3 className="display-4 mb-5">Nous offrons des prix attractifs </h3>

        <p className="mb-5">
          Profitez de{' '}
          <NextLink title="30 jours d'essai" href="#" className="hover" /> et du
          service complet! Pas de carte de crédit requise !
        </p>

        <NextLink
          href="#"
          title="Voir tous les tarifs"
          className="btn btn-primary rounded mt-2"
        />
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
            <div className={`col-md-6 ${i === 1 && 'popular'}`} key={i}>
              <PricingCard1
                roundedButton
                bulletBg
                {...item}
                activeYearly={activeYearly}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
