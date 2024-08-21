import ListColumn from "app/sandbox/components/reuseable/ListColumn";
// CUSTOM DATA
import { aboutList2 } from "app/sandbox/data/about";

export default function Team7() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
      <div className="col-md-8 col-lg-6 order-lg-2">
        <figure className="rounded">
          <img src="/img/photos/about24.jpg" srcSet="/img/photos/about24@2x.jpg 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-6">
        <h2 className="fs-15 text-uppercase text-muted mb-3">Notre équipe</h2>
        <h3 className="display-4 mb-5">Gagnez du temps en choisissant notre équipe professionnelle.</h3>
        <p className="mb-6">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras
          justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et.
        </p>

        <ListColumn list={aboutList2} rowClass="gx-xl-8" />
      </div>
    </div>
  );
}
