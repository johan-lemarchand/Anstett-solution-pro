import { Fragment } from "react";
// CUSTOM ICON COMPONENTS
import Like from "app/sandbox/icons/solid/Like";
import BullHorn from "app/sandbox/icons/solid/Bullhorn";
import LayoutTwo from "app/sandbox/icons/solid/LayoutTwo";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "app/sandbox/components/reuseable/links/NextLink";

export default function Services33() {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col-md-10 col-lg-9 col-xxl-7 mx-auto mb-12">
          <h2 className="fs-16 text-uppercase text-muted mb-3">Nos services</h2>
          <h3 className="display-2 ls-sm px-xxl-10">
          Le service que nous offrons est{" "}
            <span className="underline-3 style-1 primary">
              <em>conçu</em>
            </span>{" "}
            pour répondre à vos besoins commerciaux.
          </h3>
        </div>
      </div>

      <div className="row gy-10 align-items-center mb-15 mb-md-17">
        <div className="col-lg-7">
          <figure>
            <img
              alt="illustration"
              className="img-fluid"
              src="/img/illustrations/i29.png"
              srcSet="/img/illustrations/i29@2x.png 2x"
            />
          </figure>
        </div>

        <div className="col-lg-4 ms-auto">
          <div className="svg-bg bg-pale-primary rounded mb-5">
            <Like />
          </div>

          <h3 className="h1 post-title ls-sm mb-3">Marketing sur les réseaux sociaux</h3>

          <p>
            Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis
            euismod semper. Fusce dapibus tellus.
          </p>

          <ul className="icon-list bullet-bg bullet-soft-primary">
            <li>
              <i className="uil uil-check" />
              Aenean eu leo quam. Pellentesque ornare.
            </li>

            <li>
              <i className="uil uil-check" />
              Nullam quis risus eget urna mollis ornare.
            </li>

            <li>
              <i className="uil uil-check" />
              Fusce dapibus, tellus ac cursus commodo.
            </li>
          </ul>

          <NextLink title="En savoir plus" href="#" className="more hover link-primary" />
        </div>
      </div>

      <div className="row gy-10 align-items-center mb-15 mb-md-17">
        <div className="col-lg-7 order-lg-2">
          <figure>
            <img
              alt="illustration"
              className="img-fluid"
              src="/img/illustrations/i30.png"
              srcSet="/img/illustrations/i30@2x.png 2x"
            />
          </figure>
        </div>

        <div className="col-lg-4 me-auto">
          <div className="svg-bg bg-pale-green rounded mb-5">
            <LayoutTwo />
          </div>

          <h3 className="h1 post-title ls-sm mb-3">Web Design & Développement</h3>

          <p>
            Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis
            euismod semper. Fusce dapibus tellus.
          </p>

          <ul className="icon-list bullet-bg bullet-soft-green">
            <li>
              <i className="uil uil-check" />
              Aenean eu leo quam. Pellentesque ornare.
            </li>

            <li>
              <i className="uil uil-check" />
              Nullam quis risus eget urna mollis ornare.
            </li>

            <li>
              <i className="uil uil-check" />
              Fusce dapibus, tellus ac cursus commodo.
            </li>
          </ul>

          <NextLink title="En savoir plus" href="#" className="more hover link-green" />
        </div>
      </div>

      <div className="row gy-10 align-items-center">
        <div className="col-lg-7">
          <figure>
            <img
              alt="illustration"
              className="img-fluid"
              src="/img/illustrations/i31.png"
              srcSet="/img/illustrations/i31@2x.png 2x"
            />
          </figure>
        </div>

        <div className="col-lg-4 ms-auto">
          <div className="svg-bg bg-pale-fuchsia rounded mb-5">
            <BullHorn />
          </div>

          <h3 className="h1 post-title ls-sm mb-3">Services de marketing de contenu</h3>

          <p>
            Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis
            euismod semper. Fusce dapibus tellus.
          </p>

          <ul className="icon-list bullet-bg bullet-soft-fuchsia">
            <li>
              <i className="uil uil-check" />
              Aenean eu leo quam. Pellentesque ornare.
            </li>

            <li>
              <i className="uil uil-check" />
              Nullam quis risus eget urna mollis ornare.
            </li>

            <li>
              <i className="uil uil-check" />
              Fusce dapibus, tellus ac cursus commodo.
            </li>
          </ul>

          <NextLink title="En savoir plus" href="#" className="more hover link-fuchsia" />
        </div>
      </div>
    </Fragment>
  );
}
