import { useState } from 'react';
import clsx from 'clsx';
// GLOBAL CUSTOM COMPONENTS
import Switch from '@sandbox/components/reuseable/Switch';
import NextLink from '@sandbox/components/reuseable/links/NextLink';
import { PricingCard1 } from '@sandbox/components/reuseable/pricing-cards';
// CUSTOM DATA
import { pricingList1 } from '@sandbox/data/pricing';

export default function Pricing9() {
  const [activeYearly, setActiveYearly] = useState(false);

  return (
    <div className="row gy-6 mb-15 mb-md-17">
      <div className="col-lg-4">
        <h2 className="fs-16 text-uppercase text-primary mt-lg-18 mb-3">
          Nos tarifs
        </h2>
        <h3 className="display-4 mb-3">Nous offrons des prix attractifs.</h3>
        <p>
          Profitez de{' '}
          <NextLink title="30 jours d'essai" href="#" className="hover" /> et du
          service complet! Pas de carte de crédit requise !
        </p>
        <NextLink
          title="Voir tous les tarifs"
          href="#"
          className="btn btn-primary rounded mt-2"
        />
      </div>

      <div className="col-lg-7 offset-lg-1 pricing-wrapper">
        <div className="pricing-switcher-wrapper switcher justify-content-start justify-content-lg-end">
          <p className="mb-0 pe-3">Mensuel</p>

          <Switch value={activeYearly} onChange={setActiveYearly} />

          <p className="mb-0 ps-3">
            Annuel <span className="text-red">(Économisez 30%)</span>
          </p>
        </div>

        <div className="row gy-6 mt-5">
          {pricingList1.map((item, i) => (
            <div
              className={clsx({ 'col-md-6': true, popular: i === 1 })}
              key={i}
            >
              <PricingCard1
                {...item}
                activeYearly={activeYearly}
                roundedButton
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
