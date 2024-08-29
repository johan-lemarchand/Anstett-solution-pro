import { Tiles3 } from "@sandbox/components/elements/tiles";
import NextLink from "@sandbox/components/reuseable/links/NextLink";

export default function Contact3() {
  return (
    <div className="row gy-10 gx-lg-8 gx-xl-12 align-items-center">
      <div className="col-lg-7 position-relative">
        <div
          className="shape bg-dot primary rellax w-18 h-18"
          style={{ top: 0, left: "-1.4rem", zIndex: 0 }}
        />

        <Tiles3 />
      </div>

      <div className="col-lg-5">
        <h2 className="display-4 mb-3">Parlons-en</h2>
        <p className="lead fs-lg">
        Nous allons faire quelque chose de grand ensemble. <span className="underline">nous avons </span>{" "}
        Plus de 5000 clients. Rejoignez-les en utilisant nos services et développez votre entreprise.
        </p>

        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas
          faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris
          condimentum nibh, ut fermentum massa justo sit amet risus.
        </p>

        <NextLink title="Rejoignez-nous" href="#" className="btn btn-primary rounded-pill mt-2" />
      </div>
    </div>
  );
}
