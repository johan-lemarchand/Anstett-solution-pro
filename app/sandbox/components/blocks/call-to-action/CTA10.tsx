export default function CTA10() {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container py-14 py-md-16">
        <div className="row mb-8">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="fs-16 text-uppercase text-primary mb-3">Analysez maintenant</h2>
            <h3 className="display-4 mb-0">
              Vous vous demandez à quel point votre site peut aller plus vite? Vérifiez facilement votre score SEO maintenant.
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 mx-auto">
            <form action="#">
              <div className="form-floating input-group">
                <input type="url" className="form-control border-0" placeholder="Enter Website URL" id="analyze" />
                <label htmlFor="analyze">Entrez l’URL du site Web</label>
                <button className="btn btn-primary" type="button">
                  Analyser
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <figure>
        <img src="/img/photos/clouds.png" alt="" />
      </figure>
    </section>
  );
}
