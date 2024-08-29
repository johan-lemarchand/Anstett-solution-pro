export default function Search() {
  return (
    <div
      className="offcanvas offcanvas-top bg-light"
      id="offcanvas-search"
      data-bs-scroll="true"
    >
      <div className="container d-flex flex-row py-6">
        <form className="search-form w-100">
          <input
            type="text"
            id="search-form"
            className="form-control"
            placeholder="Saisir le mot-clé et appuyer sur Entrée."
          />
        </form>

        <button
          type="button"
          aria-label="Fermer"
          className="btn-close"
          data-bs-dismiss="offcanvas"
        />
      </div>
    </div>
  );
}
