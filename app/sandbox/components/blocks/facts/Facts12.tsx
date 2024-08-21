import CountUp from "app/sandbox/components/reuseable/CountUp";
// CUSTOM ICON COMPONENT
import TargetTwo from "app/sandbox/icons/solid-duo/TargetTwo";
import BarChartTwo from "app/sandbox/icons/solid-duo/BarChartTwo";
import EmployeesTwo from "app/sandbox/icons/solid-duo/EmployeesTwo";

export default function Facts12() {
  return (
    <div className="container-card">
      <div
        className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 pb-15"
        style={{ backgroundImage: "url(/img/photos/bg22.png)" }}>
        <div className="card-body py-14 px-0">
          <div className="container">
            <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
              <div className="col-lg-4 text-center text-lg-start">
                <h3 className="display-4 mb-3 pe-xxl-15">Nous sommes fiers de nos projets</h3>
                <p className="lead fs-lg mb-0 pe-xxl-10">Nous apportons des solutions pour faciliter la vie de nos clients.</p>
              </div>

              <div className="col-lg-8 mt-lg-2">
                <div className="row align-items-center counter-wrapper gy-6 text-center">
                  <div className="col-md-4">
                    <TargetTwo />
                    <h3 className="counter">
                      <CountUp end={1000} suffix="+" />
                    </h3>
                    <p className="mb-0">Projets réalisés</p>
                  </div>

                  <div className="col-md-4">
                    <BarChartTwo />
                    <h3 className="counter">
                      <CountUp end={4} suffix="x" />
                    </h3>
                    <p className="mb-0">Croissance du chiffre</p>
                  </div>

                  <div className="col-md-4">
                    <EmployeesTwo />
                    <h3 className="counter">
                      <CountUp end={99.7} suffix="%" />
                    </h3>
                    <p className="mb-0">Satisfaction client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
