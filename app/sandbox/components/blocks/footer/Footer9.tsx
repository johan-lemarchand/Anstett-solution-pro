// GLOBAL CUSTOM COMPONENTS
import NextLink from 'app/sandbox/components/reuseable/links/NextLink';
import SocialLinks from 'app/sandbox/components/reuseable/SocialLinks';
// CUSTOM DATA
import footerNav, { helps } from 'app/sandbox/data/footer';

export default function Footer9() {
  return (
    <footer className="bg-dark text-inverse">
      <div className="container py-13 py-md-15">
        <div className="row gy-6 gy-lg-0">
          <div className="col-lg-4">
            <div className="widget">
              <img
                className="mb-4"
                src="/img/logo-light.png"
                srcSet="/img/logo-light@2x.png 2x"
                alt=""
              />

              <p className="mb-4">
                © 2024 Anstett Solutions Pro.{' '}
                <br className="d-none d-lg-block" />
                Tous droits réservés.
              </p>

              <SocialLinks className="nav social social-white" />
            </div>
          </div>

          <div className="col-md-4 col-lg-2 offset-lg-2">
            <div className="widget">
              <h4 className="widget-title mb-3 text-white">Besoin d'aide?</h4>
              <ul className="list-unstyled  mb-0">
                {helps.map(({ title, url }) => (
                  <li key={title}>
                    <NextLink title={title} href={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">En savoir plus</h4>
              <ul className="list-unstyled  mb-0">
                {footerNav.map(({ title, url }) => (
                  <li key={title}>
                    <NextLink title={title} href={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="widget">
              <h4 className="widget-title mb-3 text-white">Prendre contact</h4>
              <address>
                26 E rue de Kaltenhouse 67240 Oberhoffen-Sur-Moder
              </address>
              <NextLink
                title="anstett.solutions.pro@gmail.com"
                href="mailto:#"
              />
              <br /> 06 42 18 55 95
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
