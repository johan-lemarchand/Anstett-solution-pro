import GoogleAppBtn from '@sandbox/components/common/GoogleAppBtn';

export default function Banner1() {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container pt-10 pb-15 py-lg-17 py-xl-20 py-xxl-22 position-relative">
        <img
          alt=""
          src="/img/photos/devices2.png"
          srcSet="/img/photos/devices2@2x.png 2x"
          className="position-lg-absolute col-12 col-lg-12 mt-lg-n50p mb-3 mb-md-10 mb-lg-0"
          style={{ top: '50%', left: '-23%' }}
        />

        <div className="row gx-lg-8 gx-xl-12 align-items-center">
          <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-6 mt-md-n9 text-center text-lg-start">
            <h1 className="display-4 mb-4 px-md-10 px-lg-0">
              Obtenez tous vos pas, exercice, sommeil et médicaments en un seul
              endroit.
            </h1>
            <p className="lead fs-lg mb-7 px-md-10 px-lg-0 pe-xxl-15">
              Anstett Solutions Pro est maintenant disponible en téléchargement
              sur l’App Store et le Google Play Store.
            </p>

            <GoogleAppBtn />
          </div>
        </div>
      </div>
    </section>
  );
}
