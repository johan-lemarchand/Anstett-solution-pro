import { Fragment } from 'react';
import IconBox from 'app/sandbox/components/reuseable/IconBox';
import NextLink from 'app/sandbox/components/reuseable/links/NextLink';
// CUSTOM DATA
import { serviceList9 } from 'app/sandbox/data/service';

export default function Services19() {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
          <h2 className="fs-15 text-uppercase text-muted mb-3">
            Que faisons-nous?
          </h2>
          <h3 className="display-4 mb-9">
            Le service que nous offrons est spécialement conçu pour répondre à
            vos besoins.
          </h3>
        </div>
      </div>

      <div className="row gx-md-8 gx-xl-12 gy-8 mb-14 mb-md-16 text-center">
        {serviceList9.map(
          ({ id, description, icon, linkUrl, title, color }) => (
            <div className="col-md-4" key={id}>
              <IconBox
                className={`icon btn btn-block btn-lg btn-soft-${color} pe-none mb-5`}
                icon={icon}
              />
              <h4>{title}</h4>
              <p className="mb-3">{description}</p>
              <NextLink
                title="En savoir plus"
                href={linkUrl}
                className={`more hover link-${color}`}
              />
            </div>
          )
        )}
      </div>
    </Fragment>
  );
}
