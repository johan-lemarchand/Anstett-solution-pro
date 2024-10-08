import { Fragment } from 'react';
// GLOBAL CUSTOM COMPONENTS
import Accordion from '@sandbox/components/reuseable/accordion';
// CUSTOM DATA
import { accordionList1 } from '@sandbox/data/faq';

export default function FAQ8() {
  return (
    <Fragment>
      <div className="position-relative">
        <img
          alt="doodle 7"
          data-delay="1800"
          src="/img/svg/doodle7.svg"
          className="h-7 position-absolute d-none d-lg-block"
          style={{ top: '-90%', right: '-3%' }}
        />

        <img
          alt="Doddle 8"
          data-delay="1800"
          src="/img/svg/doodle8.svg"
          className="h-14 position-absolute d-none d-lg-block"
          style={{ top: '-20%', left: '-12%' }}
        />

        <h2 className="fs-16 text-uppercase text-muted mb-3 text-center">
          FAQ
        </h2>
        <h3 className="display-3 mb-11 px-lg-8 px-xl-11 text-center">
          Si vous ne voyez pas de{' '}
          <span className="text-gradient gradient-7">réponse</span> à votre
          question, vous pouvez nous envoyer un email à partir de notre
          formulaire de contact.
        </h3>
      </div>

      <div className="accordion-wrapper" id="accordion">
        <div className="row">
          {accordionList1.map((items, i) => {
            return (
              <div className="col-md-6" key={i}>
                {items.map(item => (
                  <Accordion key={item.no} type="shadow-lg" {...item} />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}
