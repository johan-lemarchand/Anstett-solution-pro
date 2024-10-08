import { Fragment } from 'react';
import { TeamCard3 } from '@sandbox/components/reuseable/team-cards';
// CUSTOM DATA
import { teams } from '@sandbox/data/demo-11';

export default function Team6() {
  return (
    <Fragment>
      <div className="row mb-3">
        <div className="col-md-10 col-lg-12 col-xl-10 col-xxl-9 mx-auto text-center">
          <h2 className="fs-15 text-uppercase text-primary mb-3">
            Notre équipe
          </h2>
          <h3 className="display-4 mb-7 px-lg-19 px-xl-18">
            Pensez unique et soyez innovateur. Faites la différence avec Anstett
            Solutions Pro.
          </h3>
        </div>
      </div>

      <div className="row grid-view gx-md-8 gx-xl-10 gy-8 gy-lg-0 mb-md-20">
        {teams.map(item => (
          <div className="col-md-6 col-lg-3" key={item.id}>
            <TeamCard3 {...item} />
          </div>
        ))}
      </div>
    </Fragment>
  );
}
