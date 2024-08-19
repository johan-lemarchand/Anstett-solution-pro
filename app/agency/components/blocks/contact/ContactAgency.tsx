import ContactForm from './ContactForm';

export default function ContactAgency() {
  return (
    <div className="row gx-3 gy-10 mb-15 mb-md-18 align-items-center">
      <div className="col-lg-6">
        <h2 className="display-4 mb-3">Contactez-nous</h2>
        <p className="lead fs-lg mb-0">
          Nous serions ravis d'entendre parler de votre projet. Contactez-nous pour discuter de vos besoins.
        </p>
      </div>
      <div className="col-lg-5 offset-lg-1">
        <ContactForm />
      </div>
    </div>
  );
}