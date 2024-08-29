'use client';

// GLOBAL CUSTOM HOOKS
import useProgressbar from 'app/sandbox/hooks/useProgressbar';
// CUSTOM DATA
import data from 'app/sandbox/data/product-details-page';

export default function ProductReviewAside() {
  // USED FOR PROGRESS BAR ANIMATE
  useProgressbar();

  return (
    <aside className="col-lg-4 sidebar">
      <div className="widget mt-1">
        <h4 className="widget-title mb-3">Avis</h4>

        <div className="mb-5">
          <span className="ratings four" />
          <span>4.2 sur 5</span>
        </div>

        <ul className="progress-list">
          {data.ratings.map(({ star, value }) => (
            <li key={star}>
              <p>{star} Stars</p>
              <div className="progressbar line blue" data-value={value} />
            </li>
          ))}
        </ul>
      </div>

      <div className="widget mt-10">
        <h4 className="widget-title mb-3">Évaluer ce produit</h4>
        <p className="mb-5">Aenean eu leo quam ornare sem lacinia quam.</p>
        <a href="#" className="btn btn-primary rounded w-100">
          Évaluer ce produit
        </a>
      </div>
    </aside>
  );
}
