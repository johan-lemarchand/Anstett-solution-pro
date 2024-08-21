import { clients } from "app/sandbox/data/demo-8";

export default function Clients2() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-13 mb-md-17">
      <div className="col-lg-4">
        <h2 className="display-4 mb-3 pe-xxl-5">Approuvé par plus de 25000 clients</h2>
        <p className="lead fs-lg mb-0 pe-xxl-5">
        Nous <span className="underline">apportons des solutions</span> pour faciliter la vie de nos
        clients.
        </p>
      </div>

      <div className="col-lg-8">
        <div className="row row-cols-2 row-cols-md-4 gx-0 gx-md-8 gx-xl-12 gy-11 mt-n10">
          {clients.map(({ id, image }) => (
            <div className="col" key={id}>
              <figure className="px-4 px-lg-3 px-xxl-5">
                <img src={image} alt="brand" />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
