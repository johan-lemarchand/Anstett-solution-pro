import NextLink from "app/sandbox/components/reuseable/links/NextLink";

export default function CTA4() {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay"
      style={{ backgroundImage: "url(/img/photos/bg1.jpg)" }}>
      <div className="container py-18">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="fs-16 text-uppercase text-white mb-3 text-line">Rejoindre notre communauté</h2>
            <h3 className="display-4 mb-5 mb-6 text-white pe-xxl-18">
            Plus de 5000 clients nous font confiance. Rejoignez-les en utilisant nos services et développez votre
            affaire.
            </h3>

            <NextLink href="#" title="Rejoignez-nous" className="btn btn-white rounded mb-0 text-nowrap" />
          </div>
        </div>
      </div>
    </section>
  );
}
