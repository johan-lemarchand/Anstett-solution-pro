import { Fragment } from 'react';
import ProgressList from '@sandbox/components/common/ProgressList';

export default function About5() {
  return (
    <Fragment>
      <div className="col-lg-7">
        <figure>
          <img
            className="w-auto"
            src="/img/illustrations/i8.png"
            srcSet="/img/illustrations/i8@2x.png 2x"
            alt=""
          />
        </figure>
      </div>

      <div className="col-lg-5">
        <h3 className="display-4 mb-6 pe-xxl-6">
          Nous apportons des solutions rapides pour faciliter la vie de nos
          clients.
        </h3>
        <ProgressList />
      </div>
    </Fragment>
  );
}
