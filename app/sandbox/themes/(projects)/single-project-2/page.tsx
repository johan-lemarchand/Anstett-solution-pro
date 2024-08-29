import Image from "next/image";
import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "@sandbox/components/blocks/navbar/navbar-1";
import { Footer8 } from "@sandbox/components/blocks/footer";
import Carousel from "@sandbox/components/reuseable/Carousel";
import NextLink from "@sandbox/components/reuseable/links/NextLink";
import ProjectDetailsContent from "@sandbox/components/common/ProjectDetailsContent";
import ProjectDetailsNavigation from "@sandbox/components/common/ProjectDetailsNavigation";

export default function ProjectDetails() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== heading section ========== */}
        <section className="wrapper bg-light">
          <div className="container pt-10 pb-9 pt-md-14 pb-md-11 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <div className="post-header">
                  <div className="post-category text-line">
                    <NextLink title="Identity" href="#" className="hover" />
                  </div>

                  <h1 className="display-1 mb-3">Commodo Dolor Bibendum Parturient Cursus Mollis</h1>
                  <p className="lead px-md-12 px-lg-12 px-xl-15 px-xxl-18">
                    Integer posuere erat a ante venenatis dapibus posuere. Maecenas faucibus mollis interdum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light wrapper-border">
          <div className="container pb-14 pb-md-16">
            <article>
              <div className="post-slider mb-8 mb-md-12">
                <div className="swiper-container dots-over">
                  <Carousel
                    grabCursor
                    autoHeight
                    spaceBetween={5}
                    slidesPerView={1}
                    slideClassName="rounded overflow-hidden">
                    <div>
                      <Image alt="demo" width={1600} height={912} src="/img/photos/pp7.jpg" className="w-100 h-auto" />
                      <div className="caption-wrapper p-12">
                        <div className="caption bg-white rounded px-4 py-3 ms-auto mt-auto animate__animated animate__slideInDown animate__delay-1s">
                          <h5 className="mb-0">Vivamus sagittis lacus augue</h5>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Image width={1600} height={1011} src="/img/photos/pp8.jpg" alt="demo" className="w-100 h-auto" />
                      <div className="caption-wrapper p-12">
                        <div className="caption bg-white rounded px-4 py-3 mx-auto mt-auto animate__animated animate__slideInDown animate__delay-1s">
                          <h5 className="mb-0">Vivamus sagittis lacus augue</h5>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Image width={1600} height={980} src="/img/photos/pp9.jpg" alt="demo" className="w-100 h-auto" />
                      <div className="caption-wrapper p-12">
                        <div className="caption bg-white rounded px-4 py-3 mt-auto animate__animated animate__slideInDown animate__delay-1s">
                          <h5 className="mb-0">Vivamus sagittis lacus augue</h5>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>

              {/* ========== details section ========== */}
              <ProjectDetailsContent title="About the Project" />
            </article>
          </div>
        </section>

        {/* ========== navigation section ========== */}
        <ProjectDetailsNavigation />
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
