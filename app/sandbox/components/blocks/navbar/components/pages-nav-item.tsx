// GLOBAL CUSTOM COMPONENTS
import ListItemLink from "@sandbox/components/reuseable/links/ListItemLink";
import DropdownToggleLink from "@sandbox/components/reuseable/links/DropdownToggleLink";
// LOCAL CUSTOM COMPONENTS
import renderLinks from "./render-links";
// CUSTOM DATA
import { pages } from "@sandbox/data/navigation";

export default function PagesNavItem() {
  return (
    <li className="nav-item dropdown">
      <DropdownToggleLink
        title="Modules"
        className="nav-link dropdown-toggle"
      />

      <ul className="dropdown-menu">
        {pages.map(({ id, title, children }) => {
          return (
            <li className="dropdown dropdown-submenu dropend" key={id}>
              <DropdownToggleLink
                title={title}
                className="dropdown-item dropdown-toggle"
              />
              <ul className="dropdown-menu">{renderLinks(children)}</ul>
            </li>
          );
        })}

        <ListItemLink
          href="/themes/pricing"
          title="Pricing"
          linkClassName="dropdown-item"
        />
      </ul>
    </li>
  );
}
