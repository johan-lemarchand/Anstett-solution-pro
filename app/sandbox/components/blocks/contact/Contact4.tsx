import NextLink from '@sandbox/components/reuseable/links/NextLink';

export default function Contact4() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-10 mb-md-14 align-items-center">
      <div className="col-lg-7">
        <figure>
          <img
            alt="contact"
            className="w-auto"
            src="/img/illustrations/i5.png"
            srcSet="/img/illustrations/i5@2x.png 2x"
          />
        </figure>
      </div>

      <div className="col-lg-5">
        <h2 className="fs-16 text-uppercase text-muted mb-3 ">Parlons-en</h2>
        <h3 className="display-4 mb-5 ">
          Créons quelque chose de grand ensemble. Nous avons la confiance de
          plus de 5000 clients.
        </h3>

        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus
          ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus.
        </p>

        <NextLink
          title="Rejoignez-nous"
          href="#"
          className="btn btn-primary rounded-pill mt-2"
        />
      </div>
    </div>
  );
}
