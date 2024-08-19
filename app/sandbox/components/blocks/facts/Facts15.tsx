import IconBox from "app/sandbox/components/reuseable/IconBox";
import { Counter3 } from "app/sandbox/components/reuseable/counter";
// CUSTOM DATA
import { factList8 } from "app/sandbox/data/facts";

export default function Facts15() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-11">
      <div className="col-lg-4 text-center text-lg-start">
        <h2 className="fs-16 text-uppercase text-primary mb-3">Company Facts</h2>
        <h3 className="display-3 mb-4 pe-xxl-5">We are proud of our design team</h3>
        <p className="mb-0 pe-xxl-11">Just sit back and relax while we take care of your business needs for you.</p>
      </div>

      <div className="col-lg-8 mt-lg-2">
        <div className="row align-items-center counter-wrapper gy-6 text-center">
          {factList8.map(({ id, icon, ...item }) => (
            <Counter3
              key={id}
              {...item}
              Icon={<IconBox className="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4" icon={icon} />}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
