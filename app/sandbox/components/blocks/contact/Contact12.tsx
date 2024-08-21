export default function Contact12() {
  return (
    <section id="pricing">
      <div
        className="wrapper image-wrapper bg-image bg-overlay"
        style={{ backgroundImage: "url(/img/photos/bg36.jpg)" }}>
        <div className="container py-15 py-md-17">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="card border-0 bg-white-900">
                <div className="card-body py-lg-13 px-lg-16">
                  <h2 className="display-5 mb-3 text-center">Demande de prix pour la photographie</h2>
                  <p className="lead fs-lg text-center mb-10">
                  Pour plus d’informations, veuillez nous contacter en utilisant le formulaire ci-dessous :
                  </p>
                  <form className="contact-form needs-validation" method="post" noValidate>
                    <div className="messages"></div>
                    <div className="row gx-4">
                      <div className="col-md-6">
                        <div className="form-floating mb-4">
                          <input
                            required
                            type="text"
                            name="name"
                            id="form_name"
                            placeholder="Name"
                            className="form-control bg-white-700 border-0"
                          />
                          <label htmlFor="form_name">Nom *</label>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">Veuillez entrer votre nom.</div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-floating mb-4">
                          <input
                            required
                            type="email"
                            name="email"
                            id="form_email"
                            placeholder="jane.doe@example.com"
                            className="form-control bg-white-700 border-0"
                          />
                          <label htmlFor="form_email">Email *</label>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">Assurez-vous de fournir un email valide.</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating mb-4">
                          <textarea
                            required
                            name="message"
                            id="form_message"
                            placeholder="Your message"
                            className="form-control bg-white-700 border-0"
                            style={{ height: 150 }}
                          />
                          <label htmlFor="form_message">Message *</label>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">Veuillez saisir votre message.</div>
                        </div>
                      </div>

                      <div className="col-12 text-center">
                        <input type="submit" className="btn btn-primary rounded-pill btn-send" value="Envoyer" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
