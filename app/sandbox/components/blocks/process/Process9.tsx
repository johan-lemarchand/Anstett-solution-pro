'use client';

import { Banner4 } from '../banner';
import { ServiceCard3 } from '@sandbox/components/reuseable/service-cards';
// GLOBAL CUSTOM HOOKS
import useLightBox from '@sandbox/hooks/useLightBox';
// CUSTOM DATA
import { processList8 } from '@sandbox/data/process';

export default function Process9() {
  // lighbox hook called
  useLightBox();

  return (
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-19">
      <div className="col-md-8 col-lg-6 position-relative">
        <Banner4 imageName="about8" />
      </div>

      <div className="col-lg-5 col-xl-4 offset-lg-1">
        <h2 className="fs-15 text-uppercase text-muted mb-3">
          Comment ça marche?
        </h2>
        <h3 className="display-4 mb-7">
          Voici les 3 étapes de travail pour réussir.
        </h3>

        {processList8.map(({ Icon, id, iconColor, ...item }) => (
          <ServiceCard3
            key={id}
            {...item}
            Icon={<Icon className={`icon-svg-md text-${iconColor} me-5`} />}
          />
        ))}
      </div>
    </div>
  );
}
