import Carousel from '@sandbox/components/reuseable/Carousel';
import { BlogCard1 } from '@sandbox/components/reuseable/blog-cards';
// CUSTOM UTILS LIBRARY FUNCTIONS
import carouselBreakpoints from '@sandbox/utils/carouselBreakpoints';
// CUSTOM DATA
import { blogList1 } from '@sandbox/data/blog';

export default function Blog1() {
  return (
    <section className="wrapper bg-light angled upper-end">
      <div className="container py-14 py-md-16">
        <div className="row">
          <div className="col-lg-9 col-xl-8 col-xxl-7">
            <h2 className="fs-16 text-uppercase text-line text-primary mb-3">
              Cas pratiques
            </h2>
            <h3 className="display-4 mb-9">
              Découvrez quelques-uns de nos projets géniaux avec des idées
              créatives et un design exceptionnel.
            </h3>
          </div>
        </div>

        <div className="swiper-container blog grid-view mb-10">
          <Carousel
            grabCursor
            navigation={false}
            breakpoints={carouselBreakpoints}
          >
            {blogList1.map(item => (
              <BlogCard1 key={item.id} {...item} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
