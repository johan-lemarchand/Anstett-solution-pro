import NextLink from '@sandbox/components/reuseable/links/NextLink';
import SocialLinks from '@sandbox/components/reuseable/SocialLinks';
// CUSTOM DATA
import footerNav from '@sandbox/data/footer';

export default function Footer18() {
  return (
    <footer className="bg-gray">
      <div className="container py-13 py-md-15">
        <div className="d-lg-flex flex-row align-items-lg-center">
          <h3 className="display-3 ls-sm mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25">
            Rejoignez notre communauté en utilisant nos services et développez
            votre entreprise.
          </h3>

          <NextLink
            title="Essayez gratuitement"
            href="#"
            className="btn btn-lg btn-primary rounded mb-0 text-nowrap"
          />
        </div>

        <hr className="mt-11 mb-12" />
        <div className="row gy-6 gy-lg-0">
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <img
                className="mb-4"
                src="/img/logo-dark.png"
                srcSet="/img/logo-dark@2x.png 2x"
                alt=""
              />

              <p className="mb-4">
                © 2024 Anstett Solutions Pro.{' '}
                <br className="d-none d-lg-block" />
                Tous droits réservés.
              </p>

              <SocialLinks className="nav social social-muted" />
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title ls-sm mb-3">Prendre contact</h4>
              <address className="pe-xl-15 pe-xxl-17">
                26E rue de Kaltenhouse 67240 Oberhoffen-Sur-Moder
              </address>
              <a href="mailto:#" className="link-body">
                anstett.solutions.pro@gmail.com
              </a>
              <br /> 06 42 18 55 95
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title ls-sm mb-3">En savoir plus</h4>
              <ul className="list-unstyled text-reset mb-0">
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
              <h4 className="widget-title ls-sm mb-3">Notre newsletter</h4>
              <p className="mb-5">
                Abonnez-vous à notre newsletter pour recevoir nos nouvelles
                &amp; nos offres.
              </p>
              <div className="newsletter-wrapper">
                <div id="mc_embed_signup2">
                  <form
                    action="#"
                    method="post"
                    id="mc-embedded-subscribe-form2"
                    name="mc-embedded-subscribe-form"
                    className="validate "
                    target="_blank"
                    noValidate
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
                          type="submit"
                          value="Envoyer"
                          name="subscribe"
                          id="mc-embedded-subscribe2"
                          className="btn btn-primary"
                        />
                      </div>

                      {/* <div id="mce-responses2" class="clear">
                    <div class="response" id="mce-error-response2" style="display:none"></div>
                    <div class="response" id="mce-success-response2" style="display:none"></div>
                  </div> 

                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" tabindex="-1" value=""></div>
                  <div class="clear"></div> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
