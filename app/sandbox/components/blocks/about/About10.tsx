'use client';

import { Banner4 } from '../banner';
// GLOBAL CUSTOM HOOKS
import useLightBox from '@sandbox/hooks/useLightBox';
import useProgressbar from '@sandbox/hooks/useProgressbar';
// CUSTOM DATA
import { progressList } from '@sandbox/data/demo-8';

export default function About10() {
  // lighbox hook called
  useLightBox();

  // used for the animated line
  useProgressbar();

  return (
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-18">
      <div className="col-md-8 col-lg-6 position-relative">
        <Banner4 />
      </div>

      <div className="col-lg-5 col-xl-4 offset-lg-1">
        <h3 className="display-4 mb-3">Anstett Solutions Pro</h3>
        <p className="lead fs-lg mb-6">
          Nous avons examiné nos solutions pour{' '}
          <span className="underline">soutenir chaque étape</span> de votre
          croissance.
        </p>

        <ul className="progress-list">
          {progressList.map(({ title, id, percent }) => (
            <li key={id}>
              <p>{title}</p>
              <div className="progressbar line primary" data-value={percent} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
