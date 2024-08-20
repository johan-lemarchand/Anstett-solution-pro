import AccordionList from "app/sandbox/components/common/AccordionList";

export default function About7() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-15 mb-md-18">
      <div className="col-lg-7 order-lg-2">
        <figure>
          <img className="w-auto" src="/img/illustrations/i17.png" srcSet="/img/illustrations/i17@2x.png 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-5">
        <h3 className="display-4 mt-xxl-8 mb-3">Pourquoi nous choisir?</h3>
        <p className="lead fs-lg lh-sm mb-6">
          Découvrez tout ce qu'il faut savoir pour créer un modèle de processus métier.
        </p>

        <AccordionList />
      </div>
    </div>
  );
}
