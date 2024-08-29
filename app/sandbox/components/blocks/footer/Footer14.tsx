import Image from 'next/image';
// GLOBAL CUSTOM COMPONENTS
import SocialLinks from 'app/sandbox/components/reuseable/SocialLinks';
import NextLink from 'app/sandbox/components/reuseable/links/NextLink';
// CUSTOM DATA
import footerNav from 'app/sandbox/data/footer';

export default function Footer14() {
  return (
    <footer className="bg-dark section-frame mt-15">
      <div className="container pb-13 pb-md-15">
        {/* ========== newsletter section ========== */}
        <div
          className="card image-wrapper bg-full bg-image bg-overlay mt-n50p mx-md-5"
          style={{ backgroundImage: 'url(/img/photos/bg27.jpg)' }}
        >
          <div className="card-body p-6 p-md-11 d-lg-flex flex-row align-items-lg-center justify-content-md-between text-center text-lg-start">
            <h3 className="display-4 mb-6 mb-lg-0 pe-lg-10 pe-xl-5 pe-xxl-18 text-white">
              Plus de 5000 clients nous font confiance. Joignez-vous à eux en
              utilisant nos services et développez votre entreprise.
            </h3>
            <NextLink
              title="Rejoignez-nous"
              href="#"
              className="btn btn-lg btn-white rounded mb-0 text-nowrap"
            />
          </div>
        </div>

        <div className="text-inverse mx-md-5 mt-n15 mt-lg-0">
          <div className="row gy-6 gy-lg-0">
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <Image
                  alt="logo"
                  width={134}
                  height={26}
                  src="/img/logo-light.png"
                />

                <p className="my-4">
                  © 2024 Anstett Solutions Pro.{' '}
                  <br className="d-none d-lg-block" />
                  Tous droits réservés.
                </p>

                <SocialLinks className="nav social social-white" />
              </div>
            </div>

            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">
                  Prendre contact
                </h4>
                <address className="pe-xl-15 pe-xxl-17">
                  26E rue de Kaltenhouse 67240 Oberhoffen-Sur-Moder
                </address>
                <NextLink
                  title="anstett.solutions.pro@gmail.com"
                  href="mailto:#"
                />
                <br /> 06 42 18 55 95
              </div>
            </div>

            <div className="col-md-4 col-lg-3">
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

            <div className="col-md-12 col-lg-3">
              <div className="widget">
                <h4 className="widget-title text-white mb-3">
                  Notre newsletter
                </h4>
                <p className="mb-5">
                  Abonnez-vous à notre newsletter pour recevoir nos nouvelles
                  &amp; nos offres
                </p>

                <div className="newsletter-wrapper">
                  <div id="mc_embed_signup2">
                    <form
                      method="post"
                      target="_blank"
                      className="validate dark-fields"
                      id="mc-embedded-subscribe-form2"
                      name="mc-embedded-subscribe-form"
                      action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a"
                    >
                      <div id="mc_embed_signup_scroll2">
                        <div className="mc-field-group input-group form-floating">
                          <input
                            type="email"
                            name="EMAIL"
                            id="mce-EMAIL2"
                            placeholder="Adresse e-mail"
                            className="required email form-control"
                          />

                          <label htmlFor="mce-EMAIL2">Adresse e-mail</label>
                          <input
                            value="Envoyer"
                            type="submit"
                            name="subscribe"
                            id="mc-embedded-subscribe2"
                            className="btn btn-primary"
                          />
                        </div>

                        <div id="mce-responses2" className="clear">
                          <div
                            className="response"
                            id="mce-error-response2"
                            style={{ display: 'none' }}
                          />
                          <div
                            className="response"
                            id="mce-success-response2"
                            style={{ display: 'none' }}
                          />
                        </div>

                        <div
                          style={{ position: 'absolute', left: '-5000px' }}
                          aria-hidden="true"
                        >
                          <input
                            type="text"
                            tabIndex={-1}
                            name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                          />
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
      </div>
    </footer>
  );
}
