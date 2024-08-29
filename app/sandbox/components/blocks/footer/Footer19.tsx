import { PropsWithChildren } from "react";
import SocialLinks from "@sandbox/components/reuseable/SocialLinks";

// ==============================================================
interface WidgetProps extends PropsWithChildren {
  title: string;
}
// ==============================================================

const Widget = ({ title, children }: WidgetProps) => (
  <div className="col-md-4">
    <div className="widget">
      <h4 className="widget-title">{title}</h4>
      {children}
    </div>
  </div>
);

export default function Footer19() {
  return (
    <footer className="pt-12">
      <div className="container pb-12 text-center">
        <div className="row mt-n10 mt-lg-0">
          <div className="col-xl-10 mx-auto">
            <div className="row mb-3">
              {/* address widget column */}
              <Widget title="Adresse">
                <address>
                26E rue de Kaltenhouse <br className="d-none d-md-block" /> 67240 Oberhoffen-Sur-Moder
                </address>
              </Widget>

              {/* phone widget column */}
              <Widget title="Téléphone">
                <p>
                  06 42 18 55 95 <br />
                </p>
              </Widget>

              {/* email widget column */}
              <Widget title="E-mail">
                <p>
                  <a href="mailto:anstett.solutions.pro@gmail.com" className="link-body">
                    anstett.solutions.pro@gmail.com
                  </a>{" "}
                  <br className="d-none d-md-block" />
                  <a href="mailto:exemple.second.mail@gmail.com" className="link-body">
                      exemple.second.mail@gmail.com
                  </a>
                </p>
              </Widget>
            </div>

            <p>© 2024 Anstett Solutions Pro. Tous droits réservés.</p>

            {/* social link list */}
            <SocialLinks className="nav social justify-content-center" />
          </div>
        </div>
      </div>
    </footer>
  );
}
