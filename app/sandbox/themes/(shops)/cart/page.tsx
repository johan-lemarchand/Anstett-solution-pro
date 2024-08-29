import { Fragment } from 'react';
import clsx from 'clsx';
// GLOBAL CUSTOM COMPONENTS
import Breadcrumb from '@sandbox/components/reuseable/Breadcrumb';
import CartListItem from '@sandbox/components/reuseable/CartListItem';
// CUSTOM UTILS LIBRARY FUNCTIONS
import currency from '@sandbox/utils/currency';
// CUSTOM DATA
import {
  breadcrumb,
  cartList,
  orderSummeryRow,
  tableHeading,
} from '@sandbox/data/cart-page';

export default function Cart() {
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
            <div className="col-lg-8">
              {/* ========== product list section ========== */}
              <div className="table-responsive">
                <table className="table text-center shopping-cart">
                  <thead>
                    <tr>
                      {tableHeading.map(({ id, title }) => (
                        <th
                          className={clsx({ 'ps-0 w-25': id === 1 })}
                          key={id}
                        >
                          <div
                            className={clsx({
                              'text-start': id === 1,
                              'h4 mb-0': true,
                            })}
                          >
                            {title}
                          </div>
                        </th>
                      ))}

                      <th />
                    </tr>
                  </thead>

                  <tbody>
                    {cartList.map(item => (
                      <CartListItem key={item.id} {...item} />
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ========== coupon section ========== */}
              <div className="row mt-0 gy-4">
                <div className="col-md-8 col-lg-7">
                  <div className="form-floating input-group">
                    <input
                      type="url"
                      className="form-control"
                      placeholder="Enter promo code"
                      id="seo-check"
                    />
                    <label htmlFor="seo-check">Saisissez le code promo</label>
                    <button className="btn btn-primary" type="button">
                      Appliquer
                    </button>
                  </div>
                </div>

                <div className="col-md-4 col-lg-5 ms-auto ms-lg-0 text-md-end">
                  <button className="btn btn-primary rounded">
                    Mettre à jour
                  </button>
                </div>
              </div>
            </div>

            {/* ========== order summary section ========== */}
            <div className="col-lg-4">
              <h3 className="mb-4">Récapitulatif De Commande</h3>
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
                            {name === 'Discount' && '-'}
                            {currency(value.amount)}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <button className="btn btn-primary rounded w-100 mt-4">
                Passer la commande
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
