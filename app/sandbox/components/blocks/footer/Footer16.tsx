import Link from 'next/link';
// GLOBAL CUSTOM COMPONENTS
import SocialLinks from 'app/sandbox/components/reuseable/SocialLinks';
import NextLink from 'app/sandbox/components/reuseable/links/NextLink';
// CUSTOM DATA
import { categories, tags } from 'app/sandbox/data/footer';

export default function Footer16() {
  return (
    <footer className="bg-dark text-inverse">
      <div className="container py-13 py-md-15">
        <div className="row gy-6 gy-lg-0">
          <div className="col-md-4 col-lg-3">
            <h4 className="widget-title text-white mb-3">Popular Posts</h4>

            <ul className="image-list">
              <li>
                <Link href="#">
                  <figure className="rounded">
                    <img src="/img/photos/a4.jpg" alt="" />
                  </figure>
                </Link>

                <div className="post-content">
                  <h6 className="mb-2">
                    <NextLink
                      title="Magna Mollis Ultricies"
                      className="link-dark"
                      href="#"
                    />
                  </h6>

                  <ul className="post-meta">
                    <li className="post-date">
                      <i className="uil uil-calendar-alt" />
                      <span>26 mars 2022</span>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="mt-5">
                <Link href="#">
                  <figure className="rounded">
                    <img src="/img/photos/a5.jpg" alt="" />
                  </figure>
                </Link>

                <div className="post-content">
                  <h6 className="mb-2">
                    <NextLink
                      title="Ornare Nullam Risus"
                      className="link-dark"
                      href="#"
                    />
                  </h6>

                  <ul className="post-meta">
                    <li className="post-date">
                      <i className="uil uil-calendar-alt" />
                      <span>16 février 2022</span>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="mt-5">
                <Link href="#">
                  <figure className="rounded">
                    <img src="/img/photos/a6.jpg" alt="" />
                  </figure>
                </Link>

                <div className="post-content">
                  <h6 className="mb-2">
                    <NextLink
                      title="Euismod Nullam Fusce"
                      className="link-dark"
                      href="#"
                    />
                  </h6>

                  <ul className="post-meta">
                    <li className="post-date">
                      <i className="uil uil-calendar-alt" />
                      <span>8 janvier 2022</span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Tags</h4>
              <ul className="list-unstyled tag-list">
                {tags.map(({ id, title, url }) => (
                  <li key={id}>
                    <NextLink
                      title={title}
                      href={url}
                      className="btn btn-soft-ash text-white btn-sm rounded-pill"
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="widget">
              <h4 className="widget-title text-white mb-3">Catégories</h4>
              <ul className="unordered-list text-reset bullet-white ">
                {categories.map(({ id, post, title, url }) => (
                  <li key={id}>
                    <NextLink title={`${title} (${post})`} href={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Prendre contact</h4>
              <address className="pe-xl-15 pe-xxl-17">
                26E rue de Kaltenhouse 67240 Oberhoffen-Sur-Moder
              </address>
              <a href="mailto:#">anstett.solutions.pro@gmail.com</a>
              <br /> 06 42 18 55 95
            </div>

            <div className="widget">
              <h4 className="widget-title text-white mb-3">Ailleurs</h4>
              <SocialLinks className="nav social social-white" />
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">En savoir plus</h4>
              <ul className="list-unstyled text-reset mb-0">
                <li>
                  <Link href="#">Qui sommes-nous</Link>
                </li>

                <li>
                  <Link href="#">Notre histoire</Link>
                </li>

                <li>
                  <Link href="#">Nos projets</Link>
                </li>
              </ul>
            </div>

            <div className="widget">
              <h4 className="widget-title text-white mb-3">Besoin d'aide?</h4>
              <ul className="list-unstyled text-reset mb-0">
                <li>
                  <Link href="#">Support</Link>
                </li>
                <li>
                  <Link href="#">Commencer</Link>
                </li>
                <li>
                  <Link href="#">Contactez-nous</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-6 mb-0 text-center">
          © 2024 Anstett Solutions Pro. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
