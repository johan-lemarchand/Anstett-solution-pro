import NextLink from '@sandbox/components/reuseable/links/NextLink';

export default function Contact2() {
  return (
    <div className="row gx-0">
      <div
        className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start d-none d-md-block"
        style={{ backgroundImage: 'url(/img/photos/tm1.jpg)' }}
      />

      <div className="col-lg-6">
        <div className="p-10 p-md-11 p-lg-13">
          <h2 className="display-4 mb-3">Parlons-en</h2>

          <p className="lead fs-lg">
            Nous avons la confiance de plus de 5000 clients. Rejoignez-les pour
            utiliser nos services et faire croître votre entreprise.
          </p>

          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus
            ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
            massa justo sit amet risus.
          </p>

          <NextLink
            title="Rejoignez-nous"
            href="#"
            className="btn btn-primary rounded-pill mt-2"
          />
        </div>
      </div>
    </div>
  );
}
