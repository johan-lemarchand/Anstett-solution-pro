import { Link } from '../../../../types/link';
// GLOBAL CUSTOM COMPONENTS
import NextLink from 'app/sandbox/components/reuseable/links/NextLink';
import SocialLinks from 'app/sandbox/components/reuseable/SocialLinks';
// CUSTOM DATA
import { helps, learnMore } from 'app/sandbox/data/footer';

export default function Footer10() {
  // common links section
  const widget = (list: Link[], title: string) => {
    return (
      <div className="widget">
        <h4 className="widget-title text-white mb-3">{title}</h4>
        <ul className="list-unstyled text-reset mb-0">
          {list.map(({ url, title, id }) => (
            <li key={id}>
              <NextLink href={url} title={title} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <footer className="bg-dark text-inverse">
      <div className="container pt-20 pt-lg-21 pb-7">
        <div className="row gy-6 gy-lg-0">
          <div className="col-lg-4">
            <div className="widget">
              <h3 className="h2 mb-3 text-white">Rejoindre la communauté</h3>
              <p className="lead mb-5">
                Nous voulons faire quelque chose de grand ensemble. Plus de 5000
                clients nous font confiance. Rejoignez-les en utilisant nos
                services et développez votre entreprise.
              </p>
              <NextLink
                title="Rejoignez-nous"
                href="#"
                className="btn btn-white rounded-pill"
              />
            </div>
          </div>

          <div className="col-md-4 col-lg-2 offset-lg-2">
            {widget(helps, "Besoin d'aide?")}
          </div>

          <div className="col-md-4 col-lg-2">
            {widget(learnMore, 'En savoir plus')}
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Prendre contact</h4>
              <address>
                26E rue de Kaltenhouse 67240 Oberhoffen-Sur-Moder
              </address>
              <a href="mailto:anstett.solutions.pro@gmail.com">
                anstett.solutions.pro@gmail.com
              </a>
              <br /> 06 42 18 55 95
            </div>
          </div>
        </div>

        <hr className="mt-13 mt-md-15 mb-7" />

        <div className="d-md-flex align-items-center justify-content-between">
          <p className="mb-2 mb-lg-0">
            © 2024 Anstett Solutions Pro. Tous droits réservés.
          </p>
          <SocialLinks className="nav social social-white text-md-end" />
        </div>
      </div>
    </footer>
  );
}
