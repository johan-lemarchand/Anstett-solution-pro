import { Fragment } from "react";
// CUSTOM ICON COMPONENT
import Bulb from "@sandbox/icons/solid-mono/Bulb";
import Compare from "@sandbox/icons/solid-mono/Compare";
import DeliveryBox from "@sandbox/icons/solid-mono/DeliveryBox";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "@sandbox/components/reuseable/links/NextLink";
import { Span } from "next/dist/trace";

export default function Services22() {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
          <h2 className="fs-16 text-uppercase text-muted mb-3">
            Pourquoi choisir notre solution ?
          </h2>
          <h3 className="display-3 mb-10 px-xl-10 px-xxl-15">
            Voici les raisons pour lesquelles nos clients{" "}
            <span className="underline-3 style-2 yellow">nous choisissent</span>
          </h3>
        </div>
      </div>

      <ul
        role="tablist"
        className="nav nav-tabs nav-tabs-bg nav-tabs-shadow-lg d-flex justify-content-between nav-justified flex-lg-row flex-column"
      >
        <li className="nav-item" role="presentation">
          <a
            role="tab"
            href="#tab2-1"
            data-bs-toggle="tab"
            aria-selected="true"
            className="nav-link d-flex flex-row active"
          >
            <div>
              <Bulb />
            </div>

            <div>
              <h4 className="mb-1">Expertise Personnalisée</h4>
              <p>
                Découvrez comment notre approche sur-mesure répond à vos besoins
                uniques.
              </p>
            </div>
          </a>
        </li>

        <li className="nav-item" role="presentation">
          <a
            role="tab"
            tabIndex={-1}
            href="#tab2-2"
            data-bs-toggle="tab"
            aria-selected="false"
            className="nav-link d-flex flex-row"
          >
            <div>
              <Compare />
            </div>

            <div>
              <h4 className="mb-1">Performance Optimisée</h4>
              <p>
                Voyez comment nos solutions maximisent votre impact et
                renforcent votre présence sur le marché.
              </p>
            </div>
          </a>
        </li>

        <li className="nav-item" role="presentation">
          <a
            role="tab"
            tabIndex={-1}
            href="#tab2-3"
            data-bs-toggle="tab"
            aria-selected="false"
            className="nav-link d-flex flex-row"
          >
            <div>
              <DeliveryBox className="icon-svg-sm solid-mono text-green me-4" />
            </div>

            <div>
              <h4 className="mb-1">Accompagnement Dédié</h4>
              <p>
                Bénéficiez d’un soutien complet et d’un service client attentif
                tout au long de votre projet.
              </p>
            </div>
          </a>
        </li>
      </ul>

      {/* ========== tab content ========== */}
      <div className="tab-content mt-6 mt-lg-8">
        <div className="tab-pane fade active show" id="tab2-1" role="tabpanel">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
              <figure className="rounded shadow-lg">
                <img
                  src="/img/photos/se5.jpg"
                  srcSet="/img/photos/se5@2x.jpg 2x"
                  alt=""
                />
              </figure>
            </div>

            <List title="Expertise Personnalisée" color="fuchsia" />
          </div>
        </div>

        <div className="tab-pane fade" id="tab2-2" role="tabpanel">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <figure className="rounded shadow-lg">
                <img
                  src="/img/photos/se6.jpg"
                  srcSet="/img/photos/se6@2x.jpg 2x"
                  alt=""
                />
              </figure>
            </div>

            <List2 title="Performance optimisée" color="violet" />
          </div>
        </div>

        <div className="tab-pane fade" id="tab2-3" role="tabpanel">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
              <figure className="rounded shadow-lg">
                <img
                  src="/img/photos/se7.jpg"
                  srcSet="/img/photos/se7@2x.jpg 2x"
                  alt=""
                />
              </figure>
            </div>

            <List3 title="Accompagnement Dédié" color="green" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

type ListProps = { color: "fuchsia" | "violet" | "green"; title: string };
const List = ({ color, title }: ListProps) => {
  return (
    <div className="col-lg-6">
      <h2 className="mb-3">{title}</h2>
      <p>
        Nous croyons en une collaboration étroite avec vous tout au long du
        processus. Votre feedback est essentiel pour ajuster et affiner nos
        solutions afin qu’elles répondent au mieux à vos attentes.
      </p>

      <ul className={`icon-list bullet-bg bullet-soft-${color}`}>
        <li>
          <i className="uil uil-check" />{" "}
          <span className="fw-bold">Collaboration Active:</span>
          <p>
            Nous travaillons en étroite collaboration avec vous à chaque étape,
            assurant une intégration fluide de vos idées et besoins dans nos
            solutions.
          </p>
        </li>
        <li>
          <i className="uil uil-check" />{" "}
          <span className="fw-bold">Feedback Essentiel:</span>
          <p>
            Votre retour est au cœur de notre processus d’amélioration continue,
            nous permettant d’ajuster nos solutions pour qu’elles répondent
            parfaitement à vos attentes.
          </p>
        </li>
        <li>
          <i className="uil uil-check" />{" "}
          <span className="fw-bold">Solutions Affinées:</span>
          <p>
            Grâce à vos retours, nous affinons constamment nos solutions pour
            garantir qu’elles sont alignées avec vos objectifs et apportent les
            résultats escomptés.
          </p>
        </li>
      </ul>
      <NextLink
        title="En savoir plus"
        href="#"
        className={`btn btn-${color} mt-2`}
      />
    </div>
  );
};
const List2 = ({ color, title }: ListProps) => {
  return (
    <div className="col-lg-6">
      <h2 className="mb-3">{title}</h2>
      <p>
        Découvrez comment nos solutions sont conçues pour maximiser votre impact
        et renforcer votre présence sur le marché. Nous vous offrons des outils
        et des stratégies qui optimisent chaque aspect de votre projet. En
        ajustant continuellement nos approches, nous assuront que votre
        visibilité reste au plus haut niveau, même face aux évolutions du
        marché.
      </p>

      <ul className={`icon-list bullet-bg bullet-soft-${color}`}>
        <li>
          <i className="uil uil-check" />{" "}
          <span className="fw-bold">Optimisation des Ressources:</span>
          <p>
            Nous adaptons nos solutions pour utiliser vos ressources de manière
            optimale.
          </p>
        </li>
        <li>
          <i className="uil uil-check" />{" "}
          <span className="fw-bold">Optimisation des Performances SEO:</span>
          <p>
            Nous analysons en profondeur les performances SEO de nos solutions
            pour identifier les points forts et les axes d'amélioration. Grâce à
            une évaluation continue des indicateurs clés, nous ajustons nos
            stratégies pour améliorer votre classement dans les résultats de
            recherche et maximiser votre visibilité en ligne.
          </p>
        </li>
        <li>
          <i className="uil uil-check" />{" "}
          <span className="fw-bold">Adaptabilité et Évolution:</span>
          <p>
            Nos solutions sont flexibles et évolutives, s’ajustant à vos besoins
            croissants pour maintenir votre satisfaction.
          </p>
        </li>
      </ul>

      <NextLink
        title="En savoir plus"
        href="#"
        className={`btn btn-${color} mt-2`}
      />
    </div>
  );
};
const List3 = ({ color, title }: ListProps) => {
  return (
    <div className="col-lg-6">
      <h2 className="mb-3">{title}</h2>
      <p>
        Nous offrons un accompagnement dédié pour vous guider à chaque étape,
        assurant que vous bénéficiez d'un soutien personnalisé et efficace tout
        au long de votre projet.
      </p>

      <ul className={`icon-list bullet-bg bullet-soft-${color}`}>
        <li>
          <i className="uil uil-check" />{" "}
          <span className="fw-bold">Support Personnalisé:</span>
          <p>
            Notre équipe vous fournit des conseils et des recommandations sur
            mesure, adaptés spécifiquement à vos besoins et objectifs.
          </p>
        </li>
        <li>
          <i className="uil uil-check" />{" "}
          <span className="fw-bold">Assistance Proactive:</span>
          <p>
            Nous anticipons vos besoins et problèmes potentiels, vous offrant
            des solutions avant même que des défis ne surviennent, pour assurer
            une progression fluide.
          </p>
        </li>
        <li>
          <i className="uil uil-check" />{" "}
          <span className="fw-bold">Communication Continue:</span>
          <p>
            Nous maintenons un contact régulier avec vous pour suivre
            l’évolution du projet, répondre à vos questions et ajuster les
            actions selon vos retours et évolutions.
          </p>
        </li>
      </ul>

      <NextLink
        title="En savoir plus"
        href="#"
        className={`btn btn-${color} mt-2`}
      />
    </div>
  );
};
