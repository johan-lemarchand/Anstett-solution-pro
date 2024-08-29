"use client";

import useReplaceMe from "@sandbox/hooks/useReplaceMe";

export default function Hero20() {
  // enable the text rotator animation
  useReplaceMe();

  return (
    <section className="video-wrapper bg-overlay bg-overlay-gradient px-0 mt-0 min-vh-80">
      <video
        loop
        muted
        autoPlay
        playsInline
        // __idm_id__="1187841"
        id="1187841"
        src="/media/movie2.mp4"
        poster="/img/photos/movie2.jpg"
      />

      <div className="video-content">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 col-xl-6 text-center text-white mx-auto">
              <h1 className="display-1 fs-54 text-white mb-5">
                <span className="rotator-zoom">Solutions rapides, pensée novatrice, support de premier ordre</span>
              </h1>

              <p className="lead fs-24 mb-0 mx-xxl-8">
              Nous sommes une agence digitale spécialisée dans le web design, le développement mobile et l’optimisation seo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
