import { Fragment, PropsWithChildren } from 'react';
// GLOBAL CUSTOM COMPONENTS
import Navbar from 'app/sandbox/components/blocks/navbar/navbar-1';
import { Footer8 } from 'app/sandbox/components/blocks/footer';
import ShopService from 'app/sandbox/components/common/ShopService';

export default function ShopLayout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      {/* PAGE HEADER */}
      <header className="wrapper bg-light">
        <Navbar
          cart
          search
          navClassName="navbar navbar-expand-lg center-nav navbar-light navbar-bg-light"
        />
      </header>

      <main className="content-wrapper">
        {/* MAIN CONTENT */}
        {children}

        {/* SHOP SERVICE */}
        <ShopService />
      </main>

      {/* PAGE FOOTER */}
      <Footer8 />
    </Fragment>
  );
}
