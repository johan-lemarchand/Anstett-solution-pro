import { BlogCard4 } from "@sandbox/components/reuseable/blog-cards";
// CUSTOM DATA
import { blogs } from "@sandbox/data/demo-32";

export default function Blog8() {
  return (
    <section className="wrapper bg-gray">
      <div className="container py-15 py-md-17">
        <div className="row text-center">
          <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
            <h2 className="fs-16 text-uppercase text-primary mb-3">Cas pratiques</h2>
            <h3 className="display-3 mb-10">
            Découvrez quelques-uns de nos projets géniaux avec des idées créatives et un design exceptionnel.
            </h3>
          </div>
        </div>

        <div className="row grid-view gy-6">
          {blogs.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <BlogCard4 className="card shadow-lg" {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
