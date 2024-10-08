import data from '@sandbox/data/demo-26';

export default function About26() {
  return (
    <div className="row gx-3 gy-10 mb-14 mb-md-16 align-items-center">
      <div className="col-lg-6">
        <figure>
          <img
            className="w-auto"
            src="/img/illustrations/3d8.png"
            srcSet="/img/illustrations/3d8@2x.png 2x"
            alt=""
          />
        </figure>
      </div>

      <div className="col-lg-5 ms-auto">
        <h2 className="fs-16 text-uppercase text-grape mb-3">
          Pourquoi nous choisir?
        </h2>
        <h3 className="display-4 mb-8">
          Voici donc quelques raisons pour lesquelles nos clients nous
          choisissent.
        </h3>

        <div className="row gy-6">
          {data.abouts.map(({ id, Icon, title, description }) => (
            <div className="col-md-6" key={id}>
              <div className="d-flex flex-row">
                <Icon className="icon-svg-xs text-grape me-4" />
                <div>
                  <h4 className="mb-1">{title}</h4>
                  <p className="mb-0">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
