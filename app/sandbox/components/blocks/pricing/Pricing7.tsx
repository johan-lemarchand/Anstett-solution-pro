import { useState } from 'react';
import clsx from 'clsx';
// GLOBAL CUSTOM COMPONENTS
import Switch from '@sandbox/components/reuseable/Switch';
import NextLink from '@sandbox/components/reuseable/links/NextLink';
import { PricingCard1 } from '@sandbox/components/reuseable/pricing-cards';
// CUSTOM DATA
import { pricingList1 } from '@sandbox/data/pricing';

export default function Pricing7() {
  const [activeYearly, setActiveYearly] = useState(false);

  return (
    <div className="row gy-6 gy-lg-0 mb-10 mb-md-18">
      <div className="col-lg-4">
        <h2 className="display-4 mt-lg-18 mb-3">Nos tarifs</h2>
        <p className="lead fs-lg">
          Nous offrons des prix <span className="underline">attractifs.</span>
        </p>
        <p className="mb-5">
          Profitez de{' '}
          <NextLink title="30 jours d'essai" href="#" className="hover" /> et du
          service complet! Pas de carte de crédit requise !
        </p>

        <NextLink
          href="#"
          title="Voir tous les tarifs"
          className="btn btn-primary rounded-pill mt-2"
        />
      </div>

      <div className="col-lg-7 offset-lg-1 pricing-wrapper">
        <div className="pricing-switcher-wrapper switcher justify-content-start justify-content-lg-end">
          <p className="mb-0 pe-3">Mensuel</p>

          <Switch value={activeYearly} onChange={setActiveYearly} />

          <p className="mb-0 ps-3">
            Annuel <span className="text-red">(Économiser 30%)</span>
          </p>
        </div>

        <div className="row gy-6 mt-5">
          {pricingList1.map((item, i) => (
            <div
              className={clsx({ 'col-md-6': true, popular: i === 1 })}
              key={i}
            >
              <PricingCard1 bulletBg {...item} activeYearly={activeYearly} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
