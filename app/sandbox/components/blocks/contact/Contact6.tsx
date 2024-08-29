import IconBox from 'app/sandbox/components/reuseable/IconBox';

export default function Contact6() {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container py-14 py-md-17">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-7">
            <figure>
              <img
                alt=""
                className="w-auto"
                src="/img/illustrations/i5.png"
                srcSet="/img/illustrations/i5@2x.png 2x"
              />
            </figure>
          </div>

          <div className="col-lg-5">
            <h3 className="display-4 mb-7">
              Vous avez des questions? N’hésitez pas à nous contacter.
            </h3>
            <div className="d-flex flex-row">
              <div>
                <IconBox
                  className="icon text-primary fs-28 me-4 mt-n1"
                  icon="uil-location-pin-alt"
                />
              </div>

              <div>
                <h5 className="mb-1">Adresse</h5>
                <address>26E rue de Kaltenhouse, Oberhoffen-Sur-Moder</address>
              </div>
            </div>

            <div className="d-flex flex-row">
              <div>
                <IconBox
                  className="icon text-primary fs-28 me-4 mt-n1"
                  icon="uil-phone-volume"
                />
              </div>

              <div>
                <h5 className="mb-1">Téléphone</h5>
                <p>06 42 18 55 95</p>
              </div>
            </div>

            <div className="d-flex flex-row">
              <div>
                <IconBox
                  className="icon text-primary fs-28 me-4 mt-n1"
                  icon="uil-envelope"
                />
              </div>

              <div>
                <h5 className="mb-1">E-mail</h5>
                <p className="mb-0">
                  <a
                    href="mailto:anstett.solutions.pro@gmail.com"
                    className="link-body"
                  >
                    anstett.solutions.pro@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
