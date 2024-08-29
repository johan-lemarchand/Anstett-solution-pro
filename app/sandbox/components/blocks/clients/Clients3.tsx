import { Fragment } from 'react';
import Clients1 from './Clients1';

export default function Clients3() {
  return (
    <Fragment>
      <h2 className="fs-15 text-uppercase text-muted text-center mb-8">
        La confiance de plus de 5000 clients
      </h2>

      <div className="px-lg-5 mb-14 mb-md-19">
        <Clients1 />
      </div>
    </Fragment>
  );
}
