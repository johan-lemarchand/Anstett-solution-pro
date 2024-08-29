import Megaphone from 'app/sandbox/icons/lineal/Megaphone';
import { Tiles5 } from 'app/sandbox/components/elements/tiles';
import ListColumn from 'app/sandbox/components/reuseable/ListColumn';
// CUSTOM DATA
import { aboutList2 } from 'app/sandbox/data/about';

export default function About6() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
      <div className="col-lg-6 position-relative order-lg-2">
        <Tiles5 />
      </div>

      <div className="col-lg-6">
        <Megaphone className="icon-svg-md mb-4" />

        <h2 className="display-4 mb-3">Qui sommes-nous ?</h2>

        <p className="lead fs-lg">
          Nous sommes une entreprise spécialisée dans le digital et le branding,
          convaincue du pouvoir d'une stratégie créative associée à un design de
          qualité.
        </p>

        <p className="mb-6">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et.
        </p>

        <ListColumn rowClass="gx-xl-8" list={aboutList2} />
      </div>
    </div>
  );
}
