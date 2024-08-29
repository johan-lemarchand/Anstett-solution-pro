import { Tiles4 } from '@sandbox/components/elements/tiles';
import IconBox from '@sandbox/components/reuseable/IconBox';
import { ServiceCard3 } from '@sandbox/components/reuseable/service-cards';
// CUSTOM DATA
import { serviceList2 } from '@sandbox/data/service';

export default function Services8() {
  return (
    <div className="row gx-lg-8 gy-8 mt-5 mt-md-12 mt-lg-0 mb-15 align-items-center">
      <div className="col-lg-6 order-lg-2">
        <Tiles4 />
      </div>

      <div className="col-lg-6">
        <h2 className="display-4 mb-3">Que faisons-nous?</h2>
        <p className="lead fs-lg mb-8 pe-xxl-2">
          Le service complet que nous offrons est{' '}
          <span className="underline">spécifiquement</span> conçu pour répondre
          à vos besoins et projets d'entreprise.
        </p>

        <div className="row gx-xl-10 gy-6">
          {serviceList2.map(({ title, id, icon }) => (
            <div className="col-md-6 col-lg-12 col-xl-6" key={id}>
              <ServiceCard3
                title={title}
                description="Nulla vitae elit libero pharetra augue dapibus."
                Icon={
                  <IconBox
                    icon={icon}
                    className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-5"
                  />
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
