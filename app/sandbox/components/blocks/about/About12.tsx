import AccordionList from '@sandbox/components/common/AccordionList';

export default function About12() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center mb-14 mb-md-17">
      <div className="col-lg-7">
        <figure>
          <img
            className="w-auto"
            src="/img/illustrations/i11.png"
            srcSet="/img/illustrations/i11@2x.png 2x"
            alt=""
          />
        </figure>
      </div>

      <div className="col-lg-5">
        <h2 className="fs-15 text-uppercase text-primary mb-3">
          Pourquoi nous choisir?
        </h2>
        <h3 className="display-4 mb-7">
          Nous apportons des solutions pour faciliter la vie de nos clients.
        </h3>
        <AccordionList />
      </div>
    </div>
  );
}
