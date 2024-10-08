import { ReactNode } from 'react';
import { Counter3 } from '@sandbox/components/reuseable/counter';
// CUSTOM DATA
import { factList1 } from '@sandbox/data/facts';

// ===========================================================================
interface Facts2Props {
  title?: ReactNode;
  subtitle?: ReactNode;
}
// ===========================================================================

export default function Facts2({
  title = 'Nous sommes fiers de notre équipe créative',
  subtitle = 'Asseyez-vous et détendez-vous pendant que nous nous occupons de tout ce dont vous avez besoin pour vos affaires.',
}: Facts2Props) {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-11">
      <div className="col-lg-4">
        <h3 className="display-4 mb-3 pe-xl-10">{title}</h3>
        <p className="lead fs-lg mb-0 pe-xxl-10">{subtitle}</p>
      </div>

      <div className="col-lg-8 mt-lg-2">
        <div className="row align-items-center counter-wrapper gy-6 text-center">
          {factList1.map(({ id, number, title, Icon }) => (
            <Counter3 title={title} number={number} Icon={<Icon />} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
}
