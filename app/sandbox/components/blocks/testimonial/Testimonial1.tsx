import NextLink from "app/sandbox/components/reuseable/links/NextLink";
import { TestimonialCard1 } from "app/sandbox/components/reuseable/testimonial-cards";
// CUSTOM DATA
import { testimonialList1 } from "app/sandbox/data/testimonial-list";

export default function Testimonial1() {
  return (
    <section className="wrapper bg-gradient-reverse-primary">
      <div className="container py-14 py-md-18">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-7">
            <div className="row gx-md-5 gy-5">
              {testimonialList1.map((item, i) => (
                <div className={`col-md-6 ${item.columnClasses}`} key={i}>
                  <TestimonialCard1 {...item} />
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <h2 className="fs-16 text-uppercase text-muted mb-3 mt-lg-n6">Notre communauté</h2>
            <h3 className="display-4 mb-5">
              Ne nous croyez pas sur parole. Voyez ce que les clients disent de nous.
            </h3>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Maecenas
              faucibus mollis interdum. Vestibulum id ligula porta felis euismod.
            </p>
            <NextLink
              href="#"
              title="Tous les avis"
              className="btn btn-primary rounded-pill mt-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
