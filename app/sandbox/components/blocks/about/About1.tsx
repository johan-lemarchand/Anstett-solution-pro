import AccordionList from "app/sandbox/components/common/AccordionList";

export default function About1() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-lg-22 mb-xl-24 align-items-center">
      <div className="col-lg-7">
        <figure>
          <img
            alt="choose us"
            className="w-auto"
            src="/img/illustrations/i6.png"
            srcSet="/img/illustrations/i6@2x.png 2x"
          />
        </figure>
      </div>

      <div className="col-lg-5">
        <h2 className="fs-16 text-uppercase text-muted mb-3">Pourquoi nous choisir?</h2>
        <h3 className="display-4 mb-7">Nous apportons des solutions pour faciliter la vie de nos clients.</h3>

        <AccordionList />
      </div>
    </div>
  );
}
