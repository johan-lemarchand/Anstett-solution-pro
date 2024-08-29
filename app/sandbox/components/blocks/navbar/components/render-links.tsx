import ListItemLink from '@sandbox/components/reuseable/links/ListItemLink';

export interface LinkType {
  url: string;
  title: string;
  id: string | number;
}

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
