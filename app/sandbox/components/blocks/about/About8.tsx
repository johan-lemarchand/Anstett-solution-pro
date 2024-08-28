import ListColumn from "app/sandbox/components/reuseable/ListColumn";
// CUSTOM DATA
import { aboutList1 } from "app/sandbox/data/about";

export default function About8() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-15 mb-md-18 align-items-center">
      <div className="col-lg-7">
        <figure>
          <img className="w-auto" src="/img/illustrations/i9.png" srcSet="/img/illustrations/i9@2x.png 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-5">
        <h3 className="display-4 mb-3">Avoir un contrôle parfait</h3>
        <p className="lead fs-lg lh-sm">Nous sommes axés sur l’établissement de relations à long terme avec les clients.</p>
        <p className="mb-6">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus
          ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </p>

        <ListColumn list={aboutList1} />
      </div>
    </div>
  );
}
