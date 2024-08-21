import Image from "next/image";
import NextLink from "app/sandbox/components/reuseable/links/NextLink";
import { ServiceCard3 } from "app/sandbox/components/reuseable/service-cards";
// CUSTOM DATA
import { processList12 } from "app/sandbox/data/process";

export default function About25() {
  return (
    <section id="about">
      <div className="wrapper bg-gray">
        <div className="container py-14 py-md-16">
          <div className="row gx-md-8 gx-xl-12 gy-6 align-items-center">
            <div className="col-md-8 col-lg-6 order-lg-2 mx-auto">
              <div className="img-mask mask-2">
                <Image width={1000} height={850} src="/img/photos/about30.jpg" alt="" className="w-100 h-auto" />
              </div>
            </div>

            <div className="col-lg-6">
              <h2 className="display-5 mb-3">À mon propos</h2>
              <p className="lead fs-lg">
                Je suis Caitlyn, photographe spécialisée dans la photographie de produits alimentaires et de boissons.
              </p>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
                risus. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula.
              </p>
              <p>
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum
                nulla sed consectetur. Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur.
              </p>

              <NextLink title="En savoir plus" href="#" className="btn btn-primary rounded-pill mt-2" />
            </div>
          </div>

          <div className="row gx-md-8 gx-xl-12 mt-10 mt-md-13">
            <div className="col-lg-4">
              <h2 className="display-5 mb-3">Mon processus de travail</h2>
              <p>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus.
                Aenean eu leo quam.
              </p>
            </div>

            <div className="col-lg-8">
              <div className="row gy-6 gx-md-8 gx-xl-12">
                {processList12.map(({ no, ...item }) => (
                  <div className="col-md-6" key={no}>
                    <ServiceCard3
                      {...item}
                      Icon={
                        <span className="icon btn btn-circle btn-primary pe-none me-4">
                          <span className="number fs-18">{no}</span>
                        </span>
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
