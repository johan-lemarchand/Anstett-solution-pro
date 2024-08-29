'use client';

import { Fragment, PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
// GLOBAL CUSTOM COMPONENTS
import Navbar from '@sandbox/components/blocks/navbar/navbar-1';
import NextLink from '@sandbox/components/reuseable/links/NextLink';

const filters = [
  { id: 1, title: 'About', url: '/sandbox/docs/blocks/about' },
  { id: 2, title: 'Blog', url: '/sandbox/docs/blocks/blog' },
  {
    id: 3,
    title: 'Call to Action',
    url: '/sandbox/docs/blocks/call-to-action',
  },
  { id: 4, title: 'Clients', url: '/sandbox/docs/blocks/clients' },
  { id: 5, title: 'Contact', url: '/sandbox/docs/blocks/contact' },
  { id: 6, title: 'Facts', url: '/sandbox/docs/blocks/facts' },
  { id: 7, title: 'FAQ', url: '/sandbox/docs/blocks/faq' },
  { id: 8, title: 'Features', url: '/sandbox/docs/blocks/features' },
  { id: 9, title: 'Footer', url: '/sandbox/docs/blocks/footer' },
  { id: 10, title: 'Hero', url: '/sandbox/docs/blocks/hero' },
  // { id: 11, title: 'Misc', url: '/docs/blocks/misc' },
  { id: 12, title: 'Navbar', url: '/sandbox/docs/blocks/navbar' },
  { id: 13, title: 'Portfolio', url: '/sandbox/docs/blocks/portfolio' },
  { id: 14, title: 'Pricing', url: '/sandbox/docs/blocks/pricing' },
  { id: 15, title: 'Process', url: '/sandbox/docs/blocks/process' },
  { id: 16, title: 'Team', url: '/sandbox/docs/blocks/team' },
  { id: 17, title: 'Testimonials', url: '/sandbox/docs/blocks/testimonials' },
];

export default function BlockLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  const find = filters.find(filter => filter.url === pathname);

  return (
    <Fragment>
      <div className="content-wrapper">
        {/* ========== header ========== */}
        <header className="wrapper bg-soft-primary">
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

        {/* ========== page heading ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
            <div className="row">
              <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                <h1 className="display-1 mb-3">
                  Bloc - {find ? find.title : 'Title'}
                </h1>
                <p className="lead px-xxl-10">
                  Une présentation de nos différents blocs -{' '}
                  {find ? find.title : 'Title'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== filter navs ========== */}
        <section className="wrapper bg-light wrapper-border">
          <div className="container py-11">
            <h2 className="h5">Filter Blocks:</h2>
            <ul className="list-inline mb-0">
              {filters.map(({ id, title, url }) => (
                <li className="list-inline-item me-1 mb-2" key={id}>
                  <NextLink
                    href={url}
                    title={title}
                    className={clsx({
                      'btn btn-soft-ash btn-sm rounded': true,
                      'text-primary pe-none': pathname === url,
                    })}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ========== main content ========== */}
        {children}
      </div>

      {/* ========== footer banner ========== */}
      <section className="wrapper bg-dark text-white">
        <div className="container pt-14 pt-md-16 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto">
              <h2 className="display-3 text-white mt-3 mb-3 px-lg-8">
                Pensez unique et soyez créatif. Faites la différence avec
                Anstett Solutions Pro.
              </h2>

              <p className="lead fs-lg mb-6">
                Tout ce dont vous avez besoin pour créer votre prochain site web
                unique et professionnel, y compris des Blocs et pages prêts à
                l’emploi.
              </p>

              <a
                href="#"
                target="_blank"
                className="btn btn-lg btn-white rounded-pill mb-10"
                rel="noreferrer"
              >
                Acheter Anstett Solutions Pro
              </a>
            </div>
          </div>

          <img
            className="img-fluid"
            src="/img/demos/f1.png"
            srcSet="/img/demos/f1@2x.png 2x"
            alt="demo"
          />
        </div>
      </section>
    </Fragment>
  );
}
