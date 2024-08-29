import NextLink from 'app/sandbox/components/reuseable/links/NextLink';

export default function CTA12() {
  return (
    <div className="row">
      <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center">
        <h2 className="fs-16 text-uppercase text-white mb-3">
          Rejoindre notre communauté
        </h2>

        <h3 className="display-3 text-white mb-6">
          Nous sommes reconnus{' '}
          <span className="underline-2 underline-gradient-6">
            <em>digne de confiance</em>
          </span>{' '}
          par plus de 5000 clients. Rejoignez-les maintenant et développez votre
          entreprise.
        </h3>

        <NextLink title="Rejoignez-nous" href="#" className="btn btn-white" />
      </div>
    </div>
  );
}
