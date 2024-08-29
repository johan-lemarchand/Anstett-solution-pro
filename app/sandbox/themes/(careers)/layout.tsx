import { Fragment, PropsWithChildren } from 'react';
// GLOBAL CUSTOM COMPONENTS
import { Footer8 } from 'app/sandbox/components/blocks/footer';
import Navbar from 'app/sandbox/components/blocks/navbar/navbar-1';
import NextLink from 'app/sandbox/components/reuseable/links/NextLink';

export default function CareerLayout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      {/* ========== header section ========== */}
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

      <main className="content-wrapper">{children}</main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
