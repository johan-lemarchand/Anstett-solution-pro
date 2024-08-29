export default function CTA8() {
  return (
    <div className="container">
      <div
        className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-300 mb-14"
        style={{ backgroundImage: 'url(/img/photos/bg16.png)' }}
      >
        <div className="card-body p-10 p-xl-12">
          <div className="row text-center">
            <div className="col-xl-11 col-xxl-9 mx-auto">
              <h2 className="fs-16 text-uppercase text-white mb-3">
                Rejoindre notre communauté
              </h2>
              <h3 className="display-3 mb-8 px-lg-8 text-white">
                Nous sommes{' '}
                <span className="underline-3 style-2 yellow">reconnus</span> par
                plus de 5000 clients. Rejoignez-les dès maintenant et développez
                votre entreprise.
              </h3>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <span>
              <a className="btn btn-white rounded">Démarrer</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
