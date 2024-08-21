import ListColumn from "app/sandbox/components/reuseable/ListColumn";
// CUSTOM DATA
import { list } from "app/sandbox/data/demo-11";

export default function Services15() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center mb-md-15">
      <div className="col-lg-7 order-lg-2">
        <figure>
          <img className="w-auto" src="/img/illustrations/i17.png" srcSet="/img/illustrations/i17@2x.png 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-5">
        <h2 className="fs-15 text-uppercase text-primary mb-3">Nos solutions</h2>
        <h3 className="display-4 mb-5">Nous étudions vos projets pour que vous ayez le contrôle parfait.</h3>
        <p className="mb-6">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus
          ac facilisis in, egestas eget quam. Praesent commodo cursus.
        </p>

        <ListColumn list={list} />
      </div>
    </div>
  );
}
