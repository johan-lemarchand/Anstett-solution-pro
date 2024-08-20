import Tiles2 from "app/sandbox/components/elements/tiles/Tiles2";
import AccordionList from "app/sandbox/components/common/AccordionList";

export default function About4() {
  return (
    <div className="row gy-10 gy-sm-13 gx-lg-8 align-items-center">
      <div className="col-lg-7 order-lg-2">
        <Tiles2 />
      </div>

      <div className="col-lg-5">
        <h3 className="display-4 mb-7">Quelques raisons pour lesquelles nos clients nous choisissent.</h3>
        <AccordionList />
      </div>
    </div>
  );
}
