import {Link} from "../../../../types/link";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "app/sandbox/components/reuseable/links/NextLink";
import SocialLinks from "app/sandbox/components/reuseable/SocialLinks";
// CUSTOM DATA
import { helps, learnMore } from "app/sandbox/data/footer";

const bgImage = { backgroundImage: "url(/img/pattern.png)" };

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

export default function Footer20() {
  return (
    <footer className="wrapper pattern-wrapper bg-image section-frame" style={bgImage}>
      <div className="container pb-13 pb-md-15">
        <div
          className="card image-wrapper bg-full bg-image bg-overlay mt-n50p mx-md-5 rounded-xl"
          style={{ backgroundImage: "url(/img/photos/bg27.jpg)" }}>
          <div className="card-body p-6 p-md-11 d-lg-flex flex-row align-items-lg-center justify-content-md-between text-center text-lg-start">
            <h3 className="display-2 mb-6 mb-lg-0 pe-lg-10 pe-xl-5 pe-xxl-18 text-white">
            Plus de 5000 clients nous font confiance. Rejoignez-les dès maintenant et développez votre entreprise.
            </h3>

            <NextLink title="Rejoignez-nous" href="#" className="btn btn-lg btn-white rounded-xl mb-0 text-nowrap" />
          </div>
        </div>

        <div className="text-inverse mx-md-5 mt-n15 mt-lg-0">
          <div className="row gy-6 gy-lg-0">
            <div className="col-lg-4">
              <div className="widget">
                <h3 className="h2 mb-3 text-white">Rejoindre la communauté</h3>

                <p className="mb-5">
                Créons quelque chose de grand ensemble. Nous avons la confiance de plus de 5000 clients. Rejoignez-les en utilisant nos
                services et développez votre entreprise.
                </p>
                <p className="mb-1">© 2024 Anstett Solutions Pro. Tous droits réservés.</p>

                <SocialLinks className="nav social social-white" />
              </div>
            </div>

            <div className="col-md-4 col-lg-2 offset-lg-2">{widget(helps, "Besoin d'aide?")}</div>

            <div className="col-md-4 col-lg-2">{widget(learnMore, "En savoir plus")}</div>

            <div className="col-md-4 col-lg-2">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">Prendre contact</h4>
                <address>26E rue de Kaltenhouse 67240 Oberhoffen-Sur-Moder</address>
                <a href="mailto:anstett.solutions.pro@gmail.com">anstett.solutions.pro@gmail.com</a>
                <br /> 06 42 18 55 95
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
