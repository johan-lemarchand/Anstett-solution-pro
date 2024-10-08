'use client';

import useProgressbar from '@sandbox/hooks/useProgressbar';
// CUSTOM DATA
import { factList9 } from '@sandbox/data/facts';

export default function Facts16() {
  // used for the animated line
  useProgressbar();

  return (
    <section className="section-frame overflow-hidden">
      <div className="wrapper bg-soft-primary" style={{ borderRadius: '1rem' }}>
        <div className="container py-17">
          <div className="row text-center">
            <div className="col-xl-11 col-xxl-10 mx-auto">
              <h2 className="fs-16 text-uppercase text-muted mb-3">
                Informations sur la société
              </h2>
              <h3 className="display-4 mb-10 px-lg-20 px-xl-20">
                Économisez votre temps et votre argent en choisissant notre
                équipe professionnelle.
              </h3>
              <div className="row gy-6 text-center">
                {factList9.map(({ id, value, title, description, color }) => (
                  <div className="col-md-6 col-lg-3" key={id}>
                    <div
                      className={`progressbar semi-circle ${color}`}
                      data-value={value}
                    />
                    <h4>{title}</h4>
                    <p className="mb-0">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
