import IconBox from 'app/sandbox/components/reuseable/IconBox';
import SocialLinks from 'app/sandbox/components/reuseable/SocialLinks';

export default function Footer17() {
  return (
    <footer className="bg-white">
      <div className="container pt-8 pt-md-10 pb-7">
        <div className="row gx-lg-0 gy-6">
          <div className="col-lg-4">
            <div className="widget">
              <img
                className="mb-4"
                src="/img/logo-dark.png"
                srcSet="/img/logo-dark@2x.png 2x"
                alt=""
              />
              <p className="lead mb-0">
                Plus de 5000 clients nous font confiance. Joignez-vous à eux en
                utilisant nos services et développez votre entreprise.
              </p>
            </div>
          </div>

          <div className="col-lg-3 offset-lg-2">
            <div className="widget">
              <div className="d-flex flex-row">
                <IconBox
                  icon="uil-phone-volume"
                  className="icon text-primary fs-28 me-4 mt-n1"
                />

                <div>
                  <h5 className="mb-1">Téléphone</h5>
                  <p className="mb-0">
                    06 42 18 55 95 <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="widget">
              <div className="d-flex flex-row">
                <IconBox
                  icon="uil-location-pin-alt"
                  className="icon text-primary fs-28 me-4 mt-n1"
                />
                <div className="align-self-start justify-content-start">
                  <h5 className="mb-1">Adresse</h5>
                  <address>
                    26E rue de Kaltenhouse 67240 Oberhoffen-Sur-Moder
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-13 mt-md-14 mb-7" />

        <div className="d-md-flex align-items-center justify-content-between">
          <p className="mb-2 mb-lg-0">
            © 2024 Anstett Solutions Pro. Tous droits réservés.
          </p>
          <SocialLinks className="nav social social-muted mb-0 text-md-end" />
        </div>
      </div>
    </footer>
  );
}
