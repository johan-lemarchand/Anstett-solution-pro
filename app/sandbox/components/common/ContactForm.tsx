export default function ContactForm() {
  return (
    <form className="contact-form needs-validation" method="post">
      <div className="messages"></div>
      <div className="row gx-4">
        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input required type="text" name="name" id="form_name" placeholder="Jane" className="form-control" />
            <label htmlFor="form_name">Prénom *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Veuillez entrez votre prénom. </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input required type="text" name="surname" placeholder="Doe" id="form_lastname" className="form-control" />
            <label htmlFor="form_lastname">Nom *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Veuillez entrer votre nom. </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input
              required
              type="email"
              name="email"
              id="form_email"
              className="form-control"
              placeholder="jane.doe@example.com"
            />
            <label htmlFor="form_email">Email *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> assurez-vous de fournir un email valide. </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-select-wrapper mb-4">
            <select className="form-select" id="form-select" name="department" required>
              <option disabled value="">
                Sélectionnez un département
              </option>
              <option value="Sales">Ventes</option>
              <option value="Marketing">Marketing</option>
              <option value="Customer Support">Service client</option>
            </select>

            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Veuillez sélectionner un département. </div>
          </div>
        </div>

        <div className="col-12">
          <div className="form-floating mb-4">
            <textarea
              required
              name="message"
              id="form_message"
              className="form-control"
              placeholder="Your message"
              style={{ height: 150 }}
            />

            <label htmlFor="form_message">Message *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Veuillez saisir votre message. </div>
          </div>
        </div>

        <div className="col-12 text-center">
          <input type="submit" value="Send message" className="btn btn-primary rounded-pill btn-send mb-3" />
          <p className="text-muted">
            <strong>*</strong> Ces champs sont obligatoires.
          </p>
        </div>
      </div>
    </form>
  );
}
