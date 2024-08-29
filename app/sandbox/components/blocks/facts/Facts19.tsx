import CountUp from '@sandbox/components/reuseable/CountUp';

export default function Facts19() {
  return (
    <div className="row gx-lg-0 gy-10 align-items-center text-inverse">
      <div className="col-lg-6">
        <figure>
          <img
            className="img-auto"
            src="/img/illustrations/ui4.png"
            srcSet="/img/illustrations/ui4@2x.png 2x"
            alt=""
          />
        </figure>
      </div>

      <div className="col-lg-5 ms-lg-auto">
        <h2 className="display-2 mb-3 text-white">Nos solutions</h2>

        <p className="lead fs-lg pe-lg-5">
          Nous étudions attentivement nos solutions pour soutenir chaque étape
          de votre croissance.
        </p>

        <p className="mb-6">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Praesent commodo cursus maecenas sed.
        </p>

        <div className="row align-items-center counter-wrapper gy-6">
          <div className="col-md-6">
            <h3 className="counter counter-lg mb-1 text-white">
              <CountUp end={99.7} decimals={1} suffix="%" />
            </h3>
            <h5 className="mb-1 text-white">Customer Satisfaction</h5>
            <span className="ratings five text-red" />
          </div>

          <div className="col-md-6">
            <h3 className="counter counter-lg mb-1 text-white">
              <CountUp end={4} suffix="x" />
            </h3>
            <h5 className="mb-1 text-white">New Visitors</h5>
            <span className="ratings five" />
          </div>
        </div>
      </div>
    </div>
  );
}
