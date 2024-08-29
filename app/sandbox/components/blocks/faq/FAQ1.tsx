import { Fragment } from 'react';
import Accordion from '@sandbox/components/reuseable/accordion';
// CUSTOM DATA
import { accordionList1 } from '@sandbox/data/faq';

export default function FAQ1() {
  return (
    <Fragment>
      <h2 className="fs-15 text-uppercase text-muted mb-3 text-center">FAQ</h2>
      <h3 className="display-4 mb-10 px-lg-12 px-xl-15 text-center">
        Si vous ne voyez pas de réponse à votre question, vous pouvez nous
        envoyer un email depuis notre formulaire de contact.
      </h3>

      <div className="accordion-wrapper" id="accordion">
        <div className="row">
          {accordionList1.map((items, i) => (
            <div className="col-md-6" key={i}>
              {items.map(item => (
                <Accordion key={item.no} {...item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
