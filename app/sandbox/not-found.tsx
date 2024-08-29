import Image from 'next/image';
import { Fragment } from 'react';
// GLOBAL CUSTOM COMPONENTS
import { Footer8 } from 'app/sandbox/components/blocks/footer';
import Navbar from 'app/sandbox/components/blocks/navbar/navbar-1';
import NextLink from 'app/sandbox/components/reuseable/links/NextLink';
// IMAGES
import notFoundImage from '../../public/img/illustrations/404.png';

export default function NotFound() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar
          language
          button={
            <NextLink
              title="Contact"
              href="#"
              className="btn btn-sm btn-primary rounded-pill"
            />
          }
        />
      </header>

      <main className="content-wrapper">
        <section className="wrapper bg-light">
          <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-9 col-xl-8 mx-auto">
                <figure className="mb-10">
                  <Image src={notFoundImage} alt="not found" />
                </figure>
              </div>

              <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
                <h1 className="mb-3">Oops! Page Not Found.</h1>
                <p className="lead mb-7 px-md-12 px-lg-5 px-xl-7">
                  La page que vous recherchez n’est pas disponible ou a été
                  déplacée. Essayez une autre page ou allez à page d’accueil
                  avec le bouton ci-dessous.
                </p>

                <NextLink
                  title="Page d’accueil"
                  href="/"
                  className="btn btn-primary rounded-pill"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
