import NextLink from 'app/sandbox/components/reuseable/links/NextLink';

export default function Contact9() {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay"
      style={{ backgroundImage: 'url(/img/photos/bg10.jpg)' }}
    >
      <div className="container py-18">
        <div className="row text-center">
          <div className="col-lg-11 col-xl-10 col-xxl-8 mx-auto">
            <h2 className="fs-16 text-uppercase text-white mb-3">
              Rejoindre notre communauté
            </h2>
            <h3 className="display-4 mb-6 text-white px-lg-5 px-xxl-0">
              Plus de 5000 clients nous font confiance. Joignez-vous à eux en
              utilisant nos services et développez votre entreprise.
            </h3>

            <NextLink
              href="#"
              title="Rejoignez-nous"
              className="btn btn-white rounded-pill mb-0 text-nowrap"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
