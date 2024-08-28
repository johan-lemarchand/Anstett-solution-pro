import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "app/sandbox/components/reuseable/Breadcrumb";
import RegisterForm from "app/sandbox/components/elements/forms/RegisterForm";
// CUSTOM DATA
const breadcrumb = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "S'inscrire", url: "#" }
];

export default function Register() {
  return (
    <Fragment>
      {/* ========== title section ========== */}
      <section
        className="wrapper image-wrapper bg-image bg-overlay bg-overlay-light-600 text-white"
        style={{ backgroundImage: "url(/img/photos/bg18.png)" }}>
        <div className="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h1 className="display-1 mb-3">S'inscrire</h1>
              <Breadcrumb data={breadcrumb} />
            </div>
          </div>
        </div>
      </section>

      {/* ========== register form section ========== */}
      <section className="wrapper bg-light">
        <div className="container pb-14 pb-md-16">
          <div className="row">
            <div className="col-lg-7 col-xl-6 col-xxl-5 mx-auto mt-n20">
              <div className="card">
                <div className="card-body p-11 text-center">
                  <h2 className="mb-3 text-start">Inscrivez-vous à Anstett Solutions Pro</h2>
                  <p className="lead mb-6 text-start">Le processus d’inscription prend moins d’une minute.</p>
                  <RegisterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
