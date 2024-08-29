import { Fragment } from 'react';
// GLOBAL CUSTOM COMPONENTS
import Filter from 'app/sandbox/components/common/Filter';
import Select from 'app/sandbox/components/reuseable/Select';
import Pagination from 'app/sandbox/components/reuseable/Pagination';
import Breadcrumb from 'app/sandbox/components/reuseable/Breadcrumb';
import { ProductCard } from 'app/sandbox/components/reuseable/product-cards';
// CUSTOM DATA
import products from 'app/sandbox/data/product-list';

export default function ShopTwo() {
  // filter options
  const options = [
    { id: 1, title: 'Trier par popularité', value: 'popular' },
    { id: 2, title: 'Trier par note moyenne', value: 'rating' },
    { id: 3, title: 'Trier par nouveauté', value: 'new' },
    { id: 4, title: 'Trier par prix: croissant', value: 'low-to-high' },
    { id: 5, title: 'Trier par prix: décroissant', value: 'high-to-low' },
  ];

  return (
    <Fragment>
      {/* ========== breadcrumb section ========== */}
      <section className="wrapper bg-gray">
        <div className="container py-3 py-md-5">
          <Breadcrumb className="mb-0" />
        </div>
      </section>

      {/* ========== products section ========== */}
      <section className="wrapper bg-light">
        <div className="container pb-14 pb-md-16 pt-12">
          <div className="row gy-10">
            <div className="col-lg-9 order-lg-2">
              <div className="row align-items-center mb-10 position-relative zindex-1">
                <div className="col-md-7 col-xl-8 pe-xl-20">
                  <h2 className="display-6 mb-1">Nouveautés</h2>
                  <p className="mb-0 text-muted">
                    Affichage de 1-9 sur 30 résultats
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
                  <Select options={options} />
                </div>
              </div>

              <div className="row gx-md-8 gy-10 gy-md-13 mb-10">
                {products.map(item => (
                  <ProductCard
                    {...item}
                    key={item.id}
                    className="col-md-6 col-xl-4"
                  />
                ))}
              </div>

              {/* ========== pagination section ========== */}
              <Pagination />
            </div>

            {/* ========== filter sidebar section ========== */}
            <Filter />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
