import AccordionList from '@sandbox/components/common/AccordionList';

export default function About14() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
      <div className="col-lg-7 order-lg-2">
        <figure>
          <img
            className="w-auto"
            src="/img/illustrations/i2.png"
            srcSet="/img/illustrations/i2@2x.png 2x"
            alt=""
          />
        </figure>
      </div>

      <div className="col-lg-5">
        <h3 className="display-4 mb-7 mt-lg-10">
          Quelques raisons pour lesquelles nos clients nous choisissent.
        </h3>
        <AccordionList />
      </div>
    </div>
  );
}
