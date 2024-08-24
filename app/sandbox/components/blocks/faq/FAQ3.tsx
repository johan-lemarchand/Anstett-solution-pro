import Accordion from "app/sandbox/components/reuseable/accordion";
// CUSTOM DATA
import { accordions } from "app/sandbox/data/demo-8";

export default function FAQ3() {
  return (
    <div className="card bg-soft-primary rounded-4">
      <div className="card-body p-md-10 p-xl-11">
        <div className="row gx-lg-8 gx-xl-12 gy-10">
          <div className="col-lg-6">
            <h3 className="display-4 mb-4">Questions fréquemment posées</h3>
            <p className="lead fs-lg mb-0">
            Si vous ne voyez pas de réponse à votre question, vous pouvez nous envoyer un email depuis notre formulaire de contact.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="accordion accordion-wrapper" id="accordionExample">
              {accordions.map((item) => (
                <Accordion type="plain" key={item.no} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
