import FigureImage from "app/sandbox/components/reuseable/FigureImage";
// CUSTOM DATA
import { clientList2 } from "app/sandbox/data/client";

export default function Clients4() {
  return (
    <section className="wrapper bg-gray">
      <div className="container py-14 py-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-10">
          <div className="col-lg-4 mt-lg-2">
            <h3 className="display-4 mb-3 pe-xxl-5">Approuvé par plus de 300 clients</h3>
            <p className="lead fs-lg mb-0 pe-xxl-5">
            Nous <span className="underline">apportons des solutions</span> pour faciliter la vie de nos clients.
            </p>
          </div>

          <div className="col-lg-8">
            <div className="row row-cols-2 row-cols-md-4 gx-0 gx-md-8 gx-xl-12 gy-12">
              {clientList2.map((item) => (
                <div className="col" key={item}>
                  <FigureImage src={item} width={450} height={301} className="px-3 px-md-0 px-xxl-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
