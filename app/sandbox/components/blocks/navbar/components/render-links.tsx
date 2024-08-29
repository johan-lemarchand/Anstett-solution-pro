import ListItemLink from 'app/sandbox/components/reuseable/links/ListItemLink';
import { LinkType } from '../../../../../types/link';

export default function renderLinks(links: LinkType[]) {
  return links.map(item => (
    <ListItemLink
      key={item.id}
      href={item.url}
      title={item.title}
      linkClassName="dropdown-item"
    />
  ));
}
