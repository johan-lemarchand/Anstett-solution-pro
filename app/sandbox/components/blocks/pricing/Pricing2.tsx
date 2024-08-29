"use client";

import { useState } from "react";
// GLOBAL CUSTOM COMPONENTS
import Switch from "@sandbox/components/reuseable/Switch";
import { PricingCard2 } from "@sandbox/components/reuseable/pricing-cards";
// CUSTOM DATA
import { pricingList2 } from "@sandbox/data/pricing";

// =============================================================================
type Pricing2Props = { className?: string };
// =============================================================================

export default function Pricing2({ className }: Pricing2Props) {
  const [activeYearly, setActiveYearly] = useState(false);

  return (
    <div className={`pricing-wrapper position-relative ${className || "mt-n22 mt-md-n24"}`}>
      <div
        className="shape bg-dot primary rellax w-16 h-18"
        style={{ top: "2rem", right: "-2.4rem" }}
      />
      <div
        className="shape rounded-circle bg-line red rellax w-18 h-18 d-none d-lg-block"
        style={{ bottom: "0.5rem", left: "-2.5rem" }}
      />

      <div className="pricing-switcher-wrapper switcher">
        <p className="mb-0 pe-3">Mensuel</p>
        <Switch value={activeYearly} onChange={setActiveYearly} />
        <p className="mb-0 ps-3">Annuel</p>
      </div>

      <div className="row gy-6 mt-3 mt-md-5">
        {pricingList2.map((item, i) => (
          <div className={`col-md-6 col-lg-4 ${i === 1 && "popular"}`} key={i}>
            <PricingCard2 {...item} activeYearly={activeYearly} roundedButton />
          </div>
        ))}
      </div>
    </div>
  );
}
