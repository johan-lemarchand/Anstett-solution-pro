import { Fragment, PropsWithChildren } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Footer8 } from "@sandbox/components/blocks/footer";
import Navbar from "@sandbox/components/blocks/navbar/navbar-1";
import NextLink from "@sandbox/components/reuseable/links/NextLink";

export default function CareerLayout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">{children}</main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
