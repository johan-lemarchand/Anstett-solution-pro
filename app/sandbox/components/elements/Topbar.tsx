import clsx from "clsx";

// =========================================================
interface TopbarProps {
  bgColor?: string;
  textColor?: string;
}
// =========================================================

export default function Topbar({ bgColor, textColor }: TopbarProps) {
  return (
    <div
      className={clsx({
        "fw-bold fs-15 mb-2": true,
        [bgColor || "bg-primary"]: true,
        [textColor || "text-white"]: true
      })}>
      <div className="container py-2 d-md-flex flex-md-row">
        <div className="d-flex flex-row align-items-center">
          <div className="icon text-white fs-22 mt-1 me-2">
            <i className="uil uil-location-pin-alt" />
          </div>

          <address className="mb-0">26E rue de Kaltenhouse 67240 Oberhoffen-Sur-Moder</address>
        </div>

        <div className="d-flex flex-row align-items-center me-6 ms-auto">
          <div className="icon text-white fs-22 mt-1 me-2">
            <i className="uil uil-phone-volume" />
          </div>

          <p className="mb-0">06 42 18 55 95</p>
        </div>

        <div className="d-flex flex-row align-items-center">
          <div className="icon text-white fs-22 mt-1 me-2">
            <i className="uil uil-message" />
          </div>

          <p className="mb-0">
            <a href="mailto:anstettsolutionspro@email.com" className="link-white hover">
              anstett.solutions.pro@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
