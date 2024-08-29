import {Link} from "../../../../types/link";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "@sandbox/components/reuseable/links/NextLink";
import SocialLinks from "@sandbox/components/reuseable/SocialLinks";
// CUSTOM DATA
import { helps, learnMore } from "@sandbox/data/footer";

// =================================================
type Footer3Props = { hiddenNewsletter?: boolean };
// =================================================

export default function Footer3({ hiddenNewsletter }: Footer3Props) {
  // common links section
  const widget = (list: Link[], title: string) => {
    return (
      <div className="widget">
        <h4 className="widget-title  mb-3">{title}</h4>
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
    <footer className="bg-gradient-reverse-primary">
      <div className="container pt-13 pt-md-15 pb-7">
        {!hiddenNewsletter && (
          <div
            className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 mb-13"
            style={{ backgroundImage: "url(/img/photos/bg2.jpg)" }}>
            <div className="card-body p-9 p-xl-11">
              <div className="row align-items-center gy-6">
                <div className="col-lg-7">
                  <h3 className="display-5 text-white">Inscrivez-vous à notre newsletter</h3>
                  <p className="lead pe-lg-12 mb-0 text-white">
                    Abonnez-vous à notre newsletter pour recevoir nos nouvelles &amp; nos offres.
                  </p>
                </div>

                <div className="col-lg-5 col-xl-4 offset-xl-1">
                  <div className="newsletter-wrapper">
                    <div id="mc_embed_signup2">
                      <form
                        action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a"
                        method="post"
                        id="mc-embedded-subscribe-form2"
                        name="mc-embedded-subscribe-form"
                        className="validate dark-fields"
                        target="_blank">
                        <div id="mc_embed_signup_scroll2">
                          <div className="mc-field-group input-group form-floating">
                            <input
                              type="email"
                              name="EMAIL"
                              id="mce-EMAIL2"
                              placeholder="Adresse e-mail"
                              className="required email form-control"
                            />
                            <label htmlFor="mce-EMAIL2" className="position-absolute">
                              Adresse e-mail
                            </label>
                            <input
                              type="submit"
                              name="subscribe"
                              id="mc-embedded-subscribe2"
                              className="btn btn-primary"
                            />
                          </div>

                          <div id="mce-responses2" className="clear">
                            <div className="response" id="mce-error-response2" style={{ display: "none" }} />
                            <div className="response" id="mce-success-response2" style={{ display: "none" }} />
                          </div>

                          <div style={{ position: "absolute", left: -5000 }} aria-hidden="true">
                            <input type="text" name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" tabIndex={-1} />
                          </div>

                          <div className="clear" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="row gy-6 gy-lg-0">
          <div className="col-lg-4">
            <div className="widget">
              <h3 className="h2 mb-3 ">Rejoindre la communauté</h3>
              <p className="lead mb-5">
              Nous voulons faire quelque chose de grand ensemble. Plus de 5000 clients font confiance à notre entreprise. Rejoignez-les en utilisant nos
              services.
              </p>
              <NextLink title="Rejoignez-nous" href="#" className="btn  btn-primary rounded-pill" />
            </div>
          </div>

          <div className="col-md-4 col-lg-2 offset-lg-2">{widget(helps, "Besoin d'aide?")}</div>

          <div className="col-md-4 col-lg-2">{widget(learnMore, "En savoir plus")}</div>

          <div className="col-md-4 col-lg-2">
            <div className="widget">
              <h4 className="widget-title  mb-3">Prendre contact</h4>
              <address>26 E rue de Kaltenhouse 67240 Oberhoffen-Sur-Moder</address>
              <a href="mailto:anstett.solutions.pro@gmail.com" className="link-body">
                anstett.solutions.pro@gmail.com
              </a>
              <br /> 06 42 18 55 95
            </div>
          </div>
        </div>

        <hr className="mt-13 mt-md-15 mb-7" />

        <div className="d-md-flex align-items-center justify-content-between">
          <p className="mb-2 mb-lg-0">© 2024 Anstett Solutions Pro. Tous droits réservés.</p>
          <SocialLinks className="nav social  text-md-end" />
        </div>
      </div>
    </footer>
  );
}
