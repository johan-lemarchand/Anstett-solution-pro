import NextLink from 'app/sandbox/components/reuseable/links/NextLink';

export default function CTA2() {
  return (
    <section
      style={{ backgroundImage: 'url(/img/map.png)' }}
      className="wrapper image-wrapper bg-auto no-overlay bg-image text-center bg-map"
    >
      <div className="container pt-0 pb-14 pt-md-18 pb-md-18">
        <div className="row">
          <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
            <h3 className="display-4 mb-8 px-lg-12">
              Plus de 5000 clients nous font confiance. Rejoignez-les dès
              maintenant et développez votre entreprise.
            </h3>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <NextLink
            href="#"
            title="Démarrer"
            className="btn btn-primary rounded mx-1"
          />
          <NextLink
            href="#"
            title="Essai gratuit"
            className="btn btn-green rounded mx-1"
          />
        </div>
      </div>
    </section>
  );
}
