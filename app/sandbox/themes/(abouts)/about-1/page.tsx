import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Team3 } from "app/sandbox/components/blocks/team";
import { About6 } from "app/sandbox/components/blocks/about";
import { Facts5 } from "app/sandbox/components/blocks/facts";
import { Process7 } from "app/sandbox/components/blocks/process";
import { Contact7 } from "app/sandbox/components/blocks/contact";
import { Testimonial5 } from "app/sandbox/components/blocks/testimonial";
import FigureImage from "app/sandbox/components/reuseable/FigureImage";

export default function About() {
  return (
    <Fragment>
      {/* ========== page title section ========== */}
      <section className="wrapper bg-gray">
        <div className="container pt-10 pt-md-14 text-center">
          <div className="row">
            <div className="col-xl-6 mx-auto">
              <h1 className="display-1 mb-4">Bonjour! C’est Anstett Solutions Pro</h1>
              <p className="lead fs-lg mb-0">Une entreprise qui transforme les idées en belles choses.</p>
            </div>
          </div>
        </div>

        <FigureImage
          width={2800}
          height={1000}
          src="/img/photos/bg12.jpg"
          className="position-absoute"
          style={{ bottom: 0, left: 0, zIndex: 2 }}
        />
      </section>

      <section className="wrapper bg-light angled upper-end lower-end">
        <div className="container py-14 py-md-16">
          {/* ========== about section ========== */}
          <About6 />

          {/* ========== process section ========== */}
          <Process7 />
        </div>
      </section>

      {/* ========== testimonial section ========== */}
      <Testimonial5 />

      {/* ========== team section ========== */}
      <Team3 />

      {/* ========== facts section ========== */}
      <Facts5 />

      {/* ========== contact section ========== */}
      <Contact7 />
    </Fragment>
  );
}
