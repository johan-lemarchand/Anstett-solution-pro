export default function CTA3() {
  return (
    <section
      className="wrapper image-wrapper bg-auto no-overlay bg-image text-center mb-14 mb-md-16 bg-map"
      style={{ backgroundImage: 'url(/img/map.png)' }}
    >
      <div className="container py-md-18">
        <div className="row">
          <div className="col-lg-6 col-xl-5 mx-auto">
            <h2 className="display-4 mb-3 text-center">
              Rejoignez la communauté
            </h2>
            <p className="lead mb-5 px-md-16 px-lg-3">
              Plus de 5000 clients nous font confiance. Joignez-vous à eux en
              utilisant nos services et développez votre entreprise.
            </p>
            <a href="#" className="btn btn-primary rounded-pill">
              Rejoignez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
