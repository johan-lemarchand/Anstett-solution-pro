import { ServiceCard3 } from "@sandbox/components/reuseable/service-cards";
// CUSTOM DATA
import { services } from "@sandbox/data/demo-8";

export default function Services11() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-20 align-items-center">
      <div className="col-md-8 col-lg-6 order-lg-2 position-relative">
        <div
          className="shape bg-soft-primary rounded-circle rellax w-20 h-20"
          style={{ top: "-2rem", right: "-1.9rem" }}
        />

        <figure className="rounded">
          <img src="/img/photos/about11.jpg" srcSet="/img/photos/about11@2x.jpg 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-6">
        <h2 className="display-4 mb-3">Que faisons-nous?</h2>
        <p className="lead fs-lg mb-8 pe-xxl-2">
        Le service complet que nous offrons est <span className="underline">spécifiquement</span> conçu pour répondre à vos
        besoins et projets d'entreprise.
        </p>

        <div className="row gx-xl-10 gy-6">
          {services.map(({ id, title, description, Icon }) => (
            <div className="col-md-6 col-lg-12 col-xl-6" key={id}>
              <ServiceCard3
                title={title}
                description={description}
                Icon={<Icon className="icon-svg-sm text-primary me-5" />}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
