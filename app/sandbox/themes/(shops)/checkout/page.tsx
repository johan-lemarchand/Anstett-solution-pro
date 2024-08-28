import { Fragment } from "react";
// CUSTOM UTILS LIBRARY FUNCTIONS
import currency from "app/sandbox/utils/currency";
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from "app/sandbox/components/reuseable/Breadcrumb";
import { ProductCard2 } from "app/sandbox/components/reuseable/product-cards";
import { Checkbox, Input, Select } from "app/sandbox/components/elements/checkout-form";
// CUSTOM DATA
import { breadcrumb, orderProducts, orderSummeryRow } from "app/sandbox/data/checkout-page";

export default function Checkout() {
  return (
    <Fragment>
      {/* ========== breadcrumb section ========== */}
      <section className="wrapper bg-gray">
        <div className="container py-3 py-md-5">
          <Breadcrumb data={breadcrumb} className="mb-0" />
        </div>
      </section>

      <div className="wrapper bg-light">
        <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
          <div className="row gx-md-8 gx-xl-12 gy-12">
            {/* ========== shipping section ========== */}
            <div className="col-lg-8">
              <div className="alert alert-blue alert-icon mb-6" role="alert">
                <i className="uil uil-exclamation-circle"></i> Vous avez déjà un compte ? {" "}
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  className="alert-link hover"
                  data-bs-target="#modal-signin">
                  Connectez Vous
                </a>{" "}
                pour une expérience de paiement plus rapide.
              </div>

              <h3 className="mb-4">Adresse de facturation</h3>

              <form className="needs-validation">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <Input type="text" id="firstName" placeholder="Prénom" label="Prénom" />
                  </div>

                  <div className="col-sm-6">
                    <Input type="text" id="lastName" placeholder="Nom" label="Nom" />
                  </div>

                  <div className="col-12">
                    <Input type="email" id="email" placeholder="you@example.com" label="Email" />
                  </div>

                  <div className="col-12">
                    <Input type="text" id="address" placeholder="1234 Main St" label="Adresse" />
                  </div>

                  <div className="col-12">
                    <Input type="text" id="address2" placeholder="Apartment or suite" label="Adresse 2 (Optionnel)" />
                  </div>

                  <div className="col-md-5">
                    <Select
                      required
                      id="country"
                      label="Pays"
                      options={[{ title: "France", value: "usa" }]}
                    />
                  </div>

                  <div className="col-md-4">
                    <Select
                      required
                      id="state"
                      label="Ville"
                      options={[{ title: "Strasbourg", value: "california" }]}
                    />
                  </div>

                  <div className="col-md-3">
                    <Input type="text" id="zip" placeholder="Zip Code" label="Code postal" />
                  </div>
                </div>

                <hr className="mt-7 mb-6" />

                <Checkbox defaultChecked id="same-address" label="Adresse de livraison est la même que mon adresse de facturation" />
                <Checkbox id="save-info" label="Enregistrer mes informations pour la prochaine fois" />

                <hr className="mt-7 mb-6" />
                <h3 className="mb-4">Payment</h3>

                <div className="mt-3 mb-6">
                  <Checkbox required id="credit" type="radio" defaultChecked label="Carte bancaire" name="paymentMethod" />
                  <Checkbox type="radio" name="paymentMethod" id="debit" label="Carte cadeau" required />
                  <Checkbox type="radio" name="paymentMethod" id="paypal" label="PayPal" required />
                </div>

                <div className="row gy-3 gx-3">
                  <div className="col-md-12">
                    <Input
                      required
                      type="text"
                      id="cc-number"
                      label="Numéro de carte bancaire"
                      placeholder="Credit card number"
                    />
                  </div>

                  <div className="col-md-6">
                    <Input required type="text" id="cc-name" label="Titulaire de la carte" placeholder="Name on card" />
                  </div>

                  <div className="col-md-3">
                    <Input required type="text" id="cc-expiration" placeholder="Expiration" label="Date d'expiration" />
                  </div>

                  <div className="col-md-3">
                    <Input required type="text" id="cc-cvv" placeholder="CVV" label="Cryptogramme" />
                  </div>
                </div>
              </form>
            </div>

            {/* ========== order summary section ========== */}
            <div className="col-lg-4">
              <h3 className="mb-4">Récapitulatif De Commande</h3>

              <div className="shopping-cart mb-7">
                {orderProducts.map((item) => (
                  <ProductCard2 {...item} key={item.id} />
                ))}
              </div>

              <hr className="my-4" />
              <h3 className="mb-2">Livraison</h3>

              <div className="mb-5">
                <div className="form-check mb-2">
                  <input id="standard" name="shippingMethod" type="radio" className="form-check-input" required />
                  <label className="form-check-label" htmlFor="standard">
                    Gratuit - Livraison standard
                  </label>
                  <small className="text-muted d-block">La livraison peut prendre 5-6 jours ouvrables</small>
                </div>

                <div className="form-check">
                  <input
                    required
                    id="express"
                    type="radio"
                    defaultChecked
                    name="shippingMethod"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="express">
                    $10 - Livraison express
                  </label>
                  <small className="text-muted d-block">La livraison peut prendre 2-3 jours ouvrables</small>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-order">
                  <tbody>
                    {orderSummeryRow.map(({ name, value }) => (
                      <tr key={name}>
                        <td className="ps-0">
                          <strong className="text-dark">{name}</strong>
                        </td>

                        <td className={value.parentClass}>
                          <p className={value.childClass}>
                            {name === "Discount" && "-"}
                            {currency(value.amount)}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <button type="submit" className="btn btn-primary rounded w-100 mt-4">
                Passer la commande
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
