import SocialLinks from "@sandbox/components/reuseable/SocialLinks";

export default function Footer22() {
  return (
    <footer>
      <div className="container py-7">
        <div className="d-md-flex align-items-center justify-content-between">
          <p className="mb-2 mb-lg-0">© 2024 Anstett Solutions Pro. Tous droits réservés.</p>

          <SocialLinks className="nav social social-muted mb-0 text-md-end" />
        </div>
      </div>
    </footer>
  );
}
