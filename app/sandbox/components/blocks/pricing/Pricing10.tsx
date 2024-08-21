import clsx from "clsx";
import NextLink from "app/sandbox/components/reuseable/links/NextLink";
// CUSTOM DATA
import data from "app/sandbox/data/demo-27";

export default function Pricing10() {
  return (
    <div>
      <div className="row text-center">
        <div className="col-md-10 col-lg-8 col-xl-9 col-xxl-8 mx-auto">
          <h3 className="display-3 ls-sm mb-10 px-xl-15">
            Nous offrons des prix avantageux et un service de qualité pour votre entreprise.
          </h3>
        </div>
      </div>

      <div className="pricing-wrapper mb-10 mb-md-14">
        <div className="row gx-0 gy-6">
          {data.pricingList.map(({ price, plan, features }) => (
            <div className="col-md-6 col-lg-3" key={plan}>
              <div
                className={clsx({
                  "pricing card shadow-none": true,
                  "bg-gray": plan === "Corporate"
                })}>
                <div className="card-body">
                  <h4 className="card-title ls-sm">{plan} Plan</h4>
                  <div className="prices text-dark">
                    <div className="price justify-content-start">
                      <span className="price-currency">$</span>
                      <span className="price-value">{price}</span>
                      <span className="price-duration">mo</span>
                    </div>
                  </div>

                  <ul className="icon-list bullet-green mt-7 mb-8">
                    {features.map((item, i) => {
                      const itemArr = item.split(" ");

                      return (
                        <li key={item + i}>
                          <i className="uil uil-check" />
                          <strong>{itemArr[0]}</strong> {itemArr[1]}
                        </li>
                      );
                    })}
                  </ul>

                  <NextLink
                    href="#"
                    title="Choisir la formule"
                    className={clsx({
                      "btn rounded": true,
                      "btn-primary": plan === "Corporate",
                      "btn-soft-primary": plan !== "Corporate"
                    })}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
