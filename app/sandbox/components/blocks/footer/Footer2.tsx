import { Contact2 } from '../contact';
import SocialLinks from 'app/sandbox/components/reuseable/SocialLinks';

export default function Footer2() {
  return (
    <footer className="bg-soft-primary">
      <div className="container">
        <div className="card shadow-lg mt-n16 mt-md-n21 mb-15 mb-md-14">
          <Contact2 />
        </div>
      </div>

      <div className="container pb-12 text-center">
        <div className="row mt-n10 mt-lg-0">
          <div className="col-xl-10 mx-auto">
            <div className="row mb-3">
              <div className="col-md-4">
                <div className="widget">
                  <h4 className="widget-title">Adresse</h4>
                  <address>
                    26E rue de Kaltenhouse <br className="d-none d-md-block" />{' '}
                    67240 Oberhoffen-Sur-Moder
                  </address>
                </div>
              </div>

              <div className="col-md-4">
                <div className="widget">
                  <h4 className="widget-title">Téléphone</h4>
                  <p>
                    06 42 18 55 95 <br />
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="widget">
                  <h4 className="widget-title">E-mail</h4>

                  <a
                    href="mailto:anstett.solutions.pro@gmail.com"
                    className="link-body"
                  >
                    anstett.solutions.pro@gmail.com
                  </a>
                  <br className="d-none d-md-block" />

                  <a
                    href="mailto:exemple.second.mail@gmail.com"
                    className="link-body"
                  >
                    exemple.second.mail@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <p>© 2024 Anstett Solutions Pro. Tous droits réservés.</p>

            <SocialLinks className="nav social justify-content-center" />
          </div>
        </div>
      </div>
    </footer>
  );
}
