export default function CTA1() {
  return (
    <section className="wrapper bg-gradient-reverse-primary">
      <div className="container py-16 py-md-18">
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-8 align-items-center">
          <div className="col-lg-7 order-lg-2">
            <figure>
              <img
                alt="Analyser maintenant"
                className="w-auto"
                src="/img/illustrations/i3.png"
                srcSet="/img/illustrations/i3@2x.png 2x"
              />
            </figure>
          </div>

          <div className="col-lg-5">
            <h2 className="fs-16 text-uppercase text-muted mb-3">Analyser maintenant</h2>
            <h3 className="display-4 mb-5">
              Vous vous demandez à quel point votre site peut aller plus vite? Vérifiez facilement votre score SEO maintenant.
            </h3>

            <p className="mb-7">
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et.
            </p>

            <div className="row">
              <div className="col-lg-9">
                <form action="#">
                  <div className="form-floating input-group">
                    <input
                      type="url"
                      className="form-control"
                      placeholder="Enter Website URL"
                      id="seo-check"
                    />
                    <label htmlFor="seo-check">Entrez l’URL du site Web</label>
                    <button className="btn btn-primary" type="button">
                      Vérifier
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
