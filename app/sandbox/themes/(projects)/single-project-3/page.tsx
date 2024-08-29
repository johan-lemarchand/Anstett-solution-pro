import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Footer8 } from "@sandbox/components/blocks/footer";
import Navbar from "@sandbox/components/blocks/navbar/navbar-1";
import { Portfolio1 } from "@sandbox/components/blocks/portfolio";
import NextLink from "@sandbox/components/reuseable/links/NextLink";
import ProjectDetailsContent from "@sandbox/components/common/ProjectDetailsContent";
import ProjectDetailsNavigation from "@sandbox/components/common/ProjectDetailsNavigation";

export default function ProjectDetails() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          language
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark"
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-white rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== heading section ========== */}
        <section
          className="wrapper image-wrapper bg-image bg-overlay text-white"
          style={{ backgroundImage: "url(/img/photos/bg6.jpg)" }}>
          <div className="container pt-17 pb-12 pt-md-19 pb-md-16 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <div className="post-header">
                  <div className="post-category text-line text-white">
                    <NextLink title="Identity" href="#" className="text-reset" />
                  </div>

                  <h1 className="display-1 mb-3 text-white">Commodo Dolor Bibendum Parturient Cursus Mollis</h1>
                  <p className="lead px-md-12 px-lg-12 px-xl-15 px-xxl-18">
                    Integer posuere erat a ante venenatis dapibus posuere. Maecenas faucibus mollis interdum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light wrapper-border">
          {/* ========== details section ========== */}
          <div className="container pt-14 pt-md-16 pb-13 pb-md-15">
            <ProjectDetailsContent title="About the Project" />
          </div>

          {/* ========== portfolio section ========== */}
          <Portfolio1 />
        </section>

        {/* ========== navigation section ========== */}
        <ProjectDetailsNavigation />
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
