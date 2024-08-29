import Link from 'next/link';
// CUSTOM DATA
import { timelines } from 'app/sandbox/data/demo-33';

export default function About34() {
  return (
    <section className="wrapper bg-light">
      <div className="container py-16 py-md-18">
        <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center mt-lg-18 mb-16 mb-md-18">
          <div className="col-md-8 col-lg-6 mx-auto">
            <div className="img-mask mask-3 px-xxl-5">
              <img
                src="/img/avatars/avatar.jpg"
                srcSet="/img/avatars/avatar@2x.jpg 2x"
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-6">
            <h2 className="display-2 mb-3">Plus à mon sujet</h2>

            <p className="lead fs-24">
              👋 Bonjour ! Je suis Camille, une designer de produits
              multidisciplinaire 🧸 basée à New York 🚕. Je suis profondément
              passionnée par le travail que je réalise 💌.
            </p>

            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus
              commodo, tortor mauris condimentum nibh ut fermentum massa justo
              sit amet risus.
            </p>

            <p>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Aenean lacinia bibendum nulla sed consectetur.
            </p>

            <Link
              href="#"
              className="btn btn-primary btn-icon btn-icon-end mt-2"
            >
              En savoir plus <i className="uil uil-arrow-up-right" />
            </Link>
          </div>
        </div>

        <div className="row gx-md-8 gx-xl-12 gy-10">
          <div className="col-lg-5 mx-auto">
            <h2 className="display-2 mb-3">Mes expériences</h2>

            <p className="lead fs-24 pe-xxl-8">
              J’ai eu le plaisir de travailler avec des entreprises 🏢 dans une
              variété d’industries 🏛️ Je suis toujours intéressée par de
              nouvelles rencontres ✨ et des aventures passionnantes 🧨
            </p>

            <Link
              href="#"
              className="btn btn-primary btn-icon btn-icon-end mt-2"
            >
              Téléchargez mon CV. <i className="uil uil-arrow-up-right" />
            </Link>
          </div>

          <div className="col-lg-7">
            <ul className="timeline">
              {timelines.map(({ description, duration, id, title }) => (
                <li className="timeline-item" key={id}>
                  <div className="timeline-info meta fs-14">{duration}</div>
                  <div className="timeline-marker" />

                  <div className="timeline-content">
                    <h3 className="timeline-title">{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
