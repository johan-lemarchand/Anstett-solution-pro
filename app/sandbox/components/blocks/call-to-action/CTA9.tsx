import NextLink from "app/sandbox/components/reuseable/links/NextLink";

export default function CTA9() {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay text-white"
      style={{ backgroundImage: "url(/img/photos/bg33.jpg)" }}>
      <div className="container py-14 py-md-17 text-center">
        <div className="row">
          <div className="col-xl-10 col-xxl-8 mx-auto text-center">
            <i className="icn-flower text-white fs-30 opacity-50" />
            <h2 className="display-4 text-white mt-2 mb-7">
              Je suis là pour immortaliser vos moments. Vous cherchez un photographe attentionné, amusant et passionné?
            </h2>
            <NextLink title="Contactez-moi" href="#" className="btn btn-white rounded-pill mb-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
