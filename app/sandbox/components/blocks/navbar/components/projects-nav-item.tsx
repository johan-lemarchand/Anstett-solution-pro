// GLOBAL CUSTOM COMPONENTS
import DropdownToggleLink from '@sandbox/components/reuseable/links/DropdownToggleLink';
// LOCAL CUSTOM COMPONENTS
import renderLinks from './render-links';
// CUSTOM DATA
import { projectsNavigation } from '@sandbox/data/navigation';

export default function ProjectsNavItem() {
  return (
    <li className="nav-item dropdown">
      <DropdownToggleLink
        title="Projets"
        className="nav-link dropdown-toggle"
      />

      <div className="dropdown-menu dropdown-lg">
        <div className="dropdown-lg-content">
          {projectsNavigation.map(({ title, children }, i) => (
            <div key={title + i}>
              <h6 className="dropdown-header">{title}</h6>
              <ul className="list-unstyled">{renderLinks(children)}</ul>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}
