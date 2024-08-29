'use client';

import { Fragment } from 'react';
// -------- CUSTOM COMPONENTS -------- //
import { Footer8 } from 'app/sandbox/components/blocks/footer';
import Navbar from 'app/sandbox/components/blocks/navbar/navbar-1';
import FigureImage from 'app/sandbox/components/reuseable/FigureImage';
import NextLink from 'app/sandbox/components/reuseable/links/NextLink';

// ==============================================================
interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}
// ==============================================================

export default function NotFound({ error, reset }: Props) {
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
                <FigureImage
                  width={800}
                  height={316}
                  className="mb-10"
                  src="/img/illustrations/404.png"
                />
              </div>

              <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
                <h1 className="mb-3">Oops! Page Not Found.</h1>
                <p className="lead mb-7 px-md-12 px-lg-5 px-xl-7">
                  La page que vous recherchez n’est pas disponible ou a été
                  déplacée. Essayez une autre page ou aller à la page d’accueil
                  avec le bouton ci-dessous.
                </p>

                <NextLink
                  href="/"
                  title="Page d’accueil"
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
