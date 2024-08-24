import Link from "next/link";
// GLOBAL CUSTOM COMPONENTS
import DropdownToggleLink from "app/sandbox/components/reuseable/links/DropdownToggleLink";
// CUSTOM DATA
import { demos } from "app/sandbox/data/navigation";

export default function DemosNavItem() {
  return (
    <li className="nav-item dropdown dropdown-mega">
      <DropdownToggleLink title="Demos" className="nav-link dropdown-toggle" />

      <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
        <li className="mega-menu-content mega-menu-scroll">
          <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-4 gy-lg-2 list-unstyled">
            {demos.map(({ id, title, url, thumnail }) => (
              <li className="col" key={id}>
                <Link href={url} className="dropdown-item">
                  <img
                    alt={title}
                    src={`/img/demos/${thumnail}.jpg`}
                    srcSet={`/img/demos/${thumnail}@2x.jpg 2x`}
                    className="rounded lift d-none d-lg-block"
                  />
                  <span className="d-lg-none">{title}</span>
                </Link>
              </li>
            ))}
          </ul>

          <span className="d-none d-lg-flex">
            <i className="uil uil-direction" />
            <strong>Défiler pour voir plus</strong>
          </span>
        </li>
      </ul>
    </li>
  );
}
