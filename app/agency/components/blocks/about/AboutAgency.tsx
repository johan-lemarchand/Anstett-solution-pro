import { ServiceCard3 } from "@sandbox/components/reuseable/service-cards";
// CUSTOM DATA
import { aboutListAgency } from "@sandbox/data/about";

export default function AboutAgency() {
  return (
    <div className="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mt-15">
      <div className="col-lg-6">
        <div className="row gx-md-5 gy-5">
          <div className="col-12">
            <figure className="rounded mx-md-5">
              <img src="/img/photos/g8.jpg" srcSet="/img/photos/g8@2x.jpg 2x" alt="" />
            </figure>
          </div>

          <div className="col-md-6">
            <figure className="rounded">
              <img src="/img/photos/g9.jpg" srcSet="/img/photos/g9@2x.jpg 2x" alt="" />
            </figure>
          </div>

          <div className="col-md-6">
            <figure className="rounded">
              <img src="/img/photos/g10.jpg" srcSet="/img/photos/g10@2x.jpg 2x" alt="" />
            </figure>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <h3 className="display-3 mb-8">
          Passez à la  <span className="underline-3 style-2 yellow">vitesse supérieure</span>
        </h3>

        <div className="row gy-6">
          {aboutListAgency.map(({ id, Icon, color, ...item }) => (
            <div className="col-md-6" key={id}>
              <ServiceCard3 {...item} Icon={<Icon className={`icon-svg-xs solid-mono text-${color} me-4`} />} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
