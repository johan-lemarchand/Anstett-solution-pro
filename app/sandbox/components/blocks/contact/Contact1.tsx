export default function Contact1() {
  return (
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center">
      <div className="col-md-8 col-lg-6 position-relative">
        <div
          className="shape bg-dot primary rellax w-17 h-21"
          style={{ top: "-2rem", left: "-1.9rem" }}
        />
        <div
          className="shape rounded bg-soft-primary rellax d-md-block"
          style={{ width: "85%", height: "90%", right: "-1.5rem", bottom: "-1.8rem" }}
        />

        <figure className="rounded">
          <img src="/img/photos/about14.jpg" srcSet="/img/photos/about14@2x.jpg 2x" alt="" />
        </figure>
      </div>

      <div className="col-lg-5 col-xl-4 offset-lg-1">
        <h2 className="fs-16 text-uppercase text-line text-primary mb-3">Se mettre en contact</h2>
        <h2 className="display-4 mb-8">Convaincu? Faisons quelque chose de grand ensemble.</h2>

        <div className="d-flex flex-row">
          <div>
            <div className="icon text-primary fs-28 me-6 mt-n1">
              <i className="uil uil-location-pin-alt" />
            </div>
          </div>

          <div>
            <h5 className="mb-1">Adresse</h5>
            <address>
              26E rue de Kaltenhouse , <br className="d-none d-md-block" />
              67240 Oberhoffen-Sur-Moder
            </address>
          </div>
        </div>

        <div className="d-flex flex-row">
          <div>
            <div className="icon text-primary fs-28 me-6 mt-n1">
              <i className="uil uil-phone-volume" />
            </div>
          </div>
          <div>
            <h5 className="mb-1">Téléphone</h5>
            <p>06 42 18 55 95</p>
          </div>
        </div>

        <div className="d-flex flex-row">
          <div>
            <div className="icon text-primary fs-28 me-6 mt-n1">
              <i className="uil uil-envelope" />
            </div>
          </div>

          <div>
            <h5 className="mb-1">E-mail</h5>
            <p className="mb-0">
              <a href="mailto:anstett.solutions.pro@gmail.com" className="link-body">
                anstett.solutions.pro@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
